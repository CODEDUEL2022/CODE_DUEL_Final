import React from 'react';

interface ModalProps {
  width: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = (props) => {
  return (
    <div className="modal" style={{ width: props.width }}>
      <span className="close-btn">&times;</span>
      <div className="modal-content">{props.children}</div>
    </div>
  );
};
