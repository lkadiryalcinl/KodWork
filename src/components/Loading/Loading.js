import React from 'react'
import { ActivityIndicator,View} from 'react-native'

export default() => {
    return( 
    <View style={{position:'absolute',left:0,right:0,top:0,bottom:0,justifyContent:'center',alignItems:'center',}}>
        <ActivityIndicator color={'#c31432'} size={100} />
    </View>
    )
};