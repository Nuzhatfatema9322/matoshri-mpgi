function DashboardTopBar({ onLogout }) {
  return (
    <div className="dash-topbar">
      <div>
        <h2>Institution Dashboard</h2>
        <p>Manage all school activities and administration</p>
      </div>

      <button className="logout-btn" onClick={onLogout}>
        ⎋ Logout
      </button>
    </div>
  );
}

export default DashboardTopBar;
