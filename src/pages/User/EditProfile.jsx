import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  User,
  Mail,
  Phone,
  Building2,
  Globe,
  Save,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { userAPI } from "../../services/api";

export default function EditProfileModal({ open, onClose }) {
  const { user, updateUser } = useAuth();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    institution: "",
    country: "",
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const [showPasswordSection, setShowPasswordSection] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [changingPassword, setChangingPassword] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState(null);

  const handleChangePassword = async () => {
    setPasswordMessage(null);

    if (!currentPassword || !newPassword) {
      setPasswordMessage({ type: "error", text: "Please fill both password fields." });
      return;
    }
    if (newPassword.length < 8) {
      setPasswordMessage({ type: "error", text: "New password must be at least 8 characters." });
      return;
    }

    setChangingPassword(true);
    try {
      await userAPI.changePassword({ currentPassword, newPassword });
      setPasswordMessage({ type: "success", text: "Password changed successfully." });
      setCurrentPassword("");
      setNewPassword("");
    } catch (err) {
      setPasswordMessage({ type: "error", text: err.message || "Failed to change password." });
    } finally {
      setChangingPassword(false);
    }
  };

  // Prefill the form with the logged-in user's real data whenever the modal opens
  useEffect(() => {
    if (open && user) {
      setForm({
        fullName: user.fullName || "",
        email: user.email || "",
        phone: user.mobile || "",
        institution: user.organization || "",
        country: user.country || "",
      });
      setError("");
    }
  }, [open, user]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSaving(true);

    try {
      const { data } = await userAPI.updateProfile({
        fullName: form.fullName,
        mobile: form.phone,
        organization: form.institution,
        country: form.country,
      });

      // Dashboard header/cards update immediately since this comes from context
      updateUser(data.user);
      onClose();
    } catch (err) {
      setError(err.message || "Failed to update profile.");
    } finally {
      setSaving(false);
    }
  };

 
    return (
  <AnimatePresence>
    {open && (
      <motion.div
        className="fixed inset-0 z-[999] flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Overlay */}
        <div
          onClick={onClose}
          className="absolute inset-0 bg-black/50"
        />

        {/* Dialog Box */}
        <motion.div
          role="dialog"
          aria-modal="true"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ duration: 0.25 }}
          className="relative z-[1000] w-full max-w-3xl bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between border-b px-5 sm:px-7 py-5">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold">
                Edit Profile
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Update your participant details
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center"
            >
              <X size={20} />
            </button>
          </div>

          <form
            onSubmit={handleSubmit}
            className="p-5 sm:p-7 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <Input
              icon={User}
              label="Full Name"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
            />

            <div>
              <label className="font-semibold mb-2 block">Email</label>
              <div className="relative">
                <Mail size={18} className="absolute left-3 top-4 text-gray-400" />
                <input
                  name="email"
                  value={form.email}
                  disabled
                  className="w-full h-12 border rounded-lg pl-10 bg-gray-50 text-gray-500 cursor-not-allowed"
                />
              </div>
            </div>

            <Input
              icon={Phone}
              label="Phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
            />

            <Input
              icon={Building2}
              label="Institution"
              name="institution"
              value={form.institution}
              onChange={handleChange}
            />

            <Input
              icon={Globe}
              label="Country"
              name="country"
              value={form.country}
              onChange={handleChange}
            />

            <div className="md:col-span-2 border-t pt-5">
              <button
                type="button"
                onClick={() => setShowPasswordSection((v) => !v)}
                className="text-sm font-semibold text-[#0B63FF] hover:underline"
              >
                {showPasswordSection ? "Cancel password change" : "Change Password"}
              </button>

              {showPasswordSection && (
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-semibold mb-2 block">Current Password</label>
                    <input
                      type="password"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      className="w-full h-12 border rounded-lg px-4 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="font-semibold mb-2 block">New Password</label>
                    <input
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="w-full h-12 border rounded-lg px-4 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="md:col-span-2">
                    {passwordMessage && (
                      <p
                        className={`text-sm font-semibold mb-2 ${
                          passwordMessage.type === "error" ? "text-red-600" : "text-green-600"
                        }`}
                      >
                        {passwordMessage.text}
                      </p>
                    )}
                    <button
                      type="button"
                      disabled={changingPassword}
                      onClick={handleChangePassword}
                      className="px-5 py-2.5 rounded-lg border border-[#0B63FF] text-[#0B63FF] font-semibold hover:bg-[#0B63FF] hover:text-white transition disabled:opacity-70"
                    >
                      {changingPassword ? "Updating..." : "Update Password"}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {error && (
              <p className="md:col-span-2 rounded-lg bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
                {error}
              </p>
            )}

            <div className="md:col-span-2 flex flex-col sm:flex-row justify-end gap-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 border rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={saving}
                className="bg-[#0B63FF] text-white px-7 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-[#0053e6] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <Save size={18} />
                {saving ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>

  );
}

function Input({
  icon: Icon,
  label,
  name,
  value,
  onChange,
}) {
  return (
    <div>
      <label className="font-semibold mb-2 block">
        {label}
      </label>

      <div className="relative">
        <Icon
          size={18}
          className="absolute left-3 top-4 text-gray-400"
        />

        <input
          name={name}
          value={value}
          onChange={onChange}
          className="w-full h-12 border rounded-lg pl-10"
        />
      </div>
    </div>
  );
}