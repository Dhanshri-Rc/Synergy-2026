import { useEffect, useMemo, useState } from "react";
import {
  FileCheck2,
  Search,
  RotateCcw,
  Download,
  Eye,
  CheckCircle2,
  XCircle,
  Clock,
  Trash2,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { copyrightAPI } from "../../services/api";

const statusOptions = ["All", "Pending", "Approved", "Rejected"];

function StatusBadge({ status }) {
  const styles = {
    Approved: "bg-green-50 text-green-700 border-green-200",
    Pending: "bg-orange-50 text-orange-600 border-orange-200",
    Rejected: "bg-red-50 text-red-600 border-red-200",
  };

  return (
    <span
      className={`rounded-md border px-3 py-1 text-xs font-semibold ${styles[status] || "bg-gray-50 text-gray-600 border-gray-200"}`}
    >
      {status}
    </span>
  );
}

export default function AdminCopyrightForms() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [selected, setSelected] = useState(null);
  const [page, setPage] = useState(1);

  const rowsPerPage = 5;

  const mapFormToRow = (f) => ({
    _id: f._id,
    id: f._id.slice(-8).toUpperCase(),
    paperId: f.submissionId,
    title: f.submission?.title || "—",
    author: f.user?.fullName || "—",
    email: f.user?.email || "—",
    submittedDate: new Date(f.createdAt).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
    status: f.status,
    fileName: f.file?.originalName || "-",
  });

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const { data } = await copyrightAPI.getAll({ limit: 1000 });
        if (!cancelled) setRows(data.forms.map(mapFormToRow));
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

  const filteredRows = useMemo(() => {
    return rows.filter((item) => {
      const keyword = search.toLowerCase();

      const matchSearch =
        item.id.toLowerCase().includes(keyword) ||
        item.paperId.toLowerCase().includes(keyword) ||
        item.title.toLowerCase().includes(keyword) ||
        item.author.toLowerCase().includes(keyword) ||
        item.email.toLowerCase().includes(keyword);

      const matchStatus = status === "All" || item.status === status;

      return matchSearch && matchStatus;
    });
  }, [rows, search, status]);

  const totalPages = Math.max(1, Math.ceil(filteredRows.length / rowsPerPage));

  const paginatedRows = filteredRows.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const updateStatus = (id, newStatus) => {
    const row = rows.find((item) => item.id === id);
    const previousStatus = row?.status;

    setRows((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item
      )
    );

    setSelected((prev) =>
      prev && prev.id === id ? { ...prev, status: newStatus } : prev
    );

    if (row?._id) {
      copyrightAPI.updateStatus(row._id, newStatus).catch(() => {
        setRows((prev) =>
          prev.map((item) => (item.id === id ? { ...item, status: previousStatus } : item))
        );
        setSelected((prev) =>
          prev && prev.id === id ? { ...prev, status: previousStatus } : prev
        );
      });
    }
  };

  const deleteForm = async (id) => {
    const row = rows.find((item) => item.id === id);
    if (!row) return;

    if (!window.confirm("Delete this copyright form? This cannot be undone.")) return;

    try {
      if (row._id) await copyrightAPI.remove(row._id);
      setRows((prev) => prev.filter((item) => item.id !== id));
      setSelected(null);
    } catch (err) {
      alert(err.message || "Failed to delete copyright form.");
    }
  };

  const resetFilters = () => {
    setSearch("");
    setStatus("All");
    setPage(1);
  };

  const exportCSV = () => {
    const headers = [
      "Form ID",
      "Paper ID",
      "Paper Title",
      "Author",
      "Email",
      "Submitted Date",
      "Status",
      "File Name",
    ];

    const csvRows = filteredRows.map((row) =>
      [
        row.id,
        row.paperId,
        row.title,
        row.author,
        row.email,
        row.submittedDate,
        row.status,
        row.fileName,
      ]
        .map((value) => `"${String(value).replaceAll('"', '""')}"`)
        .join(",")
    );

    const csv = [headers.join(","), ...csvRows].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "copyright-forms.csv";
    link.click();

    URL.revokeObjectURL(url);
  };

  const stats = [
    {
      title: "Total Forms",
      value: rows.length,
      icon: FileCheck2,
    },
    {
      title: "Approved",
      value: rows.filter((r) => r.status === "Approved").length,
      icon: CheckCircle2,
    },
    {
      title: "Pending",
      value: rows.filter((r) => r.status === "Pending").length,
      icon: Clock,
    },
    {
      title: "Rejected",
      value: rows.filter((r) => r.status === "Rejected").length,
      icon: XCircle,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-[22px] font-semibold text-[#07113F]">
          Copyright Forms
        </h1>
        <p className="mt-1 text-[14px] text-[#4B5579]">
          Manage copyright form submissions received from authors.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-lg border border-[#DDE6F5] bg-white p-4 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <p className="text-[12px] font-semibold text-[#4B5579]">
                  {item.title}
                </p>
                <Icon size={18} className="text-[#005BFF]" />
              </div>

              <h2 className="mt-3 text-[20px] font-semibold text-[#07113F]">
                {item.value}
              </h2>
            </div>
          );
        })}
      </div>

      <div className="grid gap-4 rounded-lg border border-[#DDE6F5] bg-white p-4 shadow-sm md:grid-cols-2 xl:grid-cols-[2fr_1fr_auto]">
        <div className="flex h-11 items-center rounded-lg border border-[#D9E3F3] px-4">
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            placeholder="Search by paper ID, title, author or email..."
            className="flex-1 bg-transparent text-sm outline-none"
          />
          <Search size={18} className="text-[#4B5579]" />
        </div>

        <select
          value={status}
          onChange={(e) => {
            setStatus(e.target.value);
            setPage(1);
          }}
          className="h-11 rounded-lg border border-[#D9E3F3] bg-white px-4 text-sm outline-none"
        >
          {statusOptions.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>

        <button
          onClick={resetFilters}
          className="flex h-11 items-center justify-center gap-2 rounded-lg border border-[#D9E3F3] px-4 text-sm font-semibold hover:bg-[#EEF4FF]"
        >
          <RotateCcw size={16} />
          Reset
        </button>
      </div>

      <div className="overflow-hidden rounded-lg border border-[#DDE6F5] bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-[#E7EDF8] px-4 py-3">
          <p className="text-sm font-semibold text-[#07113F]">
            Copyright Form Records
          </p>

          <button
            onClick={exportCSV}
            className="flex items-center gap-2 rounded-lg bg-[#005BFF] px-4 py-2 text-xs font-semibold text-white hover:bg-[#0047c7]"
          >
            <Download size={15} />
            Export CSV
          </button>
        </div>

        <div className="hidden overflow-x-auto md:block">
          <table className="w-full min-w-[1050px] text-left text-[12px]">
            <thead className="bg-[#FBFCFF]">
              <tr className="border-b border-[#E2E8F5] text-[11px] uppercase text-[#4B5579]">
                <th className="px-2 py-4">Form ID</th>
                <th className="px-2 py-4">Paper ID</th>
                <th className="px-2 py-4">Paper Title</th>
                <th className="px-2 py-4">Author</th>
                <th className="px-2 py-4">Email</th>
                <th className="px-2 py-4">Submitted</th>
                <th className="px-2 py-4">Status</th>
                <th className="px-2 py-4">File</th>
                <th className="px-2 py-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {paginatedRows.map((row) => (
                <tr
                  key={row.id}
                  className="border-b border-[#E7EDF8] hover:bg-[#F6F9FF]"
                >
                  <td className="px-2 py-4 text-[12px] font-semibold text-[#005BFF]">
                    {row.id}
                  </td>
                  <td className="px-2 py-4 text-[12px] font-semibold">
                    {row.paperId}
                  </td>
                  <td className="max-w-[280px] px-2 py-4 text-[12px] font-semibold">
                    {row.title}
                  </td>
                  <td className="px-2 py-4 text-[12px]">{row.author}</td>
                  <td className="px-2 py-4 text-[12px]">{row.email}</td>
                  <td className="px-2 py-4 text-[12px]">{row.submittedDate}</td>
                  <td className="px-2 py-4">
                    <StatusBadge status={row.status} />
                  </td>
                  <td className="px-2 py-4 text-[12px]">{row.fileName}</td>
                  <td className="px-2 py-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => setSelected(row)}
                        className="rounded border border-blue-200 p-2 text-blue-600 hover:bg-blue-600 hover:text-white"
                        title="View"
                      >
                        <Eye size={15} />
                      </button>

                      <button
                        onClick={() => updateStatus(row.id, "Approved")}
                        className="rounded border border-green-200 p-2 text-green-600 hover:bg-green-600 hover:text-white"
                        title="Verify"
                      >
                        <CheckCircle2 size={15} />
                      </button>

                      <button
                        onClick={() => updateStatus(row.id, "Rejected")}
                        className="rounded border border-red-200 p-2 text-red-600 hover:bg-red-600 hover:text-white"
                        title="Reject"
                      >
                        <XCircle size={15} />
                      </button>

                      <button
                        onClick={() => window.open(copyrightAPI.fileUrl(row._id), "_blank")}
                        className="rounded border border-gray-200 p-2 text-gray-600 hover:bg-gray-700 hover:text-white"
                        title="Download"
                      >
                        <Download size={15} />
                      </button>

                      <button
                        onClick={() => deleteForm(row.id)}
                        className="rounded border border-gray-200 p-2 text-gray-600 hover:bg-gray-700 hover:text-white"
                        title="Delete"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {paginatedRows.length === 0 && (
                <tr>
                  <td
                    colSpan="9"
                    className="px-4 py-10 text-center text-sm text-gray-500"
                  >
                    No copyright forms available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="grid gap-3 p-3 md:hidden">
          {paginatedRows.map((row) => (
            <div
              key={row.id}
              className="rounded-lg border border-[#DDE6F5] bg-white p-4 shadow-sm"
            >
              <p className="text-xs font-semibold text-[#005BFF]">{row.id}</p>
              <h3 className="mt-2 text-sm font-semibold">{row.title}</h3>

              <div className="mt-3 space-y-1 text-xs text-[#4B5579]">
                <p>
                  <b>Paper ID:</b> {row.paperId}
                </p>
                <p>
                  <b>Author:</b> {row.author}
                </p>
                <p>
                  <b>Email:</b> {row.email}
                </p>
                <p>
                  <b>Submitted:</b> {row.submittedDate}
                </p>
                <p>
                  <b>File:</b> {row.fileName}
                </p>
              </div>

              <div className="mt-3">
                <StatusBadge status={row.status} />
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  onClick={() => setSelected(row)}
                  className="rounded border p-2 text-blue-600"
                >
                  <Eye size={15} />
                </button>

                <button
                  onClick={() => updateStatus(row.id, "Approved")}
                  className="rounded border p-2 text-green-600"
                >
                  <CheckCircle2 size={15} />
                </button>

                <button
                  onClick={() => updateStatus(row.id, "Rejected")}
                  className="rounded border p-2 text-red-600"
                >
                  <XCircle size={15} />
                </button>

                <button
                  onClick={() => window.open(copyrightAPI.fileUrl(row._id), "_blank")}
                  className="rounded border p-2 text-gray-600"
                >
                  <Download size={15} />
                </button>

                <button
                  onClick={() => deleteForm(row.id)}
                  className="rounded border p-2 text-gray-600"
                >
                  <Trash2 size={15} />
                </button>
              </div>
            </div>
          ))}

          {paginatedRows.length === 0 && (
            <div className="rounded-lg border border-[#DDE6F5] bg-white p-5 text-center text-sm text-gray-500">
              No copyright forms available.
            </div>
          )}
        </div>

        <div className="flex flex-col gap-3 border-t border-[#E7EDF8] px-4 py-3 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            Showing{" "}
            {filteredRows.length === 0 ? 0 : (page - 1) * rowsPerPage + 1} to{" "}
            {Math.min(page * rowsPerPage, filteredRows.length)} of{" "}
            {filteredRows.length} entries
          </p>

          <div className="flex gap-2">
            <button
              disabled={page === 1}
              onClick={() => setPage((p) => p - 1)}
              className="rounded border px-3 py-2 disabled:opacity-40"
            >
              <ChevronLeft size={15} />
            </button>

            <button className="rounded border bg-[#005BFF] px-3 py-2 text-white">
              {page}
            </button>

            <button
              disabled={page === totalPages}
              onClick={() => setPage((p) => p + 1)}
              className="rounded border px-3 py-2 disabled:opacity-40"
            >
              <ChevronRight size={15} />
            </button>
          </div>
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-2xl rounded-xl bg-white shadow-xl">
            <div className="flex items-center justify-between border-b px-5 py-4">
              <div>
                <h2 className="text-lg font-bold">Copyright Form Details</h2>
                <p className="text-xs text-gray-500">{selected.id}</p>
              </div>

              <button onClick={() => setSelected(null)}>
                <X size={20} />
              </button>
            </div>

            <div className="grid gap-4 px-5 py-5 text-sm sm:grid-cols-2">
              <div className="sm:col-span-2">
                <p className="text-xs font-semibold text-[#005BFF]">
                  Paper Title
                </p>
                <p className="mt-1 font-semibold">{selected.title}</p>
              </div>

              <p>
                <b>Paper ID:</b> {selected.paperId}
              </p>
              <p>
                <b>Author:</b> {selected.author}
              </p>
              <p>
                <b>Email:</b> {selected.email}
              </p>
              <p>
                <b>Submitted:</b> {selected.submittedDate}
              </p>
              <p>
                <b>File:</b> {selected.fileName}
              </p>

              <div>
                <p className="mb-2 font-semibold">Status</p>
                <StatusBadge status={selected.status} />
              </div>
            </div>

            <div className="flex flex-col gap-3 border-t px-5 py-4 sm:flex-row sm:justify-end">
              <button
                onClick={() => updateStatus(selected.id, "Approved")}
                className="rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white"
              >
                Verify
              </button>

              <button
                onClick={() => updateStatus(selected.id, "Rejected")}
                className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white"
              >
                Reject
              </button>

              <button
                onClick={() => window.open(copyrightAPI.fileUrl(selected._id), "_blank")}
                className="rounded-lg bg-[#005BFF] px-4 py-2 text-sm font-semibold text-white"
              >
                Download
              </button>

              <button
                onClick={() => setSelected(null)}
                className="rounded-lg border px-4 py-2 text-sm font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}