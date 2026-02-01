import { useEffect, useState } from "react";

function SliderModal({ onClose, refresh, editData }) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);

  // 🔥 NEW: category state
 
const [institute, setInstitute] = useState("management");

  const token = localStorage.getItem("token");

  // edit mode
 useEffect(() => {
  if (editData) {
    setTitle(editData.title || "");
    setInstitute(editData.institute || "management");
  }
}, [editData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

   const formData = new FormData();
formData.append("title", title);
formData.append("category", "slider");   // ✅ FIXED
formData.append("institute", institute); // ✅ REQUIRED

if (image) {
  formData.append("image", image);
}


    const url = editData
      ? `http://localhost:5000/api/gallery/${editData._id}`
      : "http://localhost:5000/api/gallery/upload";

    const method = editData ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const json = await res.json();

    if (res.ok) {
      refresh(json);   // 🔥 pura object bhejo
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
        <h3>{editData ? "Edit Slider Image" : "Add Slider Image"}</h3>

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

      <select
  className="institute-filter"
  value={institute}
  onChange={(e) => setInstitute(e.target.value)}
  required
>
  <option value="matoshri">Matoshri Slider</option>
  <option value="polytechnic">Polytechnic Slider</option>
  <option value="engineering">Engineering Slider</option>
  <option value="management">Management Slider</option>
</select>
        <label className="file-box">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <span>
            {image
              ? image.name
              : editData
              ? "Choose new image (optional)"
              : "Choose slider image"}
          </span>
        </label>

        <div className="slider-modal-actions">
          <button className="btn-primary" type="submit">
            {editData ? "Update" : "Upload"}
          </button>

          <button
            className="btn-secondary"
            type="button"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default SliderModal;
