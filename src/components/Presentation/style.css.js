import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  title: {
    fontWeight: 600,
  },
  background: (props) => ({
    color: 'white',
    backgroundImage: `url(${props.image})`,
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    paddingTop: '9em',
    paddingBottom: '9em',
    maxWidth: '100%',
    position: 'relative',
    zIndex: 1,
    '&::after': {
      content: "''",
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.6)',
      zIndex: -1,
    },
  }),
});
