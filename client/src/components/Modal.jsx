import React, { useEffect, useState } from "react";

export const Modal = ({ open, onClose, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeoutId;

    if (open) {
      timeoutId = setTimeout(() => {
        setIsVisible(true);
      }, 70);
    } else {
      timeoutId = setTimeout(() => {
        setIsVisible(false);
      }, 200);
    }

    return () => clearTimeout(timeoutId);
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center transition-colors ${
        isVisible ? "visible bg-black/50" : "invisible bg-black/0"
      }`}
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-lg shadow p-7 transition-all relative ${
          isVisible ? "scale-100 opacity-100" : "scale-110 opacity-0"
        } overflow-auto max-h-full`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 py-0.5 px-2 border border-neutral-200 rounded-md text-gray-400 bg-white hover:bg-slate-50 hover:text-gray-600"
          onClick={onClose}
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};
