import { useEffect, useMemo, useState } from "react";
import {
  Users,
  Search,
  RotateCcw,
  Download,
  Eye,
  Mail,
  FileText,
  CheckCircle2,
  Clock,
  Trash2,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { authorAPI, adminAPI } from "../../services/api";

const statusOptions = ["All", "Active", "Blocked"];

function StatusBadge({ status }) {
  const styles = {
    Active: "bg-green-50 text-green-700 border-green-200",
    Blocked: "bg-red-50 text-red-600 border-red-200",
  };

  return (
    <span className={`rounded-md border px-3 py-1 text-xs font-semibold ${styles[status] || "bg-gray-50 text-gray-600 border-gray-200"}`}>
      {status}
    </span>
  );
}

export default function AdminAuthors() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [country, setCountry] = useState("All");
  const [selected, setSelected] = useState(null);
  const [page, setPage] = useState(1);

  const rowsPerPage = 5;

  const mapAuthorToRow = (a) => ({
    id: a._id,
    name: a.fullName,
    email: a.email,
    affiliation: a.organization || "—",
    country: a.country || "—",
    papers: a.submissionCount,
    accepted: a.accepted,
    pending: a.submissionCount - a.accepted - a.rejected,
    status: a.isActive === false ? "Blocked" : "Active",
  });

  const fetchAuthors = () => {
    setLoading(true);
    authorAPI
      .getAll({ limit: 1000 })
      .then(({ data }) => setRows(data.authors.map(mapAuthorToRow)))
      .catch(() => {})
      .finally(() => setLoading(false));
  };

  useEffect(fetchAuthors, []);

  const countries = useMemo(
    () => ["All", ...new Set(rows.map((r) => r.country).filter((c) => c && c !== "—"))],
    [rows]
  );

  const filteredRows = useMemo(() => {
    return rows.filter((item) => {
      const keyword = search.toLowerCase();

      const matchSearch =
        item.id.toLowerCase().includes(keyword) ||
        item.name.toLowerCase().includes(keyword) ||
        item.email.toLowerCase().includes(keyword) ||
        item.affiliation.toLowerCase().includes(keyword);

      const matchStatus = status === "All" || item.status === status;
      const matchCountry = country === "All" || item.country === country;

      return matchSearch && matchStatus && matchCountry;
    });
  }, [rows, search, status, country]);

  const totalPages = Math.max(1, Math.ceil(filteredRows.length / rowsPerPage));

  const paginatedRows = filteredRows.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const updateStatus = (id, newStatus) => {
    const isActive = newStatus === "Active";
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

    adminAPI.updateUserStatus(id, isActive).catch(() => {
      setRows((prev) =>
        prev.map((item) => (item.id === id ? { ...item, status: previousStatus } : item))
      );
      setSelected((prev) =>
        prev && prev.id === id ? { ...prev, status: previousStatus } : prev
      );
    });
  };

  const deleteAuthor = async (id) => {
    if (!window.confirm("Deactivate this author's account? They will no longer be able to log in.")) return;

    try {
      await adminAPI.updateUserStatus(id, false);
      setRows((prev) => prev.filter((item) => item.id !== id));
      setSelected(null);
    } catch (err) {
      alert(err.message || "Failed to deactivate author.");
    }
  };

  const resetFilters = () => {
    setSearch("");
    setStatus("All");
    setCountry("All");
    setPage(1);
  };

  const exportCSV = () => {
    const headers = [
      "Author ID",
      "Name",
      "Email",
      "Affiliation",
      "Country",
      "Total Papers",
      "Accepted",
      "Pending",
      "Status",
    ];

    const csvRows = filteredRows.map((row) =>
      [
        row.id,
        row.name,
        row.email,
        row.affiliation,
        row.country,
        row.papers,
        row.accepted,
        row.pending,
        row.status,
      ]
        .map((value) => `"${String(value).replaceAll('"', '""')}"`)
        .join(",")
    );

    const csv = [headers.join(","), ...csvRows].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "authors.csv";
    link.click();

    URL.revokeObjectURL(url);
  };

  const stats = [
    {
      title: "Total Authors",
      value: rows.length,
      icon: Users,
    },
    {
      title: "Active Authors",
      value: rows.filter((r) => r.status === "Active").length,
      icon: CheckCircle2,
    },
    {
      title: "Blocked Authors",
      value: rows.filter((r) => r.status === "Blocked").length,
      icon: Clock,
    },
    {
      title: "Total Papers",
      value: rows.reduce((sum, r) => sum + r.papers, 0),
      icon: FileText,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-[22px] font-semibold text-[#07113F]">
          Authors
        </h1>
        <p className="mt-1 text-[14px] text-[#4B5579]">
          Manage registered authors and their submitted papers.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
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

              <h2 className="mt-3 text-[20px] font-bold text-[#07113F]">
                {item.value}
              </h2>
            </div>
          );
        })}
      </div>

      <div className="grid gap-4 rounded-lg border border-[#DDE6F5] bg-white p-4 shadow-sm md:grid-cols-2 xl:grid-cols-[2fr_1fr_1fr_auto]">
        <div className="flex h-11 items-center rounded-lg border border-[#D9E3F3] px-4">
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            placeholder="Search by name, email or affiliation..."
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

        <select
          value={country}
          onChange={(e) => {
            setCountry(e.target.value);
            setPage(1);
          }}
          className="h-11 rounded-lg border border-[#D9E3F3] bg-white px-4 text-sm outline-none"
        >
          {countries.map((item) => (
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
            Author Records
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
          <table className="w-full min-w-[1000px] text-left text-[12px]">
            <thead className="bg-[#FBFCFF]">
              <tr className="border-b border-[#E2E8F5] text-[11px] uppercase text-[#4B5579]">
                <th className="px-2 py-4">Author ID</th>
                <th className="px-4 py-4">Name</th>
                <th className="px-2 py-4">Email</th>
                <th className="px-2 py-4">Affiliation</th>
                <th className="px-2 py-4">Country</th>
                <th className="px-2 py-4">Papers</th>
                <th className="px-2 py-4">Accepted</th>
                <th className="px-2 py-4">Pending</th>
                <th className="px-2 py-4">Status</th>
                <th className="px-2 py-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {paginatedRows.map((row) => (
                <tr
                  key={row.id}
                  className="border-b border-[#E7EDF8] hover:bg-[#F6F9FF]"
                >
                  <td className="px-2 py-4 text-xs font-semibold text-[#005BFF]">
                    {row.id}
                  </td>
                  <td className="px-2 py-4 text-xs font-semibold">
                    {row.name}
                  </td>
                  <td className="px-2 py-4 text-xs">{row.email}</td>
                  <td className="max-w-[250px] px-2 py-4 text-xs">
                    {row.affiliation}
                  </td>
                  <td className="px-2 py-4 text-xs">{row.country}</td>
                  <td className="px-2 py-4 text-xs">{row.papers}</td>
                  <td className="px-2 py-4 text-xs">{row.accepted}</td>
                  <td className="px-2 py-4 text-xs">{row.pending}</td>
                  <td className="px-2 py-4">
                    <StatusBadge status={row.status} />
                  </td>

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
                        onClick={() => alert(`Email sent to ${row.email}`)}
                        className="rounded border border-green-200 p-2 text-green-600 hover:bg-green-600 hover:text-white"
                        title="Email"
                      >
                        <Mail size={15} />
                      </button>

                      <button
                        onClick={() => updateStatus(row.id, "Blocked")}
                        className="rounded border border-red-200 p-2 text-red-600 hover:bg-red-600 hover:text-white"
                        title="Block"
                      >
                        <X size={15} />
                      </button>

                      <button
                        onClick={() => deleteAuthor(row.id)}
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
                    colSpan="10"
                    className="px-4 py-10 text-center text-sm text-gray-500"
                  >
                    No authors available.
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
              <h3 className="mt-2 text-sm font-semibold">{row.name}</h3>

              <div className="mt-3 space-y-1 text-xs text-[#4B5579]">
                <p>
                  <b>Email:</b> {row.email}
                </p>
                <p>
                  <b>Affiliation:</b> {row.affiliation}
                </p>
                <p>
                  <b>Country:</b> {row.country}
                </p>
                <p>
                  <b>Papers:</b> {row.papers}
                </p>
                <p>
                  <b>Accepted:</b> {row.accepted}
                </p>
                <p>
                  <b>Pending:</b> {row.pending}
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
                  onClick={() => alert(`Email sent to ${row.email}`)}
                  className="rounded border p-2 text-green-600"
                >
                  <Mail size={15} />
                </button>

                <button
                  onClick={() => updateStatus(row.id, "Blocked")}
                  className="rounded border p-2 text-red-600"
                >
                  <X size={15} />
                </button>

                <button
                  onClick={() => deleteAuthor(row.id)}
                  className="rounded border p-2 text-gray-600"
                >
                  <Trash2 size={15} />
                </button>
              </div>
            </div>
          ))}

          {paginatedRows.length === 0 && (
            <div className="rounded-lg border border-[#DDE6F5] bg-white p-5 text-center text-sm text-gray-500">
              No authors available.
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
            <div className="flex items-center justify-between border-b px-4 py-4">
              <div>
                <h2 className="text-lg font-bold">Author Details</h2>
                <p className="text-xs text-gray-500">{selected.id}</p>
              </div>

              <button onClick={() => setSelected(null)}>
                <X size={20} />
              </button>
            </div>

            <div className="grid gap-4 px-5 py-5 text-sm sm:grid-cols-2">
              <p>
                <b>Name:</b> {selected.name}
              </p>
              <p>
                <b>Email:</b> {selected.email}
              </p>
              <p>
                <b>Affiliation:</b> {selected.affiliation}
              </p>
              <p>
                <b>Country:</b> {selected.country}
              </p>
              <p>
                <b>Total Papers:</b> {selected.papers}
              </p>
              <p>
                <b>Accepted:</b> {selected.accepted}
              </p>
              <p>
                <b>Pending:</b> {selected.pending}
              </p>

              <div>
                <p className="mb-2 font-semibold">Status</p>
                <StatusBadge status={selected.status} />
              </div>
            </div>

            <div className="flex flex-col gap-3 border-t px-5 py-4 sm:flex-row sm:justify-end">
              <button
                onClick={() => alert(`Email sent to ${selected.email}`)}
                className="rounded-lg bg-[#005BFF] px-4 py-2 text-sm font-semibold text-white"
              >
                Send Email
              </button>

              <button
                onClick={() => updateStatus(selected.id, "Active")}
                className="rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white"
              >
                Mark Active
              </button>

              <button
                onClick={() => updateStatus(selected.id, "Blocked")}
                className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white"
              >
                Block
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