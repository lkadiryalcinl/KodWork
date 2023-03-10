import { StyleSheet,Dimensions } from 'react-native'

export default StyleSheet.create({
    header:{
        justifyContent:'space-between',
        backgroundColor:'#c31432',
        padding:10,
        marginLeft:3,
        marginRight:3,
        borderRadius:5
    },
    body:{
        marginTop:10,
        marginBottom:10,
        marginLeft:3,
        marginRight:3,
        padding:3,
        backgroundColor:'#c31432',
        borderRadius:5,
    },
    bottom:{
        backgroundColor:'#F2F2F2',
        flexDirection:'row',
        
    },
    h1:{
        fontWeight:'bold',
        color:'white',
        fontSize:20,
        textAlign:'left',
        marginBottom:10,
    },
    h1_middle:{
        marginTop:10,
        fontWeight:'bold',
        color:'white',
        fontSize:25,
        textAlign:'center',
    },
    button_container:{
        flex:1
    },
})