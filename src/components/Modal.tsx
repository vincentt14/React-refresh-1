import { useNavigate } from "react-router-dom";

import classes from "./Modal.module.css";

type ModalProps = {
  children: React.ReactNode;
};

function Modal({ children }: ModalProps) {
  const navigate = useNavigate();

  function stopPropagationHandler(event: React.MouseEvent) {
    event.stopPropagation();
  };

  function onCloseHandler(){
    navigate('..');
  }

  return (
    <>
      <div className={classes.backdrop} onClick={onCloseHandler}>
        <dialog open className={classes.modal} onClick={stopPropagationHandler}>
          {children}
        </dialog>
      </div>
    </>
  );
}

export default Modal;
