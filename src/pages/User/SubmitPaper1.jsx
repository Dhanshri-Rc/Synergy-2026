import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { submissionAPI } from "../../services/api";
import {
  Info,
  Check,
  CheckCircle,
  Headphones,
  ChevronDown,
  ArrowRight,
  ArrowLeft,
  FileText,
  Monitor,
  Lightbulb,
  Trash2,
  Plus,
  FileUp,
  Users,
  ClipboardList,
  ShieldCheck,
  Edit3,
  Send,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const steps = [
  { no: 1, title: "Paper Details" },
  { no: 2, title: "Authors" },
  { no: 3, title: "Upload Files" },
  { no: 4, title: "Confirm & Submit" },
];

const inputClass =
  "w-full h-[46px] rounded-[6px] border border-[#D7E2F4] bg-white px-4 text-[13px] outline-none transition placeholder:text-[#9AA5BF] focus:border-[#0B63FF] focus:shadow-[0_0_0_3px_rgba(11,99,255,0.08)]";

export default function SubmitPaper() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [paper, setPaper] = useState({
    title: "",
    track: "",
    subTheme: "",
    abstract: "",
    keywords: "",
    paperType: "",
    presentationMode: "Online / Virtual Presentation",
  });

  const [authors, setAuthors] = useState([
    { fullName: "", email: "", affiliation: "", country: "", corresponding: true },
  ]);

  const [files, setFiles] = useState({ paperFile: null, additionalFiles: [] });
  const [confirmed, setConfirmed] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const pageSubtitle =
    currentStep === 4
      ? "Review your details before final submission."
      : "Fill in the details below to submit your paper for review.";

  const summary = useMemo(
    () => ({
      track: paper.track || "Not selected",
      subTheme: paper.subTheme || "Not selected",
      authors: authors.length,
      fileUploaded: files.paperFile?.name || "Not uploaded",
      presentationMode: paper.presentationMode || "Not selected",
    }),
    [paper, authors, files]
  );

  const goNext = () => setCurrentStep((step) => Math.min(step + 1, 4));
  const goBack = () => setCurrentStep((step) => Math.max(step - 1, 1));
  const goToStep = (step) => setCurrentStep(step);

  const updatePaper = (field, value) => {
    setPaper((prev) => ({ ...prev, [field]: value }));
  };

  const updateAuthor = (index, field, value) => {
    setAuthors((prev) =>
      prev.map((author, i) => (i === index ? { ...author, [field]: value } : author))
    );
  };

  const addAuthor = () => {
    setAuthors((prev) => [
      ...prev,
      { fullName: "", email: "", affiliation: "", country: "", corresponding: false },
    ]);
  };

  const removeAuthor = (index) => {
    setAuthors((prev) => prev.filter((_, i) => i !== index));
  };

const handleSubmit = async () => {
  if (!confirmed) {
    alert("Please confirm the submission before submitting.");
    return;
  }

  if (!files.paperFile) {
    alert("Please upload your paper file (PDF/DOC/DOCX) before submitting.");
    return;
  }

  setSubmitting(true);

  try {
    const correspondingAuthorObj = authors.find((a) => a.corresponding) || authors[0];

    const fd = new FormData();
    fd.append("title", paper.title);
    fd.append("abstract", paper.abstract);
    fd.append("keywords", paper.keywords);
    fd.append("track", paper.track);
    fd.append("subTheme", paper.subTheme);
    fd.append("paperType", paper.paperType);
    fd.append("presentationMode", paper.presentationMode);
    fd.append("authors", JSON.stringify(authors));
    fd.append("correspondingAuthor", correspondingAuthorObj?.fullName || "");
    fd.append("correspondingEmail", correspondingAuthorObj?.email || "");
    fd.append("country", correspondingAuthorObj?.country || "");
    fd.append("affiliation", correspondingAuthorObj?.affiliation || "");
    fd.append("paperFile", files.paperFile);

    const { data } = await submissionAPI.create(fd);

    alert(`Paper submitted successfully! Your Submission ID is ${data.submission.submissionId}.`);

    navigate("/dashboard");
  } catch (error) {
    alert(error.message || "Submission failed. Please try again.");
  } finally {
    setSubmitting(false);
  }
};

  return (
    <main className="min-h-screen bg-[#F8FAFF] text-[#07113F] px-4 sm:px-6 lg:px-10 overflow-hidden">
      <motion.div initial="hidden" animate="show" variants={fadeUp}>
        <h1 className="text-[20px] font-semibold">Submit Paper</h1>
        <p className="mt-2 text-[14px] font-medium">{pageSubtitle}</p>
      </motion.div>

      <StepProgress currentStep={currentStep} onStepClick={goToStep} />

      <div className="grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-6">
        <motion.section
          key={currentStep}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="bg-white rounded-[10px] border border-[#DCE8FA] p-5 sm:p-6 shadow-[0_8px_24px_rgba(0,30,100,0.05)]"
        >
          {currentStep === 1 && (
            <PaperDetailsStep paper={paper} updatePaper={updatePaper} onNext={goNext} />
          )}

          {currentStep === 2 && (
            <AuthorsStep
              authors={authors}
              updateAuthor={updateAuthor}
              addAuthor={addAuthor}
              removeAuthor={removeAuthor}
              onBack={goBack}
              onNext={goNext}
            />
          )}

          {currentStep === 3 && (
            <UploadFilesStep files={files} setFiles={setFiles} onBack={goBack} onNext={goNext} />
          )}

          {currentStep === 4 && (
            <ConfirmStep
              paper={paper}
              authors={authors}
              files={files}
              confirmed={confirmed}
              setConfirmed={setConfirmed}
              onBack={goBack}
              onSubmit={handleSubmit}
              submitting={submitting}
              goToStep={goToStep}
            />
          )}
        </motion.section>

        <RightSidebar currentStep={currentStep} summary={summary} />
      </div>
    </main>
  );
}

function StepProgress({ currentStep, onStepClick }) {
  return (
    <div className="mt-9 mb-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 max-w-[900px]">
      {steps.map((step, index) => {
        const done = step.no < currentStep;
        const active = step.no === currentStep;

        return (
          <motion.button
            type="button"
            key={step.no}
            onClick={() => onStepClick(step.no)}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center text-left"
          >
            <span
              className={`w-10 h-10 rounded-full flex items-center justify-center text-[13px] font-semibold shrink-0 transition-all duration-300 ${
                done
                  ? "border border-[#18A957] text-[#18A957] bg-white"
                  : active
                  ? "bg-[#0B63FF] text-white shadow-[0_8px_20px_rgba(11,99,255,0.25)]"
                  : "bg-white border border-[#B9C1D6] text-[#07113F] hover:bg-[#0B63FF] hover:border-[#0B63FF] hover:text-white"
              }`}
            >
              {done ? <Check size={18} /> : step.no}
            </span>

            <span
              className={`ml-4 text-[14px] font-semibold whitespace-nowrap ${
                active ? "text-[#0B63FF]" : "text-[#4B5579]"
              }`}
            >
              {step.title}
            </span>

            {index !== steps.length - 1 && (
              <span
                className={`hidden xl:block flex-1 h-[1px] ml-6 ${
                  done ? "bg-[#18A957]" : active ? "bg-[#0B63FF]" : "bg-[#C8CFDD]"
                }`}
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
}

function PaperDetailsStep({ paper, updatePaper, onNext }) {
  return (
    <>
      <h2 className="text-[18px] font-semibold mb-6">Paper Details</h2>

      <div className="space-y-6">
        <Field label="Paper Title" required>
          <input
            className={inputClass}
            value={paper.title}
            onChange={(e) => updatePaper("title", e.target.value)}
            placeholder="Enter the full title of your paper"
          />
        </Field>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Field label="Track / Theme" required>
            <SelectBox value={paper.track} onChange={(e) => updatePaper("track", e.target.value)}>
              <option value="">Select Track / Theme</option>
              <option>Artificial Intelligence & Machine Learning</option>
              <option>Cloud Computing</option>
              <option>Data Science</option>
              <option>Cyber Security</option>
              <option>IoT & Edge Computing</option>
            </SelectBox>
          </Field>

          <Field label="Sub Theme (Optional)">
            <SelectBox value={paper.subTheme} onChange={(e) => updatePaper("subTheme", e.target.value)}>
              <option value="">Select Sub Theme</option>
              <option>Deep Learning</option>
              <option>Reinforcement Learning</option>
              <option>Computer Vision</option>
              <option>Natural Language Processing</option>
              <option>Optimization</option>
            </SelectBox>
          </Field>
        </div>

        <Field label="Abstract" required>
          <div className="relative">
            <textarea
              className={`${inputClass} h-auto min-h-[125px] resize-none pt-4`}
              value={paper.abstract}
              onChange={(e) => updatePaper("abstract", e.target.value)}
              placeholder="Write a brief abstract of your paper (max 300 words)"
            />
            <span className="absolute bottom-3 right-4 text-[13px] text-[#4B5579]">
              {paper.abstract.trim() ? paper.abstract.trim().split(/\s+/).length : 0} / 300
            </span>
          </div>
        </Field>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Field label="Keywords" required>
            <input
              className={inputClass}
              value={paper.keywords}
              onChange={(e) => updatePaper("keywords", e.target.value)}
              placeholder="Enter keywords (comma separated)"
            />
            <p className="mt-3 text-[12px] text-[#4B5579]">
              Example: AI, Machine Learning, Decision Support
            </p>
          </Field>

          <Field label="Paper Type" required>
            <SelectBox value={paper.paperType} onChange={(e) => updatePaper("paperType", e.target.value)}>
              <option value="">Select Paper Type</option>
              <option>Research Paper</option>
              <option>Review Paper</option>
              <option>Case Study</option>
              <option>Short Communication</option>
            </SelectBox>
          </Field>
        </div>

        <Field label="Preferred Presentation Mode" required>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <ModeCard
              active={paper.presentationMode === "Online / Virtual Presentation"}
              icon={FileText}
              text="Online / Virtual Presentation"
              onClick={() => updatePaper("presentationMode", "Online / Virtual Presentation")}
            />
            <ModeCard
              active={paper.presentationMode === "Offline Presentation"}
              icon={Monitor}
              text="Offline Presentation"
              onClick={() => updatePaper("presentationMode", "Offline Presentation")}
            />
          </div>
        </Field>
      </div>

      <div className="mt-9 flex flex-col sm:flex-row justify-between gap-4">
        <button className="h-[46px] px-8 rounded-[6px] border border-[#C9D4EA] text-[14px] font-semibold hover:bg-[#F4F8FF] transition">
          Cancel
        </button>
        <PrimaryButton onClick={onNext}>Save & Next <ArrowRight size={17} /></PrimaryButton>
      </div>
    </>
  );
}

function AuthorsStep({ authors, updateAuthor, addAuthor, removeAuthor, onBack, onNext }) {
  return (
    <>
      <h2 className="text-[18px] font-semibold">Authors</h2>
      <p className="mt-2 text-[13px] text-[#4B5579]">
        Enter details of all authors. The first author will be considered as the corresponding author.
      </p>

      {authors.map((author, index) => (
        <div key={index} className="mt-8">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-[14px] font-semibold">
              Author {index + 1} {index === 0 && "(Corresponding Author)"}
            </h3>

            {index !== 0 && (
              <button
                type="button"
                onClick={() => removeAuthor(index)}
                className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#FF2D2D] hover:scale-105 transition"
              >
                <Trash2 size={13} /> Remove
              </button>
            )}
          </div>

          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
            <Field label="Full Name" required>
              <input
                className={inputClass}
                value={author.fullName}
                onChange={(e) => updateAuthor(index, "fullName", e.target.value)}
                placeholder="Enter full name"
              />
            </Field>

            <Field label="Email Address" required>
              <input
                type="email"
                className={inputClass}
                value={author.email}
                onChange={(e) => updateAuthor(index, "email", e.target.value)}
                placeholder="Enter email address"
              />
            </Field>

            <Field label="Affiliation / Organization" required>
              <input
                className={inputClass}
                value={author.affiliation}
                onChange={(e) => updateAuthor(index, "affiliation", e.target.value)}
                placeholder="Enter affiliation / organization"
              />
            </Field>

            <Field label="Country" required>
              <SelectBox value={author.country} onChange={(e) => updateAuthor(index, "country", e.target.value)}>
                <option value="">Select country</option>
                <option>India</option>
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Canada</option>
                <option>Australia</option>
              </SelectBox>
            </Field>
          </div>

          {index === 0 && (
            <label className="mt-5 flex items-center gap-3 text-[14px] font-medium">
              <span className="w-5 h-5 rounded-[4px] bg-[#0B63FF] text-white flex items-center justify-center">
                <Check size={14} />
              </span>
              This is the corresponding author
            </label>
          )}

          {index !== authors.length - 1 && <div className="my-8 border-t border-[#DCE8FA]" />}
        </div>
      ))}

      <button
        type="button"
        onClick={addAuthor}
        className="mt-6 h-[40px] px-6 rounded-[6px] border border-dashed border-[#0B63FF] text-[#0B63FF] text-[13px] font-semibold inline-flex items-center gap-3 hover:bg-[#EEF4FF] hover:scale-[1.01] transition"
      >
        <Plus size={18} /> Add Another Author
      </button>

      <StepButtons onBack={onBack} onNext={onNext} />
    </>
  );
}

function UploadFilesStep({ files, setFiles, onBack, onNext }) {
  return (
    <>
      <h2 className="text-[18px] font-semibold">Upload Files</h2>
      <p className="mt-2 text-[14px] text-[#4B5579]">
        Please upload your paper and any additional files.
      </p>

      <div className="mt-8">
        <label className="block mb-3 text-[16px] font-semibold">
          Paper File <span className="text-[#FF3B30]">*</span>
        </label>

        <motion.label
          whileHover={{ y: -4, borderColor: "#0B63FF" }}
          className="min-h-[260px] rounded-[8px] border border-dashed border-[#0B63FF] bg-white flex flex-col items-center justify-center text-center px-4 cursor-pointer transition-all duration-300"
        >
          <FileUp size={48} className="text-[#0B63FF]" />
          <p className="mt-5 text-[15px] font-medium">Drag & drop your file here</p>
          <p className="mt-4 text-[14px]">or</p>
          <span className="mt-4 h-[42px] px-8 rounded-[6px] border border-[#0B63FF] text-[#0B63FF] text-[14px] font-semibold inline-flex items-center justify-center hover:bg-[#0B63FF] hover:text-white hover:scale-105 transition">
            Browse File
          </span>
          <p className="mt-6 text-[13px] text-[#4B5579]">
            Accepted formats: PDF, DOC, DOCX <span className="mx-4">|</span> Max file size: 10 MB
          </p>
          {files.paperFile && (
            <p className="mt-3 text-[13px] font-semibold text-[#18A957]">
              Selected: {files.paperFile.name}
            </p>
          )}
          <input
            type="file"
            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            className="hidden"
            onChange={(e) => setFiles((prev) => ({ ...prev, paperFile: e.target.files?.[0] || null }))}
          />
        </motion.label>
      </div>

      <motion.div whileHover={{ y: -4 }} className="mt-8 rounded-[8px] border border-[#DCE8FA] p-5">
        <h3 className="text-[16px] font-semibold">Additional Files (Optional)</h3>
        <p className="mt-2 text-[14px] text-[#4B5579]">
          You may upload supplementary material, dataset, figures, etc.
        </p>

        <label className="mt-5 h-[42px] px-6 rounded-[6px] border border-[#0B63FF] text-[#0B63FF] text-[14px] font-semibold inline-flex items-center gap-3 hover:bg-[#0B63FF] hover:text-white hover:scale-[1.02] transition cursor-pointer">
          <Plus size={18} /> Add File
          <input
            type="file"
            multiple
            className="hidden"
            onChange={(e) =>
              setFiles((prev) => ({ ...prev, additionalFiles: Array.from(e.target.files || []) }))
            }
          />
        </label>

        {files.additionalFiles.length > 0 && (
          <div className="mt-4 space-y-2 text-[13px] text-[#4B5579]">
            {files.additionalFiles.map((file) => (
              <p key={file.name}>• {file.name}</p>
            ))}
          </div>
        )}
      </motion.div>

      <StepButtons onBack={onBack} onNext={onNext} />
    </>
  );
}

function ConfirmStep({ paper, authors, files, confirmed, setConfirmed, onBack, onSubmit, submitting, goToStep }) {
  return (
    <>
      <h2 className="text-[18px] font-semibold">Review & Confirm</h2>
      <p className="mt-2 text-[14px] text-[#4B5579]">
        Please review all the information below. You can go back to make changes if needed.
      </p>

      <div className="mt-4 border-t border-[#DCE8FA]">
        <ReviewItem
          icon={FileText}
          color="#0B63FF"
          title="Paper Details"
          onEdit={() => goToStep(1)}
          lines={[
            `Title: ${paper.title || "Not entered"}`,
            `Track: ${paper.track || "Not selected"}`,
            `Sub Theme: ${paper.subTheme || "Not selected"}`,
            `Paper Type: ${paper.paperType || "Not selected"}`,
          ]}
        />

        <ReviewItem
          icon={Users}
          color="#10B981"
          title={`Authors (${authors.length})`}
          onEdit={() => goToStep(2)}
          lines={authors.map(
            (author, index) =>
              `Author ${index + 1}: ${author.fullName || "Not entered"}${
                index === 0 ? " (Corresponding Author)" : ""
              }`
          )}
        />

        <ReviewItem
          icon={FileUp}
          color="#FF9900"
          title="Files"
          onEdit={() => goToStep(3)}
          lines={[
            `Paper File: ${files.paperFile?.name || "Not uploaded"}`,
            `Additional Files: ${files.additionalFiles.length || "None"}`,
          ]}
        />

        <ReviewItem
          icon={Monitor}
          color="#8B5CF6"
          title="Presentation Mode"
          onEdit={() => goToStep(1)}
          lines={[paper.presentationMode || "Not selected"]}
          last
        />
      </div>

      <motion.label
        whileHover={{ y: -3 }}
        className="mt-4 flex items-start gap-4 rounded-[8px] border border-[#CFEEDD] bg-[#F7FFFB] px-5 py-4 text-[14px] leading-7 cursor-pointer"
      >
        <input
          type="checkbox"
          checked={confirmed}
          onChange={(e) => setConfirmed(e.target.checked)}
          className="mt-2 accent-[#0B63FF]"
        />
        <span>
          I confirm that all the information provided is accurate and my paper complies with the{" "}
          <span className="text-[#0B63FF] font-semibold">conference guidelines.</span>
        </span>
      </motion.label>

      <div className="mt-6 flex flex-col sm:flex-row justify-between gap-4">
        <button
          type="button"
          onClick={onBack}
          className="h-[46px] px-8 rounded-[6px] border border-[#C9D4EA] text-[14px] font-semibold inline-flex items-center justify-center gap-3 hover:bg-[#F4F8FF] transition"
        >
          <ArrowLeft size={17} /> Back
        </button>

        <PrimaryButton onClick={onSubmit} disabled={submitting}>
          {submitting ? "Submitting..." : "Confirm & Submit"} <Send size={17} />
        </PrimaryButton>
      </div>
    </>
  );
}

function RightSidebar({ currentStep, summary }) {
  if (currentStep === 1) {
    return (
      <aside className="space-y-5">
        <InfoCard title="Guidelines" icon={Info}>
          {[
            "All papers must be original and unpublished.",
            "Follow the author guidelines and template provided on the website.",
            "Maximum paper length: 6 pages.",
            "Accepted papers will be published in Scopus indexed proceedings.",
            "Ensure all authors approve the final submission.",
          ].map((item) => <CheckLine key={item}>{item}</CheckLine>)}
        </InfoCard>
        <HelpCard />
      </aside>
    );
  }

  if (currentStep === 2) {
    return (
      <aside className="space-y-5">
        <InfoCard title="Instructions" icon={Info}>
          <ul className="list-disc pl-5 space-y-4 text-[14px] leading-7">
            <li>Add all authors in the order they should appear on the paper.</li>
            <li>The first author will be the corresponding author by default.</li>
            <li>Please ensure all email addresses are valid.</li>
            <li>You can add as many authors as required.</li>
          </ul>
        </InfoCard>
        <InfoCard title="Tips" icon={Lightbulb}>
          <p className="text-[14px] leading-7">Make sure all authors approve the final submission before proceeding.</p>
        </InfoCard>
        <HelpCard />
      </aside>
    );
  }

  if (currentStep === 3) {
    return (
      <aside className="space-y-5">
        <InfoCard title="File Guidelines" icon={Info}>
          {[
            "Upload your paper in PDF format only.",
            "Maximum file size is 10 MB.",
            "Ensure the file is not password protected.",
            "Paper should be anonymized.",
            "Use standard templates provided on the conference website.",
          ].map((item) => <CheckLine key={item}>{item}</CheckLine>)}
        </InfoCard>
        <InfoCard title="Tips" icon={Lightbulb}>
          <p className="text-[14px] leading-7">Ensure your paper follows the formatting guidelines to avoid desk rejection.</p>
        </InfoCard>
        <HelpCard />
      </aside>
    );
  }

  return (
    <aside className="space-y-5">
      <InfoCard title="Submission Summary" icon={ClipboardList}>
        <SummaryRow label="Track" value={summary.track} />
        <SummaryRow label="Sub Theme" value={summary.subTheme} />
        <SummaryRow label="Authors" value={summary.authors} />
        <SummaryRow label="File Uploaded" value={summary.fileUploaded} />
        <SummaryRow label="Presentation Mode" value={summary.presentationMode} />
      </InfoCard>

      <InfoCard title="Important" icon={ShieldCheck} orange>
        {[
          "Once submitted, you will not be able to make changes.",
          "You will receive a confirmation email after successful submission.",
          "Keep your Submission ID for future reference.",
        ].map((item) => <CheckLine key={item} orange>{item}</CheckLine>)}
      </InfoCard>

      <HelpCard />
    </aside>
  );
}

function Field({ label, required, children }) {
  return (
    <div>
      <label className="block mb-3 text-[14px] font-semibold">
        {label} {required && <span className="text-[#FF3B30]">*</span>}
      </label>
      {children}
    </div>
  );
}

function SelectBox({ value, onChange, children }) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={onChange}
        className={`${inputClass} appearance-none text-[#64708E] pr-10`}
      >
        {children}
      </select>
      <ChevronDown size={18} className="text-[#0B63FF] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
    </div>
  );
}

function ModeCard({ active, icon: Icon, text, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`h-[58px] rounded-[6px] border px-4 flex items-center gap-4 text-[14px] font-semibold transition hover:border-[#0B63FF] text-left ${
        active ? "border-[#0B63FF]" : "border-[#D7E2F4]"
      }`}
    >
      <span className={`w-5 h-5 rounded-full border flex items-center justify-center ${active ? "border-[#0B63FF]" : "border-[#AEB8CF]"}`}>
        {active && <span className="w-3 h-3 rounded-full bg-[#0B63FF]" />}
      </span>
      <span className="w-8 h-8 rounded-full bg-[#F1F4FA] flex items-center justify-center shrink-0">
        <Icon size={17} className="text-[#4B5579]" />
      </span>
      {text}
    </button>
  );
}

function StepButtons({ onBack, onNext }) {
  return (
    <div className="mt-8 flex flex-col sm:flex-row justify-between gap-4">
      <button
        type="button"
        onClick={onBack}
        className="h-[46px] px-8 rounded-[6px] border border-[#C9D4EA] text-[14px] font-semibold inline-flex items-center justify-center gap-3 hover:bg-[#F4F8FF] transition"
      >
        <ArrowLeft size={17} /> Back
      </button>
      <PrimaryButton onClick={onNext}>Save & Next <ArrowRight size={17} /></PrimaryButton>
    </div>
  );
}

function PrimaryButton({ children, onClick, disabled }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="h-[46px] px-8 rounded-[6px] bg-[#0B63FF] text-white text-[14px] font-semibold inline-flex items-center justify-center gap-3 hover:bg-[#004FEA] hover:scale-[1.02] transition disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
    >
      {children}
    </button>
  );
}

function ReviewItem({ icon: Icon, color, title, lines, last, onEdit }) {
  return (
    <motion.div
      whileHover={{ x: 4 }}
      className={`flex flex-col sm:flex-row gap-5 py-6 ${!last ? "border-b border-[#DCE8FA]" : ""}`}
    >
      <span className="w-14 h-14 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: `${color}14`, color }}>
        <Icon size={27} />
      </span>

      <div className="flex-1">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-[16px] font-semibold">{title}</h3>
          <button
            type="button"
            onClick={onEdit}
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#0B63FF] hover:scale-105 transition"
          >
            Edit <Edit3 size={15} />
          </button>
        </div>

        <div className="mt-3 space-y-2 text-[14px] leading-6 text-[#07113F]">
          {lines.map((line) => <p key={line}>{line}</p>)}
        </div>
      </div>
    </motion.div>
  );
}

function InfoCard({ title, icon: Icon, children, orange }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-[10px] border border-[#DCE8FA] p-6 shadow-[0_8px_24px_rgba(0,30,100,0.05)]"
    >
      <h3 className="flex items-center gap-4 text-[17px] font-semibold mb-6">
        <span className={`w-11 h-11 rounded-full flex items-center justify-center ${orange ? "bg-[#FFF3E4] text-[#FF9900]" : "bg-[#EEF4FF] text-[#0B63FF]"}`}>
          <Icon size={20} />
        </span>
        {title}
      </h3>
      <div className="space-y-4">{children}</div>
    </motion.div>
  );
}

function CheckLine({ children, orange }) {
  return (
    <p className="flex gap-3 text-[14px] leading-7">
      <CheckCircle size={17} className={`${orange ? "text-[#FF9900]" : "text-[#0B63FF]"} shrink-0 mt-[5px]`} />
      {children}
    </p>
  );
}

function HelpCard() {
  return (
    <InfoCard title="Need Help?" icon={Headphones}>
      <p className="text-[14px] leading-7">
        For any queries, contact us at
        <br />
        <span className="text-[#0B63FF] font-semibold">submit@innovationconferences.com</span>
      </p>
    </InfoCard>
  );
}

function SummaryRow({ label, value }) {
  return (
    <div className="grid grid-cols-[120px_1fr] gap-4 text-[14px] leading-6">
      <span className="font-semibold">{label}</span>
      <span className="text-right break-words">{value}</span>
    </div>
  );
}
