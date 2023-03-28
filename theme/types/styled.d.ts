import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors?: {
      light_white?: string;
      white?: string;
      light_gray?: string;
    };
    bg_colors?: {
      primary?: string;
      secondary?: string;
      btn_primary_color?: string;
      btn_secondary_color?: string;
    };
    media?: {
      tablet?: string;
      desktop?: string;
    };
  }
}
