import {createMuiTheme} from '@material-ui/core/styles';

 const theme = createMuiTheme({
     typography : {
         useNextVariants : true
     },

     palete : {
         primary :{
             main: '#115A85'
         },
        common :{

         white: 'white'
        },
        secondary : {
            main: '#306E45'
        },
        spacing : 10
     }
 })

 export default theme;