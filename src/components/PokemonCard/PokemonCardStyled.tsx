import styled from "styled-components";

const PokemonCardStyled = styled.li`
  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    border: 1px solid black;
    height: 250px;
    width: 250px;
    background-color: white;
  }

  @media only screen and (min-width: 1150px) {
    :hover {
      background-color: #bebebe;
    }
  }
`;

export default PokemonCardStyled;
