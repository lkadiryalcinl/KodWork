import React,{useContext} from 'react'
import { FlatList, View, Text } from 'react-native'
import FavouriteJobCard from '../../components/FavouriteJobCard';
import { Context } from '../../Context/Context';

export default() => {
  const {lastData} = useContext(Context);

  const renderItem = ({item}) => <FavouriteJobCard Job={item} onClick={()=>{}}/>
  return(
    (lastData.length > 0? 
      <FlatList
        data={lastData}
        renderItem={renderItem}
        />:(<View style={{flex:1,justifyContent:'flex-start',alignItems:'center'}}><Text style={{color:'#c31432',fontWeight:'bold',fontSize:30}}>There isn't any favorite.</Text></View>)
      ))
    };