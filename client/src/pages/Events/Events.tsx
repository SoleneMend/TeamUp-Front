import { createPortal } from "react-dom";
import ZoomCreation from "../../components/ZoomCreation/ZoomCreation";

import "./Events.css";

interface ModalProps {
  onClose: () => void;
}

function Events({ onClose }: ModalProps) {
  return createPortal(
    // biome-ignore lint/a11y/useSemanticElements: <false>
    <div
      className="events-Modal-overlay"
      onClick={onClose}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === "Escape") {
          onClose();
        }
      }}
    >
      <dialog
        className="events-Modal-content"
        open
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <button className="events-Modal-close" type="button" onClick={onClose}>
          ✕
        </button>
        <ZoomCreation />
      </dialog>
    </div>,
    document.body,
  );
}

export default Events;
