import { useEffect, useState } from "react";

function SliderTable({ onAdd, onEdit, newItem }) {
  const [data, setData] = useState([]);

  useEffect(() => {
   fetch("http://localhost:5000/api/gallery")
      .then((res) => res.json())
     .then((data) =>
  setData(
    data.filter(
      (item) => item.category !== "gallery"
    )
  )
);

  }, []);

  useEffect(() => {
    if (newItem) {
      setData((prev) => [newItem, ...prev]);
    }
  }, [newItem]);

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/api/gallery/${id}`, {
      method: "DELETE",
    });
    setData((prev) => prev.filter((i) => i._id !== id));
  };

  return (
    <div className="notify-box">
      <div className="notify-head">
        <h3>Slider Management</h3>
        <button className="add-btn" onClick={onAdd}>
          + Add Slider Image
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>IMAGE</th>
            <th>TITLE</th>
             <th>CATEGORY</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>
                <img src={item.image} className="slider-thumb" />
              </td>
              <td>{item.title}</td>
              <td>{item.category}</td>
              <td>
                <div className="action-icons">
                  <span onClick={() => onEdit(item)}>✏️</span>
                  <span onClick={() => handleDelete(item._id)}>🗑️</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SliderTable;
