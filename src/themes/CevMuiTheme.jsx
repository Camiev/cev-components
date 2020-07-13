import { createMuiTheme } from '@material-ui/core/styles';

const CevMuiTheme = (props = {}) => {
  const font = props.font || '"Open sans", "Helvetica", "Arial", sans-serif';
  const colorPrimary = props.colorPrimary || '#6200ee';
  const colorSecondary = props.colorSecondary || '#03dac6';

  return createMuiTheme({
    typography: {
      fontFamily: font,
    },
    palette: {
      primary: { main: colorPrimary },
      secondary: { main: colorSecondary },
    },
    overrides: {
      MuiButton: {
        root: {
          textAlign: 'center',
          position: 'inherit',
          borderRadius: '1em',
        },
        label: {
          alignItems: 'flex-start',
        },
      },
      MuiTypography: {
        root: {
          whiteSpace: 'pre-wrap',
        },
        h4: {
          fontWeight: 600,
          textTransform: 'uppercase',
          paddingTop: '0.5em',
        },
        subtitle1: {
          fontWeight: 600,
          color: colorPrimary,
        },
        subtitle2: {
          fontSize: '1.1em',
        },
      },
      MuiGrid: {
        container: {
          paddingTop: '1em',
          paddingBottom: '1em',
        },
      },
      MuiAvatar: {
        root: {
          width: '10em',
          height: '10em',
          margin: '1em',
        },
      },
    },
  });
};

export default CevMuiTheme;
