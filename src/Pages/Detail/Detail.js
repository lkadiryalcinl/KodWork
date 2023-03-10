import React from 'react'
import useFetchDetail from '../../hooks/useFetchDetail';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import DetailCard from '../../components/DetailCard';

export default({route}) => {
    const {id} = route.params;
    const {data,loading,error} = useFetchDetail("https://www.themuse.com/api/public/jobs/"+id)
    
    if(loading) return <Loading/>
    if(error) return <Error/>

    return <DetailCard data={data}/>
};