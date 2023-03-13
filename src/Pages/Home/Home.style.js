import { StyleSheet,Dimensions } from 'react-native'
export default StyleSheet.create({
    container: {
        height:40,
        width:40,
        backgroundColor:'white',
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center'
    },
    home_container: {
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        alignSelf:'center',
        width:Dimensions.get('screen').width/3,
        margin:10
    },
    font: {
        fontWeight:'bold',
        fontSize: 25,
        color: 'white',
    }
})