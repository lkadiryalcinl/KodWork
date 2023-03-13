import React, { useEffect, useState } from 'react'
import { FlatList, View, Text, TouchableOpacity } from 'react-native'
import JobCard from '../../components/JobCard';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import styles from './Home.style'
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import useFetch from '../../hooks/useFetch';

export default ({ navigation }) => {
    const [pageNumber, setPageNumber] = useState(0);
    const { data, loading, error } = useFetch("https://www.themuse.com/api/public/jobs?page=", pageNumber)

    const onClick = (id) => {
        navigation.navigate('Detail', { id })
    }

    const movePage = (pageNumber) => {
        return (
            <View style={styles.home_container}>
                <TouchableOpacity style={styles.container} onPress={() => {
                    if (pageNumber > 0) setPageNumber(pageNumber - 1)
                }}
                    disabled={pageNumber === 0}
                ><Icon name='arrow-left-bold' size={25} color='black' /></TouchableOpacity>

                <Text style={styles.font}>{pageNumber}</Text>

                <TouchableOpacity style={styles.container} onPress={() => {
                    if (pageNumber < 5) setPageNumber(pageNumber + 1)
                }}
                    disabled={pageNumber === 4}
                ><Icon name='arrow-right-bold' size={25} color='black' /></TouchableOpacity>
            </View>
        )
    }

    const renderItem = ({ item }) => <JobCard Job={item} onClick={() => onClick(item.id)} />

    if (loading) return <Loading />
    if (error) return <Error />

    return (
        <View style={{ backgroundColor: '#c31432' }}>
            <FlatList
                data={data.results}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                ListFooterComponent={() => movePage(pageNumber)}
            />
        </View>
    );

};