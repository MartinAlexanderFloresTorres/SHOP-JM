import { StylesConfig } from 'react-select';

export const customStylesSelect: StylesConfig = {
  control: (styles) => ({
    ...styles,
    borderRadius: '9999px',
    color: '#737373fb',
    padding: '0 10px',
    backgroundColor: '#00000008',
    borderColor: '#00000008',
    ':hover': {
      borderColor: '#00000008',
    },
  }),
  singleValue: (styles) => ({
    ...styles,
    color: '#737373fb',
  }),
  menuList: (styles) => ({
    ...styles,
    padding: '10px',
  }),
  indicatorSeparator: (styles) => {
    return {
      ...styles,
      display: 'none',
    };
  },
  option: (styles) => {
    return {
      ...styles,
      borderRadius: '10px',
      backgroundColor: 'white',

      color: '#737373fb',
      ':active': {
        backgroundColor: '#00000008',
      },
      ':hover': {
        backgroundColor: '#00000008',
      },
    };
  },
};
