import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  init: (props) => ({
    flexGrow: 0,
    position: 'sticky',
    top: 0,
    left: 'auto',
    right: 0,
    backgroundColor: props.color,
    zIndex: 2,
  }),
  lineBottom: {
    left: 'calc(50%)',
    width: '22px',
    bottom: '8px',
    height: '1px',
    position: 'absolute',
    transition: 'opacity 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    backgroundColor: '#fff',
  },
  iconDesktop: {
    paddingRight: '1.1em',
  },
  iconMobile: {
    paddingRight: '1.2em',
  },
  title: {
    flexGrow: '1',
    lineHeight: '1em',
  },
  toolbar: {
    minHeight: '6.5em',
    transition: 'min-height 0.25s ease-out',
  },
  image: {
    maxHeight: '2.8em',
    transition: 'max-height 0.25s ease-out',
    marginLeft: '1em',
  },
  toolbarSmaller: {
    minHeight: '4.5em',
    transition: 'min-height 0.25s ease-out',
  },
  imageSmaller: {
    maxHeight: '2.2em',
    transition: 'max-height 0.25s ease-out',
    marginLeft: '1em',
  },
});
