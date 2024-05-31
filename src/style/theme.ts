export type ThemeName = 'light' | 'dark';
type ColorKey = 'primary' | 'secondary' | 'third' | 'background';

interface Theme {
  name: string;
  color: Record<ColorKey, string>;
}

export const light : Theme = {
  name: 'light',
  color: {
    primary: 'brown',
    secondary: 'black',
    third: 'white',
    background: "lightgray",
  },
};

export const dark : Theme = {
  name: 'dark',
  color: {
    primary: 'white',
    secondary: 'black',
    third: 'black',
    background: 'black',
  },
};

export const getTheme = (themeName: ThemeName) => {
  return themeName === 'light' ? light : dark;
};