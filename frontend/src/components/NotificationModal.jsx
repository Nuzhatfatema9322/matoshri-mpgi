import { useState, useEffect, useRef } from "react";
import CustomDropdown from "./CustomDropdown";

function NotificationModal({ onClose, refresh, editData }) {
  const token = localStorage.getItem("token");

  // ✅ REF WITH DEFAULT VALUE (VERY IMPORTANT)
  const instituteRef = useRef({ value: "engineering" });

  // ✅ STATE FOR UI
  const [selectedInstitute, setSelectedInstitute] = useState("engineering");

  const [form, setForm] = useState({
    category: "Notice Board",
    title: "",
    message: "",
    date: "",
    linkText: "",
    linkUrl: "",
  });

  // ✅ EDIT MODE SUPPORT
  useEffect(() => {
    if (editData) {
      setForm({
        category: editData.category,
        title: editData.title,
        message: editData.message,
        date: editData.date,
        linkText: editData.linkText,
        linkUrl: editData.linkUrl,
      });

      // 🔥 SYNC UI + REF
      setSelectedInstitute(editData.instituteType);
      instituteRef.current.value = editData.instituteType;
    }
  }, [editData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async () => {
    const payload = {
      ...form,
      instituteType: instituteRef.current.value, // ✅ ALWAYS DEFINED
    };

    const url = editData
      ? `http://localhost:5000/api/notifications/${editData._id}`
      : "http://localhost:5000/api/notifications";

    const method = editData ? "PUT" : "POST";

    await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    refresh();
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-head">
          <h3>{editData ? "Update" : "Create"} Notification</h3>
          <span onClick={onClose}>✖</span>
        </div>

        <div className="modal-body">
          <label>Institute *</label>

          <CustomDropdown
            options={[
              { label: "School of Engineering", value: "engineering" },
              { label: "School of Management", value: "management" },
              {
                label: "Vishwabharati Polytechnic Institute",
                value: "polytechnic",
              },
            ]}
            value={selectedInstitute}
            onChange={(val) => {
              setSelectedInstitute(val);        // UI
              instituteRef.current.value = val; // BACKEND
            }}
            placeholder="Select Institute"
          />

          <label>Category *</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
          >
            <option>Notice Board</option>
            <option>Important Notice</option>
            <option>News & Events</option>
          </select>

          <label>Title *</label>
          <input name="title" value={form.title} onChange={handleChange} />

          <label>Message *</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
          />

          <label>Date *</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
          />

          <label>Link Text</label>
          <input
            name="linkText"
            value={form.linkText}
            onChange={handleChange}
          />

          <label>Link URL</label>
          <input
            name="linkUrl"
            value={form.linkUrl}
            onChange={handleChange}
          />
        </div>

        <div className="modal-footer">
          <button onClick={onClose}>Cancel</button>
          <button className="create" onClick={submit}>
            {editData ? "Update" : "Create"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotificationModal;
