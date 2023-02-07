import styled from "styled-components";

const ModalStyled = styled.div`
  position: fixed;
  width: 30rem;
  height: 30rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  padding: 0.5rem 1.5rem;
  border-radius: 15%;
  opacity: 0.9;

  .modal-heading {
    font-size: 2.25rem;
    font-weight: 700;
  }
  .delete {
    font-size: 1.25rem;
  }
  .modal-text {
    font-size: 2.125rem;
    font-weight: 700;
  }
  &.modal-error {
    background-color: ${(props) => props.theme.colors.error.base};
  }
  &.modal-success {
    background-color: ${(props) => props.theme.colors.success.base};
  }
`;

export default ModalStyled;
