// Modal.tsx
import React from 'react';

interface ModalProps {
  title?: string;
  subtitle?: string;
  description?: string;
  imageUrl?: string;
  hide: () => void;
}

const ModalComponent: React.FC<ModalProps> = ({ title, subtitle, description, imageUrl, hide }) => {


  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
  }

  return (
    <div className="modal-overlay" onClick={hide}>
      <div className="modal" onClick={(e)=>handleClose(e)}>
        <button className="modal-close-button" onClick={hide}>&times;</button>
        <img src={imageUrl} alt="" className="modal-image" />
        <div className="modal-title">{title}</div>
        <div className="modal-subtitle">{subtitle}</div>
        <div className="modal-description">{description}</div>
        <button className="modal-button" onClick={hide}>Cerrar</button>
      </div>
    </div>
  );
};

export default ModalComponent;
