import { useEffect, useState } from "react";

function GalleryTable({ onAdd, newItem }) {
  const [data, setData] = useState([]);

 useEffect(() => {
  fetch("http://localhost:5000/api/gallery?category=gallery")
    .then((res) => res.json())
    .then(setData);
}, []);


  useEffect(() => {
    if (newItem && newItem.category === "gallery") {
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
        <h3>Gallery Management</h3>
        <button className="add-btn" onClick={onAdd}>
          + Add Gallery Image
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>IMAGE</th>
            <th>TITLE</th>
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
              <td>
                <div className="action-icons">
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

export default GalleryTable;
