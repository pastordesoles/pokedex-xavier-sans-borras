import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { closeModalActionCreator } from "../../stores/actions/uiActions/uiActionCreators";

import UiContext from "../../stores/contexts/uiContext/UiContext";
import ModalStyled from "./ModalStyled";

const Modal = (): JSX.Element => {
  const {
    dispatch,
    currentUiState: {
      modalInformation: { isError, modalText },
    },
  } = useContext(UiContext);

  return (
    <ModalStyled className={isError ? "modal-error" : "modal-success"}>
      <FontAwesomeIcon
        className="delete"
        data-testid="delete"
        icon={faXmark}
        onClick={() => dispatch(closeModalActionCreator())}
      />
      <span className="modal-heading">
        {isError ? "Something went wrong...!" : "Succes"}
      </span>
      <span className="modal-text">{modalText}</span>
    </ModalStyled>
  );
};

export default Modal;
