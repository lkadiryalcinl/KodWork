import React,{useContext, useEffect} from 'react'
import { Linking,View,ScrollView,Text } from 'react-native'
import NewText from '../NewText'
import Button from '../Button'
import styles from './DetailCard.style'
import RenderHTML from 'react-native-render-html'
import { useWindowDimensions } from 'react-native'
import { Context } from '../../Context/Context'

export default({data}) => {
    const {favoriteJobsId,setFavoriteJobsId,lastData,setLastData} = useContext(Context);
    const[isFav,setIsFav] = React.useState(favoriteJobsId.includes(data.id));
    const[dummy,setDummy] = React.useState(favoriteJobsId.includes(data.id));
    const {width} = useWindowDimensions();
    
    const source = {
        html: `${data.contents}`
        
    };
    
    const tagsStyles = {
        p:{
            color:'white'
        },
        ul:{
            color:'white'
        },
        strong:{
            color:'white'
        },
        b:{
            color:'white'
        },
        br:{
            color:'white'
        },
        p:{
            color:'white'
        }
    }

    useEffect(()=>{
        if(isFav) {
            for(let i=0;i<favoriteJobsId.length;i++){
                if(favoriteJobsId.includes(data.id))
                    {
                        setDummy(true)
                        break;
                    }
            }
            if(dummy===false){
                setFavoriteJobsId([...favoriteJobsId,data.id]);
            }
        }
        else{
            const newFavoriteJobsId = favoriteJobsId.filter(
                item => item !== data.id
            )
            setFavoriteJobsId(newFavoriteJobsId)
        }
    },[isFav])

    useEffect(()=>{
            if(favoriteJobsId.includes(data.id) && !lastData.includes(data)){
                setLastData([...lastData,data])
            }
            else if(lastData.includes(data) && !favoriteJobsId.includes(data.id))
            {
               const newLastData = lastData.filter(
                item => item !== data
               )
               setLastData(newLastData)
            }
    },[favoriteJobsId])

    useEffect(() =>{
        if(!lastData.includes(data) && !favoriteJobsId.includes(data.id)){
            setIsFav(false)
        }
    },[lastData,favoriteJobsId])

    const onClick = () =>{
        isFav?setIsFav(false):setIsFav(true);
    }
    
    return(
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.h1}>{data.name}</Text>
                <NewText type="Locations" text={data.locations[0].name}/>
                <NewText type="Job Level" text={data.levels[0].name}/>
                <NewText type="Publication Date" text={data.publication_date.slice(0,data.publication_date.indexOf("T")) +" "+ data.publication_date.slice(data.publication_date.indexOf("T")+1,data.publication_date.indexOf("Z"))}/>
                <NewText type="Company Name" text={data.company.name}/>
                <Text style={styles.h1_middle}>Job Detail</Text>
            </View>
            <View style={styles.body}>
                <RenderHTML
                source={source}
                contentWidth={width}
                tagsStyles={tagsStyles}
                />
            </View>
            <View style={styles.bottom}>
                <View style={styles.button_container}><Button title="Submit" onClick={() => {Linking.openURL(data.refs.landing_page)}} iconName="ios-enter-outline"/></View>
                <View style={styles.button_container}><Button title={isFav?"Favorited":"Favorite"} onClick={onClick} iconName={isFav?"heart":"heart-outline"}/></View>
            </View>
        </ScrollView>
    );
};