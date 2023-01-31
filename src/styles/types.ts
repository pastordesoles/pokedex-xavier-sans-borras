import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      mainColors: {
        dark: string;
        gray: string;
      };
      success: {
        base: string;
      };
      error: {
        base: string;
      };
    };

    fontWeights: {
      regular: number;
      bold: number;
    };
  }
}
