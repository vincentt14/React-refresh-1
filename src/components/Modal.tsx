import classes from "./Modal.module.css";

type ModalProps = {
  children: React.ReactNode;
  onClose: () => void;
};

function Modal({ children, onClose }: ModalProps) {
  function stopPropagationHandler(event: React.MouseEvent) {
    event.stopPropagation();
  };

  return (
    <>
      <div className={classes.backdrop} onClick={onClose}>
        <dialog open className={classes.modal} onClick={stopPropagationHandler}>
          {children}
        </dialog>
      </div>
    </>
  );
}

export default Modal;
