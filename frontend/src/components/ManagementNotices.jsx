import { useEffect, useState } from "react";

function ManagementNotices() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    fetch(
      "http://localhost:5000/api/notifications/public?instituteType=management"
    )
      .then((res) => res.json())
      .then((data) => setNotices(Array.isArray(data) ? data : []))
      .catch(console.error);
  }, []);

  return (
    <aside className="profile-sidebar">
      <h4>News / Events / Notices</h4>

      {notices.length === 0 && <p>No notices available</p>}

      {notices.map((n) => (
        <div key={n._id} className="notice-card">
          <h5>{n.title}</h5>
          <p>{n.message}</p>

          <span className="date">
            {new Date(n.date).toLocaleDateString()}
          </span>

          {n.linkUrl && (
            <a
              href={n.linkUrl}
              target="_blank"
              rel="noreferrer"
              className="see-details"
            >
              {n.linkText || "Read More"}
            </a>
          )}
        </div>
      ))}
    </aside>
  );
}

export default ManagementNotices;
