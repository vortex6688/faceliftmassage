import {makeStyles} from '@material-ui/core/styles';
import background from './images/bg.jpg';

export default makeStyles((theme) => ({
    // main: {
    //     backgroundImage: `url(${background})`,
    //     height: '100%',
    //     width: '100%',
    //     position: 'absolute'
    // },
    // mainContainer: {
    //     backgroundColor: '#fff',
    //     marginTop: '2em'
    // },
    // mainBanner: {
    //     height: '100%'
    // }
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#efefef'
     },
     heading: {
        color: '#55133B',
        fontWeight: '400'
     },
     image: {
        marginLeft: '15px',
     },
     [theme.breakpoints.down('sm')]: {
        mainContainer: {
           flexDirection: "column-reverse"
        }
     }
}))