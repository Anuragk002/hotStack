import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Linking, Text, TouchableOpacity, View } from 'react-native';

function ReactComp(props) {
    const tag='react';
    const [page,setPage]= useState(1);
    const [data,setData] =useState<any>([]);
    const [loading,setLoading] =useState(false);
    const getData=async()=>{
        setLoading(true);
        console.log(page)
        let url = `https://api.stackexchange.com/2.3/questions?page=${page}&pagesize=10&order=desc&sort=activity&tagged=${tag}&site=stackoverflow`
        try {
            const response = await axios.get(url);
            setData([...data,...response.data?.items]);
            setLoading(false)
          } catch (error) {
            console.error(error);
            setLoading(false)
          }
    }
    useEffect(()=>{
        getData();
    },[])
    const loadMore=()=>{
        setPage(prev=>prev+1);
        getData()
    }
    const renderItem = ({item}) => {
        return (
            <TouchableOpacity onPress={()=>Linking.openURL(item.link)} style={{minHeight:80,justifyContent:'center',marginBottom:5,paddingVertical:10,paddingHorizontal:5,backgroundColor:'lavender'}}>
                <Text>{item?.title}</Text>
            </TouchableOpacity>
        );
      };
    return (
        <View style={{flex:1}}>
            {loading && <View style={{backgroundColor:'rgba(255, 255, 255, 0.6)',width:'100%',position:'absolute', bottom:0, zIndex:999}}>
                <ActivityIndicator size={'large'}/>
            </View>}
            <FlatList
                data={data}
                renderItem={renderItem}
                // keyExtractor={item => item.question_id}
                // extraData={selectedId}
                onEndReached={loadMore}
            />
        </View>
    );
}

export default ReactComp;