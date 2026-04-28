import { createPortal } from "react-dom";
import ZoomCreation from "../../components/ZoomCreation/ZoomCreation";

import "./Events.css";

interface ModalProps {
  onClose: () => void;
}

function Events({ onClose }: ModalProps) {
  return createPortal(
    <button type="button" className="events-Modal-overlay" onClick={onClose}>
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
    </button>,
    document.body,
  );
}

export default Events;
