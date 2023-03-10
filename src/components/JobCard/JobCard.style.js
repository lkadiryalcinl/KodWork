import { StyleSheet,Dimensions } from 'react-native'

export default StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'white',
        borderRadius:5,
        margin:10,
        padding:10,
        borderColor:'black'
    },
    text_inner_container: {
        resizeMode:'contain',
        backgroundColor:'black',
        marginBottom:10,
        alignSelf:'baseline',
        padding:3,
        paddingLeft:7,
        paddingRight:7,
        borderRadius:12,
    },
    h1:{
        fontWeight:'bold',
        color:'black',
        fontSize:18,
        marginBottom:10,
    },
    h2_left: {
        color:'white',
        fontWeight:'bold',
    },
    h2_right: {
        marginTop:10,
        textAlign:'right',
        color:'black',
        fontWeight:'bold',
    },
});
