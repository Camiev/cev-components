import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  footer: {
    backgroundColor: '#f2f2f2',
    textTransform: 'uppercase',
    marginTop: '2em',
    paddingTop: '2em',
  },
  downFooter: (props) => ({
    backgroundColor: props.downBackgroundColor,
    color: 'white',
  }),
});
