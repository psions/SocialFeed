import { makeStyles} from '@material-ui/core/styles';
import { CardMedia, Icon } from '@mui/material';

const useStyles = makeStyles(() => ({
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6)
    },
    icon: {
        marginRight: '20px',
    },
    buttons:{
        marginTop: '40px'
    },
    cardGrid: {
        padding: '20px 0'
    },
    card: {
        height: '200%',
        display: 'flex',
        flexDirection: 'column'
    },
    CardMedia: {
        paddingTop: '56.25%' //16:9

    },
    cardContent: {
        flexGrow: 1,
    },
}));

 
export default useStyles;