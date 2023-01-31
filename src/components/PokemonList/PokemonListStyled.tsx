import styled from "styled-components";

const PokemonListStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  aside {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .pokemon {
    &__list {
      display: grid;
      row-gap: 30px;
      grid-template-columns: repeat(1, 1fr);
      padding: 2rem 0;
    }
  }

  @media only screen and (min-width: 481px) {
    align-items: unset;

    .pokemon {
      &__list {
        grid-template-columns: repeat(2, 260px);
        column-gap: calc((100% - (2 * 260px)) / 2);
      }
    }
  }

  @media only screen and (min-width: 1150px) {
    align-items: unset;

    .pokemon {
      &__list {
        grid-template-columns: repeat(3, 260px);
        column-gap: calc((100% - (3 * 260px)) / 3);
      }
    }
  }
`;

export default PokemonListStyled;
