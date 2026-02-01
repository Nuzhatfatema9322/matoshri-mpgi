import { useState } from "react";

function GalleryModal({ onClose, refresh, selectedInstitute }) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const token = localStorage.getItem("token");
const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();
 formData.append("title", title);
formData.append("image", image);
formData.append("category", "gallery");
formData.append("institute", selectedInstitute);
formData.append("section", "hostel"); // optional


  await fetch("http://localhost:5000/api/gallery/upload", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  onClose();
};

  return (
    <div className="slider-modal-overlay" onClick={onClose}>
      <form
        className="slider-modal"
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
      >
        <h3>Add Gallery Image</h3>

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label className="file-box">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
          <span>{image ? image.name : "Choose gallery image"}</span>
        </label>

        <div className="slider-modal-actions">
          <button className="btn-primary" type="submit">
            Upload
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

export default GalleryModal;
