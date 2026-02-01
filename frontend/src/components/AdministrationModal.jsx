import { useEffect, useState } from "react";

function AdministrationModal({ editData, onClose, refresh }) {
  const token = localStorage.getItem("token");

  const [form, setForm] = useState({
    name: "",
    designation: "",
    qualification: "",
    dateOfJoining: "",
    experience: "",
    contactNo: "",
    section: "",
    photo: null, // 🔥 important
  });

  // ✅ EDIT MODE SAFE LOAD
  useEffect(() => {
    if (editData) {
      setForm({
        name: editData.name || "",
        designation: editData.designation || "",
        qualification: editData.qualification || "",
        dateOfJoining: editData.dateOfJoining || "",
        experience: editData.experience || "",
        contactNo: editData.contactNo || "",
        section: editData.section || "",
        photo: null, // ❌ string nahi bhejna
      });
    }
  }, [editData]);

  // TEXT INPUT
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // FILE INPUT
  const handleFileChange = (e) => {
    setForm({ ...form, photo: e.target.files[0] });
  };

  // SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    const fd = new FormData();

    fd.append("name", form.name);
    fd.append("designation", form.designation);
    fd.append("qualification", form.qualification);
    fd.append("dateOfJoining", form.dateOfJoining);
    fd.append("experience", form.experience);
    fd.append("contactNo", form.contactNo);
    fd.append("section", form.section);

    // ✅ PHOTO ONLY IF FILE EXISTS
    if (form.photo instanceof File) {
      fd.append("photo", form.photo);
    }

    const url = editData
      ? `http://localhost:5000/api/administration/${editData._id}`
      : "http://localhost:5000/api/administration";

    const method = editData ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: fd,
    });

    if (!res.ok) {
      alert("❌ Failed to save staff");
      return;
    }

    const data = await res.json();
    refresh(data);
    onClose();
  };

  return (
    <div className="admin-modal-overlay">
      <div className="admin-modal">
        <h2>{editData ? "Edit Staff" : "Add Staff"}</h2>

        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Name" onChange={handleChange} value={form.name} required />
          <input name="designation" placeholder="Designation" onChange={handleChange} value={form.designation} />
          <input name="qualification" placeholder="Qualification" onChange={handleChange} value={form.qualification} />
          <input name="section" placeholder="Section" onChange={handleChange} value={form.section} />
          <input name="dateOfJoining" placeholder="Date of Joining" onChange={handleChange} value={form.dateOfJoining} />
          <input name="experience" placeholder="Experience" onChange={handleChange} value={form.experience} />
          <input name="contactNo" placeholder="Contact No" onChange={handleChange} value={form.contactNo} />

          {/* ✅ FILE INPUT */}
          <input type="file" accept="image/*" onChange={handleFileChange} />

          <div className="admin-modal-actions">
            <button type="submit" className="save">Save</button>
            <button type="button" className="cancel" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdministrationModal;
