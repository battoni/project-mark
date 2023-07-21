import { UI_COLORS } from '@Types';

enum TAGS_ENUM {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  P = 'p',
  SPAN = 'span',
}

enum FONTS_ENUM {
  TITLE = 'font-title',
  BODY = 'font-body',
}

const AppTextProps = {
  FONTS_ENUM,
  TAGS_ENUM,
  UI_COLORS,
};

export { AppTextProps, FONTS_ENUM, TAGS_ENUM };
