import React, { useEffect, useState } from 'react';
import '../assets/css/ErrorToast.css'

const ErrorToast = ({ message, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 8000); // Toast disappears after 8 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  if (!isVisible) return null;

  return (
    <div className="error-toast">
      <p>{message}</p>
      <button onClick={onClose} className="error-toast-close-btn">X</button>
    </div>
  );
};

export default ErrorToast;
