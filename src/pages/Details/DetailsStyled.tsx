import styled from "styled-components";

const DetailsStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  min-height: 100vh;
  position: relative;

  article {
    position: relative;
    padding: 2rem;
    background-color: white;
    height: 450px;
    width: 320px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    @media only screen and (min-width: 1150px) {
      :hover {
        background-color: #bebebe;
      }
    }
  }
  .pokemon-card-basic {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  .return {
    position: absolute;
    left: 85%;
    right: -85%;
  }

  .bold {
    font-weight: ${(props) => props.theme.fontWeights.bold};
  }

  .favourite {
    border-radius: 15%;
    padding: 0.5rem;
    background-color: #bde7bd;
  }

  .pokemon-card-stats {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;
  }

  ul {
    list-style: disc;
    padding-left: 8%;
  }
`;

export default DetailsStyled;
