export type ThemeName = 'light' | 'dark';
export type ColorKey = 'primary' | 'secondary' | 'third' | 'background';
export type HeadingSize = 'small' | 'medium' | 'large';
export type ButtonSize = 'small' | 'medium' | 'large';
export type SchemaType = 'primary' | 'normal';
export type LayoutWidth = 'small' | 'medium' | 'large';


interface Theme {
  name: string;
  color: Record<ColorKey, string>;
  heading: Record<HeadingSize, {
    fontSize: string;
    fontWeight: string;
  }>;
  button: Record<ButtonSize, {
    fontSize: string;
    padding: string;
    borderRadius: string;
  }>;
  buttonSchema: Record<SchemaType, {
    color: string;
    backgroundColor: string;
  }>;
  layout: Record<LayoutWidth, {
    width: string;
    padding: string;
  }>;
}

export const light : Theme = {
  name: 'light',
  color: {
    primary: '#424874',
    secondary: '#A6B1E1',
    third: "#DCD6F7",
    background: '#F4EEFF',
  },
  heading: {
    small: {
      fontSize: '1rem',
      fontWeight: 'bold',
    },
    medium: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
    large: {
      fontSize: '2rem',
      fontWeight: 'bold',
    }
  },
  button: {
    small: {
      fontSize: '0.75rem',
      padding: '0.25rem 0.5rem',
      borderRadius: '0.25rem',
    },
    medium: {
      fontSize: '1rem',
      padding: '0.5rem 1rem',
      borderRadius: '0.25rem',
    },
    large: {
      fontSize: '1.25rem',
      padding: '0.75rem 1.5rem',
      borderRadius: '0.25rem',
    },
  },
  buttonSchema: {
    primary: {
      color: 'white',
      backgroundColor: 'midnightblue',
    },
    normal: {
      color: 'black',
      backgroundColor: 'lightgray',
    },
  },
  layout: {
    small: {
      width: '100%',
      padding: '1rem',
    },
    medium: {
      width: '50%',
      padding: '1rem',
    },
    large: {
      width: '33.33%',
      padding: '1rem',
    },
  },
};

export const dark : Theme = {
  ...light,
  name: 'dark',
  color: {
    primary: '#EEEEEE',
    secondary: '#00ADB5',
    third: '#393E46',
    background: '#222831',
  },
};

export const getTheme = (themeName: ThemeName) => {
  return themeName === 'light' ? light : dark;
};