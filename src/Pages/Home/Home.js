import React, {useState} from 'react'
import { FlatList,View,Text,TouchableOpacity} from 'react-native'
import JobCard from '../../components/JobCard';
import useFetch from '../../hooks/useFetch';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import styles from './Home.style'
import Loading from '../../components/Loading';
import Error from '../../components/Error';

export default({navigation}) => {
    const [counter,setCounter] = useState(0)   
    const {data,loading,error} = useFetch("https://www.themuse.com/api/public/jobs?page=",counter)

    const movePage=() => {
        return(
            <View style={styles.home_container}>
            <TouchableOpacity style={styles.container} onPress={() => {
                setCounter(counter - 1)
            }} disabled={counter<=0}><Icon name="arrow-left-bold" size={20} color="black"/></TouchableOpacity>
            <Text style={{fontWeight:'bold',fontSize:30,color:'white'}}>{counter}</Text>
            <TouchableOpacity style={styles.container} onPress={()=>{
                setCounter(counter + 1)
            }} disabled={counter>=100}><Icon name="arrow-right-bold" size={20} color="black"/></TouchableOpacity>
            </View>
        )
    }
    const onClick = (id) => {
        navigation.navigate('Detail',{id})
    }
    const renderItem = ({item}) => <JobCard Job={item} onClick={() => onClick(item.id)}/>

    if(loading) return <Loading/>
    if(error) return <Error/>
    
    return (
        <View style={{backgroundColor:'#c31432'}}>
            <FlatList 
            data={data.results} 
            renderItem={renderItem} 
            keyExtractor={item => item.id.toString()}
            ListHeaderComponent={
                movePage
            }
            ListFooterComponent={
                movePage
            }/>
        </View>
        );

};