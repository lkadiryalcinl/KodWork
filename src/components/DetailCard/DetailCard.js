import React from 'react'
import { Linking,View,ScrollView,Text } from 'react-native'
import NewText from '../NewText'
import Button from '../Button'
import styles from './DetailCard.style'
import RenderHTML from 'react-native-render-html'
import { useWindowDimensions } from 'react-native'

export default({data,onClick}) => {
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
                <View style={styles.button_container}><Button title="Favourite Job" onClick={onClick} iconName="heart"/></View>
            </View>
        </ScrollView>
    );
};