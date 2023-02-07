import styled from "styled-components";

const ModalStyled = styled.div`
  position: fixed;
  width: 17.18rem;
  height: 17.18rem;
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
  .modal-heading {
    font-size: 1.25rem;
  }
  .modal-text {
    font-size: 1.125rem;
  }
  &.modal-error {
    background-color: ${(props) => props.theme.colors.error.base};
  }
  &.modal-success {
    background-color: ${(props) => props.theme.colors.success.base};
  }
`;

export default ModalStyled;
