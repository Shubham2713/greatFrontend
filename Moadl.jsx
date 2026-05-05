https://www.greatfrontend.com/questions/user-interface/modal-dialog

import { useState } from "react";

function Modal({ title, children, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>{title}</h2>

          <button onClick={onClose}>Close</button>
        </div>

        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      {isOpen && (
        <Modal title="My Modal Title" onClose={() => setIsOpen(false)}>
          <p>This is the modal body content.</p>
          <p>You can pass any JSX here.</p>
        </Modal>
      )}
    </div>
  );
}




.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: white;
  padding: 20px;
  border-radius: 8px;
  min-width: 300px;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-body {
  margin-top: 16px;
}
