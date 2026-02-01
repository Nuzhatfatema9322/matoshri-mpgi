function PopupModal({ onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <button className="popup-close" onClick={onClose}>✕</button>

        <img
          src="/popup/codebusters.jpg"
          alt="Popup"
          className="popup-image"
        />
      </div>
    </div>
  );
}

export default PopupModal;
