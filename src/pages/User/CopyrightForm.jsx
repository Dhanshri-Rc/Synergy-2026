import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FileText,
  Download,
  Info,
  PenLine,
  Printer,
  UploadCloud,
  CheckCircle,
  Headphones,
  ArrowRight,
  ArrowLeft,
  X,
  Eye,
} from "lucide-react";
import { submissionAPI, copyrightAPI } from "../../services/api";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const steps = [
  {
    no: 1,
    title: "Download Form",
    desc: "Download the copyright form template",
  },
  {
    no: 2,
    title: "Fill Form",
    desc: "Fill in article and author details in the form",
  },
  {
    no: 3,
    title: "Scan Form",
    desc: "Scan the completed and signed form",
  },
  {
    no: 4,
    title: "Upload Form",
    desc: "Upload the scanned form in PDF format",
  },
];

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB

export default function CopyrightFormPage() {
  const navigate = useNavigate();

  const [downloaded, setDownloaded] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [fileError, setFileError] = useState("");
  const [agree, setAgree] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [mySubmissions, setMySubmissions] = useState([]);
  const [selectedSubmissionId, setSelectedSubmissionId] = useState("");

  useEffect(() => {
    submissionAPI
      .getMy()
      .then(({ data }) => {
        setMySubmissions(data.submissions);
        if (data.submissions.length > 0) {
          setSelectedSubmissionId(data.submissions[0].submissionId);
        }
      })
      .catch(() => {});
  }, []);

  const selectedSubmission = mySubmissions.find((s) => s.submissionId === selectedSubmissionId);

  const currentStep = uploadedFile ? 4 : downloaded ? 2 : 1;

  const handleDownload = () => {
    setDownloaded(true);

    // Put your real PDF in public/forms/copyright-form.pdf
    // Public assets are accessed without /public in React/Vite.
    const link = document.createElement("a");
    link.href = "/form/copyright-form-professional.pdf";
    link.download = "copyright-form.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    setFileError("");

    if (!file) return;

    const allowedTypes = ["application/pdf", "image/jpeg", "image/png", "image/webp"];
    if (!allowedTypes.includes(file.type)) {
      setUploadedFile(null);
      setFileError("Only PDF or image files (JPEG, PNG, WEBP) are allowed.");
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setUploadedFile(null);
      setFileError("File size must be less than 5 MB.");
      return;
    }

    setUploadedFile(file);
  };

  const removeFile = () => {
    setUploadedFile(null);
    setFileError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!uploadedFile) {
      setFileError("Please upload the signed copyright form PDF.");
      return;
    }

    if (!selectedSubmissionId) {
      alert("Please select which paper submission this copyright form belongs to.");
      return;
    }

    if (!agree) {
      alert("Please confirm that the copyright form is completed and signed.");
      return;
    }

    setSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("submissionId", selectedSubmissionId);
      formData.append("copyrightForm", uploadedFile);

      await copyrightAPI.upload(formData);

      alert("Copyright form submitted successfully!");
      navigate("/dashboard");
    } catch (error) {
      alert(error.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFF] text-[#07113F] overflow-x-hidden">
      <main className="px-4 sm:px-6 lg:px-10 ">
        <motion.div initial="hidden" animate="show" variants={fadeUp}>
          <h1 className="text-[20px] font-semibold">Copyright Form</h1>
          <p className="mt-2 text-[14px] font-medium">
            Please complete the steps below to submit the copyright form.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-8">
          {steps.map((step, index) => {
            const active = step.no <= currentStep;

            return (
              <motion.div key={step.no} variants={fadeUp} className="relative">
                <div className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      active
                        ? "bg-[#2155FF] text-white"
                        : "border border-[#CCD4E5] text-[#07113F]"
                    }`}
                  >
                    {active && step.no < currentStep ? <CheckCircle size={18} /> : step.no}
                  </div>

                  {index !== steps.length - 1 && (
                    <div
                      className={`hidden lg:block flex-1 h-[1px] ml-4 mr-2 ${
                        active ? "bg-[#2155FF]" : "bg-[#D7DCEA]"
                      }`}
                    />
                  )}
                </div>

                <div className="mt-4">
                  <h3 className="text-[14px] font-semibold">{step.title}</h3>
                  <p className="text-[13px]">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 xl:grid-cols-[1fr_390px] gap-8 mt-8">
          <div className="space-y-4">
            <div className="flex items-center gap-4 bg-[#F4F8FF] border border-[#DCE8FA] rounded-[8px] px-6 py-4 text-[14px]">
              <Info className="text-[#0B63FF] shrink-0" />
              Please read the instructions carefully before downloading and uploading the form.
            </div>

            <ActionCard
              icon={Download}
              color="#0B63FF"
              title="1. Download Copyright Form"
              desc="Download the copyright form template, fill in the required details including article information and all author details."
              footer={downloaded ? "Downloaded successfully." : "File size: 245 KB"}
            >
              <button
                type="button"
                onClick={handleDownload}
                className="inline-flex items-center justify-center gap-3 border border-[#0B63FF] text-[#0B63FF] rounded-[6px] px-5 py-2 text-[14px] font-semibold hover:bg-[#0B63FF] hover:text-white transition"
              >
                <Download size={16} /> Download Copyright Form (PDF)
              </button>
            </ActionCard>

            <ActionCard
              icon={PenLine}
              color="#10B981"
              title="2. Fill in the Form"
              desc="Fill in the article details and author information. All authors must sign the form."
              list={[
                "Article Title, Submission ID and Track",
                "All author names, affiliations and signatures",
                "Date and corresponding author details",
              ]}
            />

            <ActionCard
              icon={Printer}
              color="#F5A400"
              title="3. Scan the Completed Form"
              desc="Scan the completed and signed form clearly."
              list={[
                "Ensure all signatures are visible",
                "Scan in color or grayscale",
                "Save the file in PDF format",
              ]}
            />

            <ActionCard
              icon={UploadCloud}
              color="#8B5CF6"
              title="4. Upload the Scanned Form"
              desc="Upload the scanned copyright form in PDF format."
              footer="Max file size: 5 MB"
            >
              <label className="inline-flex items-center justify-center gap-3 border border-[#0B63FF] text-[#0B63FF] rounded-[6px] px-5 py-2 text-[14px] font-semibold hover:bg-[#0B63FF] hover:text-white transition cursor-pointer">
                <UploadCloud size={16} /> Upload Scanned Form
                <input
                  type="file"
                  accept="application/pdf,image/jpeg,image/png,image/webp"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>

              {uploadedFile && (
                <div className="mt-4 rounded-[8px] border border-[#DCE8FA] bg-[#F8FAFF] px-4 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <p className="text-[14px] font-semibold text-[#10B981]">{uploadedFile.name}</p>
                    <p className="text-[12px] text-[#4B5579]">
                      {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={URL.createObjectURL(uploadedFile)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#0B63FF]"
                    >
                      <Eye size={15} /> View
                    </a>
                    <button
                      type="button"
                      onClick={removeFile}
                      className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#FF2D2D]"
                    >
                      <X size={15} /> Remove
                    </button>
                  </div>
                </div>
              )}

              {fileError && <p className="mt-3 text-[13px] font-semibold text-[#FF2D2D]">{fileError}</p>}
            </ActionCard>

            <label className="flex items-start gap-3 bg-white border border-[#DCE8FA] rounded-[10px] px-5 py-4 text-[14px] leading-6 cursor-pointer">
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="mt-1 accent-[#0B63FF]"
              />
              <span>
                I confirm that the uploaded copyright form is completed, scanned clearly, and signed by the required author(s).
              </span>
            </label>

            <div className="flex justify-between gap-4">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-3 rounded-[6px] border border-[#D7E2F4] px-7 py-2 text-[13px] font-semibold hover:bg-[#F4F8FF] transition"
              >
                <ArrowLeft size={15} /> Back
              </button>

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center gap-3 rounded-[6px] bg-[#0B63FF] px-8 py-3 text-[13px] font-semibold text-white hover:bg-[#004EEB] disabled:opacity-60 disabled:cursor-not-allowed transition"
              >
                {submitting ? "Submitting..." : "Submit & Go Dashboard"} <ArrowRight size={15} />
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <InfoBox title="Submission Details" icon={FileText}>
              {mySubmissions.length === 0 ? (
                <p className="text-[13px] text-[#4B5579]">
                  You don't have any paper submissions yet. Submit a paper first to attach a copyright form.
                </p>
              ) : (
                <>
                  <div className="mb-3">
                    <label className="mb-1 block text-[12px] font-semibold text-[#4B5579]">
                      Select Submission
                    </label>
                    <select
                      value={selectedSubmissionId}
                      onChange={(e) => setSelectedSubmissionId(e.target.value)}
                      className="w-full h-[40px] rounded-[6px] border border-[#D7E2F4] bg-white px-3 text-[13px] outline-none focus:border-[#0B63FF]"
                    >
                      {mySubmissions.map((s) => (
                        <option key={s._id} value={s.submissionId}>
                          {s.submissionId} — {s.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <Detail label="Submission ID" value={selectedSubmission?.submissionId || "—"} />
                  <Detail label="Paper Title" value={selectedSubmission?.title || "—"} />
                  <Detail label="Track" value={selectedSubmission?.track || "—"} />
                  <Detail
                    label="Submitted On"
                    value={
                      selectedSubmission?.createdAt
                        ? new Date(selectedSubmission.createdAt).toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })
                        : "—"
                    }
                  />
                  <Detail label="Copyright Form" value={uploadedFile ? "Uploaded" : "Pending"} />
                </>
              )}
            </InfoBox>

            <InfoBox title="Instructions" icon={Info}>
              {[
                "Download the copyright form using the button.",
                "Fill all the required details and get signatures from all authors.",
                "Scan the completed form in clear quality.",
                "Upload the scanned form in PDF format.",
                "Maximum file size: 5 MB.",
              ].map((t) => (
                <p key={t} className="flex gap-3 text-[14px] leading-6">
                  <CheckCircle className="text-[#0B63FF] shrink-0 mt-1" size={16} /> {t}
                </p>
              ))}
            </InfoBox>

            <InfoBox title="Need Help?" icon={Headphones}>
              <p className="text-[14px] leading-7">
                For any queries, contact us at <br />
                <span className="text-[#0B63FF] font-semibold">submit@innovationconferences.com</span>
              </p>
            </InfoBox>
          </div>
        </form>
      </main>
    </div>
  );
}

function ActionCard({ icon: Icon, color, title, desc, list, footer, children }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white border border-[#DCE8FA] rounded-[10px] p-5 shadow-[0_8px_24px_rgba(0,30,100,0.05)]"
    >
      <div className="flex gap-5">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center shrink-0"
          style={{ backgroundColor: `${color}14`, color }}
        >
          <Icon size={28} />
        </div>

        <div className="flex-1">
          <h3 className="text-[16px] font-semibold">{title}</h3>
          <p className="mt-2 text-[14px] leading-6">{desc}</p>

          {list && (
            <ul className="mt-3 list-disc pl-5 text-[14px] leading-7">
              {list.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          )}

          {children && <div className="mt-4">{children}</div>}
          {footer && <p className="mt-3 text-[14px]">{footer}</p>}
        </div>
      </div>
    </motion.div>
  );
}

function InfoBox({ title, icon: Icon, children }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white border border-[#DCE8FA] rounded-[10px] p-6 shadow-[0_8px_24px_rgba(0,30,100,0.05)]"
    >
      <h3 className="flex items-center gap-3 text-[17px] font-semibold mb-5">
        <span className="w-9 h-9 rounded-full bg-[#EEF4FF] text-[#0B63FF] flex items-center justify-center">
          <Icon size={19} />
        </span>
        {title}
      </h3>
      <div className="space-y-4">{children}</div>
    </motion.div>
  );
}

function Detail({ label, value }) {
  return (
    <div className="grid grid-cols-[130px_1fr] gap-4 text-[14px]">
      <span>{label}</span>
      <span className="text-right font-medium break-words">{value}</span>
    </div>
  );
}
