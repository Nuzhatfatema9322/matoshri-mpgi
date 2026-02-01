import { useEffect, useState } from "react";

function FacultyModal({ onClose, refresh, editData, instituteType }) {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [qualification, setQualification] = useState("");
  const [experience, setExperience] = useState("");
  const [joinedDate, setJoinedDate] = useState("");
  const [department, setDepartment] = useState("civil");
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (editData) {
      setName(editData.name);
      setDesignation(editData.designation);
      setQualification(editData.qualification || "");
      setExperience(editData.experience || "");
      setJoinedDate(editData.joinedDate || "");
      setDepartment(editData.department);
    }
  }, [editData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("designation", designation);
    formData.append("qualification", qualification);
    formData.append("experience", experience);
    formData.append("joinedDate", joinedDate);
    formData.append("department", department);

    // 🔥🔥 MOST IMPORTANT LINE
    formData.append("instituteType", instituteType);

    if (image) formData.append("image", image);

    const url = editData
      ? `http://localhost:5000/api/faculty/${editData._id}`
      : "http://localhost:5000/api/faculty/add";

    const method = editData ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      body: formData,
    });

    const data = await res.json();

    if (res.ok) {
      refresh(data);
      onClose();
    } else {
      alert("Operation failed");
    }
  };

  return (
    <div className="slider-modal-overlay" onClick={onClose}>
      <form
        className="slider-modal"
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
      >
        <h3>{editData ? "Edit Faculty" : "Add Faculty"}</h3>

        <input
          className="form-field"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          className="form-field"
          placeholder="Designation"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
          required
        />

        <input
          className="form-field"
          placeholder="Qualification"
          value={qualification}
          onChange={(e) => setQualification(e.target.value)}
        />

        <input
          className="form-field"
          placeholder="Experience"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />

        <input
          className="form-field"
          placeholder="Joined Date"
          value={joinedDate}
          onChange={(e) => setJoinedDate(e.target.value)}
        />

        <select
          className="form-field"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option value="civil">Civil</option>
          <option value="mechanical">Mechanical</option>
          <option value="electrical">Electrical</option>
          <option value="computer">Computer</option>
          <option value="it">IT</option>
          <option value="electronics">ENTC</option>
          <option value="management">Management</option>
        </select>

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <div className="slider-modal-actions">
          <button type="submit" className="btn-primary">
            Save
          </button>
          <button type="button" onClick={onClose} className="btn-secondary">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default FacultyModal;
