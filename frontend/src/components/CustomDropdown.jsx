import { useState, useRef, useEffect } from "react";

export default function CustomDropdown({
  options = [],
  value,
  onChange,
  placeholder = "Select option"
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // outside click close
  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const selectedLabel =
    options.find((o) => o.value === value)?.label || placeholder;

  return (
    <div className="custom-dropdown" ref={ref}>
      <button
        type="button"
        className="dropdown-btn"
        onClick={() => setOpen(!open)}
      >
        <span>{selectedLabel}</span>
        <span className="arrow">▾</span>
      </button>

      {open && (
        <ul className="dropdown-list">
          {options.map((opt) => (
            <li
              key={opt.value}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              className={opt.value === value ? "active" : ""}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
