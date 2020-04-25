// Looking for background? Go to App.scss

// eslint-disable-next-line
import css from 'sass-extract-loader?{"plugins": ["sass-extract-js"]}!./App.scss';

const rgb = {
  background: '255, 255, 255',
};

const theme = {
  ...css,
  gray: '#7e7e7e',
  muted: '#d9d9d9',

  bezier: 'cubic-bezier(1, 0.1, 0, 0.9)',

  alpha: {
    background: opacity => `rgba(${rgb.background}, ${opacity})`,
  },

  palette: {
    red: '#ff384f',
    safe: {
      red: 'white',
    },
  },
};

export default theme;
