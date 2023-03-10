import { StyleSheet,Dimensions } from 'react-native'

export default StyleSheet.create({
    container: {
        backgroundColor:'#c31432',
        margin:10,
        padding:10,
        borderRadius:5,
    },
    btn: {
        flexDirection:'row',
        justifyContent: 'center',
    },
    text:{
        fontWeight:'bold',
        color:'white',
        fontSize:20,
        paddingLeft:8,
    }
});
