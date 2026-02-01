import { useEffect, useState } from "react";

function AdministrationTable({ onAdd, onEdit, newItem }) {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");

  // 🔹 FETCH STAFF
  const fetchData = async () => {
    const res = await fetch("http://localhost:5000/api/administration", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const json = await res.json();
    setData(Array.isArray(json) ? json : []);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (newItem) {
      setData((prev) => [newItem, ...prev]);
    }
  }, [newItem]);

  // 🔹 DELETE STAFF
  const deleteStaff = async (id) => {
    await fetch(`http://localhost:5000/api/administration/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setData((prev) => prev.filter((i) => i._id !== id));
  };

  return (
    <div className="table-container">
      {/* HEADER */}
      <div className="table-header">
        <h2>Administration Staff</h2>
        <button className="add-btn" onClick={onAdd}>
          + Add Staff
        </button>
      </div>

      {/* TABLE */}
      <table>
        <thead>
          <tr>
            <th>Photo</th> {/* ✅ PHOTO COLUMN */}
            <th>Name</th>
            <th>Designation</th>
            <th>Qualification</th>
            <th>Section</th>
            <th>Contact No</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.length === 0 && (
            <tr>
              <td colSpan="7" style={{ textAlign: "center" }}>
                No staff found
              </td>
            </tr>
          )}

          {data.map((item) => (
            <tr key={item._id}>
              {/* ✅ PHOTO TD — YAHI ADD KARNA THA */}
              <td>
                {item.photo && (
                  <img
                    src={`http://localhost:5000${item.photo}`}
                    alt={item.name}
                    width="60"
                    height="60"
                    style={{
                      objectFit: "cover",
                      borderRadius: "6px",
                    }}
                  />
                )}
              </td>

              <td>{item.name}</td>
              <td>{item.designation}</td>
              <td>{item.qualification}</td>
              <td>{item.section}</td>
              <td>{item.contactNo}</td>

              <td>
                <button
                  style={{ marginRight: "10px", cursor: "pointer" }}
                  onClick={() => onEdit(item)}
                >
                  Edit
                </button>

                <button
                  style={{ cursor: "pointer" }}
                  onClick={() => deleteStaff(item._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdministrationTable;
