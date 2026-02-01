import { useEffect, useState } from "react";

function FacultyTable({ onAdd, onEdit, newItem }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/faculty")
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  // naya faculty add hone par turant table update
  useEffect(() => {
    if (newItem) {
      setData((prev) => [newItem, ...prev]);
    }
  }, [newItem]);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this faculty?")) return;

    await fetch(`http://localhost:5000/api/faculty/${id}`, {
      method: "DELETE",
    });

    setData((prev) => prev.filter((f) => f._id !== id));
  };

  return (
    <div className="notify-box">
      <div className="notify-head">
        <h3>Faculty Management</h3>
        <button className="add-btn" onClick={onAdd}>
          + Add Faculty
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>IMAGE</th>
            <th>NAME</th>
            <th>DEPARTMENT</th>
            <th>DESIGNATION</th>
            <th>ACTIONS</th>
          </tr>
        </thead>

        <tbody>
          {Array.isArray(data) &&
            data.map((item) => (
              <tr key={item._id}>
                <td>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="slider-thumb"
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.department}</td>
                <td>{item.designation}</td>
                <td>
                  <span  style={{ cursor: "pointer", marginRight: "10px" }}
                  onClick={() => onEdit(item)}>✏️</span>
                  <span   style={{ cursor: "pointer" }}
                  onClick={() => handleDelete(item._id)}>🗑️</span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default FacultyTable;
