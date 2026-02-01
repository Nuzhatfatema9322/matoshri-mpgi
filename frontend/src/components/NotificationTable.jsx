import { useEffect, useState } from "react";
import CustomDropdown from "./CustomDropdown"; // 🔥 CUSTOM DROPDOWN

function NotificationTable({
  onAdd,
  onEdit,
  reload,
  institute,
  setInstitute,
}) {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");

  const fetchData = async () => {
    const res = await fetch("http://localhost:5000/api/notifications", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const json = await res.json();
    setData(Array.isArray(json) ? json : []);
  };

  useEffect(() => {
    fetchData();
  }, [reload]);

  const instituteLabel =
    institute === "engineering"
      ? "School of Engineering"
      : institute === "polytechnic"
      ? "Vishwabharati Polytechnic Institute"
      : "School of Management";

       const instituteOptions = [
    { label: "School of Engineering", value: "engineering" },
    { label: "School of Management", value: "management" },
    {
      label: "Vishwabharati Polytechnic Institute",
      value: "polytechnic",
    },
  ];

  const deleteItem = async (id) => {
    await fetch(`http://localhost:5000/api/notifications/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchData();
  };

  return (
    <div className="notify-box">
      <div className="notify-head">
        <div>
          <h3>Notifications Management</h3>
          <p>Manage and share updates for {instituteLabel}</p>
        </div>

        <div className="notify-actions" style={{ gap: "10px" }}>
          {/* 🔥 CUSTOM DROPDOWN */}
          <div style={{ minWidth: "260px" }}>
            <CustomDropdown
              options={instituteOptions}
              value={institute}
              onChange={setInstitute}
              placeholder="Select Institute"
            />
          </div>

          <button className="add-btn" onClick={onAdd}>
            + Add Notification
          </button>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>TITLE</th>
            <th>CATEGORY</th>
            <th>MESSAGE</th>
            <th>DATE</th>
            <th>ACTIONS</th>
          </tr>
        </thead>

        <tbody>
          {data.map((n) => (
            <tr key={n._id}>
              <td>{n.title}</td>

              <td>
                <span
                  className={`tag ${
                    n.category === "Notice Board"
                      ? "blue"
                      : n.category === "Important Notice"
                      ? "purple"
                      : "green"
                  }`}
                >
                  {n.category}
                </span>
              </td>

              <td>{n.message}</td>
              <td>{new Date(n.date).toLocaleDateString()}</td>

              <td>
                <span
                  style={{ cursor: "pointer", marginRight: "10px" }}
                  onClick={() => onEdit(n)}
                >
                  ✏️
                </span>

                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => deleteItem(n._id)}
                >
                  🗑️
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default NotificationTable;
