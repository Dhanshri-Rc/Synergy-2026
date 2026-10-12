import React, { useEffect, useMemo, useState } from "react";
import {
  FileText,
  FileCheck2,
  ChevronDown,
  Search,
  RotateCcw,
  Download,
  Eye,
  Pencil,
  CheckCircle2,
  XCircle,
  Hourglass,
  Copyright,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { submissionAPI } from "../../services/api";

const statusOptions = [
  "Under Review",
  "Decision Pending",
  "Accepted",
  "Rejected",
];
const copyrightOptions = ["Received", "Pending"];

function StatCard({ item }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-[#DDE6F5] bg-white px-2 py-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div
        className="flex h-9 w-9 items-center justify-center rounded-full"
        style={{ backgroundColor: item.bg, color: item.color }}
      >
        <item.icon size={16} />
      </div>
      <div>
        <p className="text-[11px] font-semibold" style={{ color: item.color }}>
          {item.title}
        </p>
        <p className="mt-1 text-[18px] font-bold">{item.value}</p>
      </div>
    </div>
  );
}

function StatusBadge({ status, onChange }) {
  const styles = {
    "Under Review": "bg-[#FFF7EA] text-[#FF7A00] border-[#FFDDB2]",
    "Decision Pending": "bg-[#F2EDFF] text-[#5B25FF] border-[#D9CCFF]",
    Accepted: "bg-[#EAF8F1] text-[#087B43] border-[#CDEEDC]",
    Rejected: "bg-[#FFF0F2] text-[#FF1E37] border-[#FFC9D0]",
  };

  return (
    <label className="relative inline-flex">
      <select
        value={status}
        onChange={(e) => onChange(e.target.value)}
        className={`appearance-none rounded-md border px-3 py-1.5 pr-8 text-xs font-semibold outline-none ${styles[status]}`}
      >
        {statusOptions.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <ChevronDown
        size={13}
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
      />
    </label>
  );
}

function CopyrightBadge({ value, onChange }) {
  const received = value === "Received";
  return (
    <label className="relative inline-flex">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`appearance-none rounded-md border px-3 py-1.5 pr-8 text-xs font-semibold outline-none ${
          received
            ? "bg-[#EAF8F1] text-[#087B43] border-[#CDEEDC]"
            : "bg-[#FFF0F2] text-[#FF1E37] border-[#FFC9D0]"
        }`}
      >
        {copyrightOptions.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <ChevronDown
        size={13}
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
      />
    </label>
  );
}

// function Sidebar({ mobileOpen, setMobileOpen }) {
//   return (
//     <>
//       {mobileOpen && (
//         <button
//           type="button"
//           aria-label="Close sidebar overlay"
//           onClick={() => setMobileOpen(false)}
//           className="fixed inset-0 z-30 bg-black/40 lg:hidden"
//         />
//       )}

//       <aside
//         className={`fixed left-0 top-0 z-40 h-screen w-[260px] bg-[#020B26] text-white transition-transform duration-300 lg:translate-x-0 ${
//           mobileOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <div className="flex h-[75px] items-center justify-between border-b border-white/10 bg-white px-6">
//           {/* Logo */}
//           <div className="px-2 pt-4 pb-4">
//             <Link to="/" className="flex items-center">
//               <img
//                 src={Logo}
//                 alt="IDEAX 2026"
//                 className="h-10 w-auto object-contain"
//               />
//             </Link>
//           </div>
//           <button
//             type="button"
//             aria-label="Close sidebar"
//             onClick={() => setMobileOpen(false)}
//             className="rounded-md p-2 text-[#020B26] lg:hidden"
//           >
//             <X size={22} />
//           </button>
//         </div>

//         <nav className="px-4 py-8">
//           <p className="px-4 pt-1 pb-3 text-[12px] uppercase text-white/55">
//             MAIN MENU
//           </p>
//           <div className="space-y-2">
//             {menuItems.map((item) => (
//               <button
//                 key={item.name}
//                 onClick={() => setMobileOpen(false)}
//                 className="flex w-full items-center gap-4 rounded-lg px-3 py-2 text-left text-[14px] transition hover:bg-[#0F5BFF]"
//               >
//                 <item.icon size={20} />
//                 {item.name}
//               </button>
//             ))}
//           </div>

//           <div className="my-6 h-px bg-white/10" />

//           <p className="mb-4 px-2 text-[13px] text-white/70">SETTINGS</p>
//           <div className="space-y-2">
//             {settingItems.map((item) => (
//               <button
//                 key={item.name}
//                 onClick={() => setMobileOpen(false)}
//                 className="flex w-full items-center gap-4 rounded-lg px-3 py-2 text-left text-[14px] transition hover:bg-[#0F5BFF]"
//               >
//                 <item.icon size={20} />
//                 {item.name}
//               </button>
//             ))}
//           </div>
//         </nav>
//       </aside>
//     </>
//   );
// }

export default function AdminSubmissions() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [trackFilter, setTrackFilter] = useState("All Tracks");
  const [copyFilter, setCopyFilter] = useState("All Copyright Status");
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selectedSubmission, setSelectedSubmission] = useState(null);

  const mapSubmissionToRow = (s) => ({
    _id: s._id,
    id: s.submissionId,
    title: s.title,
    author: s.user?.fullName || s.correspondingAuthor || "—",
    track: s.track,
    date: new Date(s.createdAt).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }) + "\n" + new Date(s.createdAt).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
    status: s.status,
    copy: s.copyrightStatus,
  });

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const { data } = await submissionAPI.getAll({ limit: 1000, sortBy: "createdAt", sortOrder: "desc" });
        if (!cancelled) setRows(data.submissions.map(mapSubmissionToRow));
      } catch {
        // leave rows empty on error
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);


  const tracks = useMemo(
    () => ["All Tracks", ...new Set(rows.map((row) => row.track))],
    [rows],
  );

  const stats = useMemo(
    () => [
      {
        title: "All Submissions",
        value: rows.length,
        icon: FileText,
        color: "#005BFF",
        bg: "#EAF1FF",
      },
      {
        title: "Under Review",
        value: rows.filter((r) => r.status === "Under Review").length,
        icon: FileCheck2,
        color: "#FF8500",
        bg: "#FFF1DF",
      },
      {
        title: "Decision Pending",
        value: rows.filter((r) => r.status === "Decision Pending").length,
        icon: Hourglass,
        color: "#6B35FF",
        bg: "#F0E9FF",
      },
      {
        title: "Accepted",
        value: rows.filter((r) => r.status === "Accepted").length,
        icon: CheckCircle2,
        color: "#079455",
        bg: "#E7F8EF",
      },
      {
        title: "Rejected",
        value: rows.filter((r) => r.status === "Rejected").length,
        icon: XCircle,
        color: "#FF1E37",
        bg: "#FFECEF",
      },
      {
        title: "Copyright Pending",
        value: rows.filter((r) => r.copy === "Pending").length,
        icon: Copyright,
        color: "#005BFF",
        bg: "#EAF1FF",
      },
    ],
    [rows],
  );

  const filteredRows = useMemo(() => {
    const term = search.trim().toLowerCase();

    return rows.filter((row) => {
      const matchesSearch =
        !term ||
        row.id.toLowerCase().includes(term) ||
        row.title.toLowerCase().includes(term) ||
        row.author.toLowerCase().includes(term);

      const matchesStatus =
        statusFilter === "All Status" || row.status === statusFilter;
      const matchesTrack =
        trackFilter === "All Tracks" || row.track === trackFilter;
      const matchesCopy =
        copyFilter === "All Copyright Status" || row.copy === copyFilter;

      return matchesSearch && matchesStatus && matchesTrack && matchesCopy;
    });
  }, [rows, search, statusFilter, trackFilter, copyFilter]);

  const totalPages = Math.max(1, Math.ceil(filteredRows.length / rowsPerPage));
  const currentPage = Math.min(page, totalPages);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedRows = filteredRows.slice(
    startIndex,
    startIndex + rowsPerPage,
  );

  const updateRow = (id, key, value) => {
    setRows((prev) =>
      prev.map((row) => (row.id === id ? { ...row, [key]: value } : row)),
    );

    if (key === "copy") {
      const row = rows.find((r) => r.id === id);
      if (row?._id) {
        submissionAPI.update(row._id, { copyrightStatus: value }).catch(() => {
          // revert on failure
          setRows((prev) =>
            prev.map((r) => (r.id === id ? { ...r, copy: row.copy } : r)),
          );
        });
      }
    }
  };

  const updateSubmissionStatus = (id, status) => {
    const row = rows.find((r) => r.id === id);
    const previousStatus = row?.status;

    setRows((prev) =>
      prev.map((row) => (row.id === id ? { ...row, status } : row)),
    );

    setSelectedSubmission((prev) =>
      prev && prev.id === id ? { ...prev, status } : prev,
    );

    if (row?._id) {
      submissionAPI.updateStatus(row._id, status).catch(() => {
        // revert on failure
        setRows((prev) =>
          prev.map((r) => (r.id === id ? { ...r, status: previousStatus } : r)),
        );
        setSelectedSubmission((prev) =>
          prev && prev.id === id ? { ...prev, status: previousStatus } : prev,
        );
      });
    }
  };

  const viewSubmission = (submission) => {
    setSelectedSubmission(submission);
  };

  const resetFilters = () => {
    setSearch("");
    setStatusFilter("All Status");
    setTrackFilter("All Tracks");
    setCopyFilter("All Copyright Status");
    setPage(1);
    setRowsPerPage(5);
  };

  const exportCSV = () => {
    const headers = [
      "Submission ID",
      "Paper Title",
      "Corresponding Author",
      "Track",
      "Submitted On",
      "Status",
      "Copyright Status",
    ];
    const csvRows = filteredRows.map((row) =>
      [
        row.id,
        row.title,
        row.author,
        row.track,
        row.date.replace("\n", " "),
        row.status,
        row.copy,
      ]
        .map((value) => `"${String(value).replaceAll('"', '""')}"`)
        .join(","),
    );

    const csv = [headers.join(","), ...csvRows].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "submissions.csv";
    link.click();
    URL.revokeObjectURL(url);
  };

  const bulkUpdateStatus = () => {
    setRows((prev) =>
      prev.map((row) =>
        row.status === "Under Review"
          ? { ...row, status: "Decision Pending" }
          : row,
      ),
    );
  };

  const pageNumbers = useMemo(() => {
    if (totalPages <= 5)
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    return [1, 2, 3, "...", totalPages];
  }, [totalPages]);

  const showingFrom = filteredRows.length === 0 ? 0 : startIndex + 1;
  const showingTo = Math.min(startIndex + rowsPerPage, filteredRows.length);

  // const handleLogout = () => {
  //   localStorage.removeItem("token");
  //   localStorage.removeItem("user");
  //   navigate("/login");
  // };

return (
  <>
    <div>
          <div className="mb-7">
            <h1 className="text-[20px] font-[600]">Submissions</h1>
            <p className="mt-2 text-[14px] text-[#4B5579]">
              Manage manuscript submissions and update their status.
            </p>
          </div>

          <div className="mb-6 grid gap-4 md:grid-cols-2 xl:grid-cols-[1.8fr_1fr_1fr_1.55fr_auto]">
            <div className="flex items-center rounded-lg border border-[#D9E3F3] bg-white px-4 shadow-sm">
              <input
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
                className="h-12 flex-1 bg-transparent text-[14px] outline-none placeholder:text-[#59648B]"
                placeholder="Search by ID, Title or Author"
              />
              <Search size={18} className="text-[#24346A]" />
            </div>

            <label className="relative">
              <select
                value={statusFilter}
                onChange={(e) => {
                  setStatusFilter(e.target.value);
                  setPage(1);
                }}
                className="flex h-12 w-full appearance-none items-center justify-between rounded-lg border border-[#D9E3F3] bg-white px-4 pr-10 text-[14px] shadow-sm outline-none transition hover:border-[#005BFF]"
              >
                {["All Status", ...statusOptions].map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={18}
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2"
              />
            </label>

            <label className="relative">
              <select
                value={trackFilter}
                onChange={(e) => {
                  setTrackFilter(e.target.value);
                  setPage(1);
                }}
                className="flex h-12 w-full appearance-none items-center justify-between rounded-lg border border-[#D9E3F3] bg-white px-4 pr-10 text-[14px] shadow-sm outline-none transition hover:border-[#005BFF]"
              >
                {tracks.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={18}
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2"
              />
            </label>

            <label className="relative">
              <select
                value={copyFilter}
                onChange={(e) => {
                  setCopyFilter(e.target.value);
                  setPage(1);
                }}
                className="flex h-12 w-full appearance-none items-center justify-between rounded-lg border border-[#D9E3F3] bg-white px-4 pr-10 text-[14px] shadow-sm outline-none transition hover:border-[#005BFF]"
              >
                {["All Copyright Status", ...copyrightOptions].map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={18}
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2"
              />
            </label>

            <button
              onClick={resetFilters}
              className="flex h-12 items-center justify-center gap-2 rounded-lg border border-[#D9E3F3] bg-white px-5 text-[14px] font-semibold shadow-sm transition hover:bg-[#EEF4FF]"
            >
              <RotateCcw size={17} />
              Reset
            </button>
          </div>

          <div className="mb-6 grid gap-2 sm:grid-cols-2 xl:grid-cols-6">
            {stats.map((item) => (
              <StatCard key={item.title} item={item} />
            ))}
          </div>

          <div className="overflow-hidden rounded-lg border border-[#DDE6F5] bg-white shadow-sm">
            <div className="hidden overflow-x-auto md:block">
              <table className="w-full min-w-[1100px] text-left text-sm">
                <thead className="bg-[#FBFCFF]">
                  <tr className="border-b border-[#E2E8F5] text-[11px] font-semibold">
                    <th className="px-2 py-4">Submission ID</th>
                    <th className="px-2 py-4">Paper Title</th>
                    <th className="px-2 py-4">Corresponding Author</th>
                    <th className="px-2 py-4">Track</th>
                    <th className="px-2 py-4">Submitted On</th>
                    <th className="px-2 py-4">Status</th>
                    <th className="px-2 py-4">Copyright Status</th>
                    <th className="px-2 py-4">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {paginatedRows.length === 0 ? (
                    <tr>
                      <td
                        colSpan="8"
                        className="px-4 py-8 text-center text-[13px] text-[#4B5579]"
                      >
                        No submissions found.
                      </td>
                    </tr>
                  ) : (
                    paginatedRows.map((row) => (
                      <tr
                        key={row.id}
                        className="border-b border-[#E7EDF8] transition hover:bg-[#F6F9FF]"
                      >
                        <td className="px-2 py-4 text-[11px] font-medium text-[#005BFF]">
                          {row.id}
                        </td>
                        <td className="max-w-[270px] px-2 py-4 text-[11px] font-semibold leading-5">
                          {row.title}
                        </td>
                        <td className="px-2 py-4 text-[11px]">{row.author}</td>
                        <td className="px-2 py-4 text-[11px]">{row.track}</td>
                        <td className="whitespace-pre-line px-4 py-4 text-[11px] leading-6">
                          {row.date}
                        </td>
                        <td className="px-2 py-4 text-[11px]">
                          <StatusBadge
                            status={row.status}
                            onChange={(value) =>
                              updateSubmissionStatus(row.id, value)
                            }
                          />
                        </td>
                        <td className="px-2 py-4">
                          <CopyrightBadge
                            value={row.copy}
                            onChange={(value) =>
                              updateRow(row.id, "copy", value)
                            }
                          />
                        </td>
                        <td className="px-2 py-4">
                          <div className="flex gap-2">
                            <button
                              onClick={() => viewSubmission(row)}
                              className="flex h-8 w-8 items-center text-[11px] justify-center rounded border border-[#B8CBFF] text-[#005BFF] transition hover:bg-[#005BFF] hover:text-white"
                              title="View Submission"
                            >
                              <Eye size={15} />
                            </button>
                            <button
                              onClick={() => updateSubmissionStatus(row.id, "Accepted")}
                              className="flex h-8 w-8 items-center text-[11px] justify-center rounded border border-green-200 text-green-700 transition hover:bg-green-600 hover:text-white"
                              title="Approve"
                            >
                              <CheckCircle2 size={15} />
                            </button>
                            <button
                              onClick={() => updateSubmissionStatus(row.id, "Rejected")}
                              className="flex h-8 w-8 items-center text-[11px] justify-center rounded border border-red-200 text-red-600 transition hover:bg-red-600 hover:text-white"
                              title="Reject"
                            >
                              <XCircle size={15} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            <div className="grid gap-3 p-3 md:hidden">
              {paginatedRows.length === 0 ? (
                <div className="rounded-lg border border-[#DDE6F5] bg-white p-5 text-center text-[13px] text-[#4B5579]">
                  No submissions found.
                </div>
              ) : (
                paginatedRows.map((row) => (
                  <div
                    key={row.id}
                    className="rounded-lg border border-[#DDE6F5] bg-white p-4 shadow-sm"
                  >
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <div>
                        <p className="text-[11px] font-medium text-[#005BFF]">
                          {row.id}
                        </p>
                        <p className="mt-2 text-[12px] font-semibold leading-5">
                          {row.title}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={exportCSV}
                          className="flex h-8 w-8 items-center justify-center rounded border border-[#B8CBFF] text-[#005BFF] transition hover:bg-[#005BFF] hover:text-white"
                        >
                          <Download size={15} />
                        </button>
                        <button
                          onClick={() => viewSubmission(row)}
                          className="flex h-8 w-8 items-center justify-center rounded border border-[#B8CBFF] text-[#005BFF] transition hover:bg-[#005BFF] hover:text-white"
                          title="View Submission"
                        >
                          <Eye size={15} />
                        </button>
                        <button
                          onClick={() => updateSubmissionStatus(row.id, "Accepted")}
                          className="flex h-8 w-8 items-center justify-center rounded border border-green-200 text-green-700 transition hover:bg-green-600 hover:text-white"
                          title="Approve"
                        >
                          <CheckCircle2 size={15} />
                        </button>
                        <button
                          onClick={() => updateSubmissionStatus(row.id, "Rejected")}
                          className="flex h-8 w-8 items-center justify-center rounded border border-red-200 text-red-600 transition hover:bg-red-600 hover:text-white"
                          title="Reject"
                        >
                          <XCircle size={15} />
                        </button>
                      </div>
                    </div>
                    <div className="grid gap-2 text-[11px] text-[#31406E]">
                      <p>
                        <b>Corresponding Author:</b> {row.author}
                      </p>
                      <p>
                        <b>Track:</b> {row.track}
                      </p>
                      <p className="whitespace-pre-line">
                        <b>Submitted On:</b> {row.date}
                      </p>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <StatusBadge
                        status={row.status}
                        onChange={(value) => updateSubmissionStatus(row.id, value)}
                      />
                      <CopyrightBadge
                        value={row.copy}
                        onChange={(value) => updateRow(row.id, "copy", value)}
                      />
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="flex flex-col gap-4 px-4 py-3 text-[12px] sm:flex-row sm:items-center sm:justify-between">
              <p>
                Showing {showingFrom} to {showingTo} of {filteredRows.length}{" "}
                entries
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => setPage((prev) => Math.max(1, prev - 1))}
                    className="flex h-9 w-9 items-center justify-center rounded-md border border-[#DDE6F5] hover:bg-[#EEF4FF] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  {pageNumbers.map((p) => (
                    <button
                      key={p}
                      disabled={p === "..."}
                      onClick={() => typeof p === "number" && setPage(p)}
                      className={`h-9 min-w-9 rounded-md border px-3 ${
                        p === currentPage
                          ? "border-[#005BFF] bg-[#005BFF] text-white"
                          : "border-[#DDE6F5] bg-white hover:bg-[#EEF4FF]"
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                  <button
                    disabled={currentPage === totalPages}
                    onClick={() =>
                      setPage((prev) => Math.min(totalPages, prev + 1))
                    }
                    className="flex h-9 w-9 items-center justify-center rounded-md border border-[#DDE6F5] hover:bg-[#EEF4FF] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  <span>Rows per page:</span>
                  <label className="relative">
                    <select
                      value={rowsPerPage}
                      onChange={(e) => {
                        setRowsPerPage(Number(e.target.value));
                        setPage(1);
                      }}
                      className="flex h-9 appearance-none items-center gap-3 rounded-md border border-[#DDE6F5] bg-white px-4 pr-9 outline-none hover:bg-[#EEF4FF]"
                    >
                      {[5, 10, 25].map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      size={16}
                      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 grid gap-4 xl:grid-cols-[2fr_1.1fr]">
            <div className="grid gap-6 rounded-lg border border-[#DDE6F5] bg-white p-4 shadow-sm md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-[14px] font-[600]">Status Legend</h3>
                {[
                  ["#FF8500", "Under Review", "The paper ris under review."],
                  ["#6B35FF", "Decision Pending", "Awaiting final decision."],
                  ["#079455", "Accepted", "Paper accepted."],
                  ["#FF1E37", "Rejected", "Paper rejected."],
                ].map(([c, t, d]) => (
                  <div
                    key={t}
                    className="mb-2 grid grid-cols-[18px_120px_1fr] items-center gap-2 text-[12px]"
                  >
                    <span
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: c }}
                    />
                    <b>{t}</b>
                    <span className="text-[#31406E]">{d}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-[#DDE6F5] pt-5 md:border-l md:border-t-0 md:pl-10 md:pt-0">
                <h3 className="mb-4 text-[14px] font-[600]">
                  Copyright Status Legend
                </h3>
                {[
                  ["#079455", "Received", "Copyright form received."],
                  ["#FF1E37", "Pending", "Copyright form not yet received."],
                ].map(([c, t, d]) => (
                  <div
                    key={t}
                    className="mb-2 grid grid-cols-[18px_80px_1fr] items-center gap-2 text-[12px]"
                  >
                    <span
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: c }}
                    />
                    <b>{t}</b>
                    <span className="text-[#31406E] leading-2 text-[12px]">
                      {d}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-[#DDE6F5] bg-[#F7FBFF] p-5 shadow-sm">
              <h3 className="mb-5 text-[14px] font-[600] text-[#005BFF]">
                Quick Actions
              </h3>
              <button
                onClick={exportCSV}
                className="mb-5 flex items-center gap-5 text-[12px] font-medium transition hover:text-[#005BFF]"
              >
                <Download size={20} />
                Export Submissions (CSV)
              </button>
              <button
                onClick={bulkUpdateStatus}
                className="flex items-center gap-5 text-[12px] font-medium transition hover:text-[#005BFF]"
              >
                <Pencil size={20} />
                Bulk Update Status
              </button>
            </div>
          </div>
            </div>

      {selectedSubmission && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-2xl rounded-2xl bg-white shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b px-5 py-4">
              <div>
                <h2 className="text-[18px] font-bold text-[#07113F]">Submission Details</h2>
                <p className="mt-1 text-[12px] text-[#4B5579]">{selectedSubmission.id}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedSubmission(null)}
                className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>

            <div className="grid gap-4 px-5 py-5 text-[13px] text-[#31406E] sm:grid-cols-2">
              <div className="sm:col-span-2">
                <p className="text-[11px] font-semibold uppercase text-[#005BFF]">Paper Title</p>
                <p className="mt-1 font-semibold leading-6 text-[#07113F]">{selectedSubmission.title}</p>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase text-[#005BFF]">Corresponding Author</p>
                <p className="mt-1">{selectedSubmission.author}</p>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase text-[#005BFF]">Track</p>
                <p className="mt-1">{selectedSubmission.track}</p>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase text-[#005BFF]">Submitted On</p>
                <p className="mt-1 whitespace-pre-line">{selectedSubmission.date}</p>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase text-[#005BFF]">Copyright Status</p>
                <div className="mt-2">
                  <CopyrightBadge
                    value={selectedSubmission.copy}
                    onChange={(value) => updateRow(selectedSubmission.id, "copy", value)}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <p className="mb-2 text-[11px] font-semibold uppercase text-[#005BFF]">Review Status</p>
                <StatusBadge
                  status={selectedSubmission.status}
                  onChange={(value) => updateSubmissionStatus(selectedSubmission.id, value)}
                />
              </div>
            </div>

            <div className="flex flex-col gap-3 border-t px-5 py-4 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => updateSubmissionStatus(selectedSubmission.id, "Accepted")}
                className="rounded-lg bg-green-600 px-5 py-2.5 text-[13px] font-semibold text-white hover:bg-green-700"
              >
                Approve Paper
              </button>
              <button
                type="button"
                onClick={() => updateSubmissionStatus(selectedSubmission.id, "Rejected")}
                className="rounded-lg bg-red-600 px-5 py-2.5 text-[13px] font-semibold text-white hover:bg-red-700"
              >
                Reject Paper
              </button>
              <button
                type="button"
                onClick={() => setSelectedSubmission(null)}
                className="rounded-lg border border-[#DDE6F5] px-5 py-2.5 text-[13px] font-semibold hover:bg-[#F4F8FF]"
              >
                Close
              </button>
            </div>
          </div>
       
       </div>
      )}
    </>
  );
}