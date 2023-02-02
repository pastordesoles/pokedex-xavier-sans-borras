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
    width: 450px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
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

  @media only screen and (min-width: 1150px) {
    :hover {
      background-color: #bebebe;
    }
  }
`;

export default DetailsStyled;
