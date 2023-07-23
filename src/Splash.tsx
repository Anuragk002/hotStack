import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';

function Splash(props) {
    const navigation= useNavigation();
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Home')
        },2000)
    },[])
    return (
       <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
            <View style={{width:250,height:250,alignItems:'center',justifyContent:'center',borderWidth:1,borderRadius:125,backgroundColor:'lavender'}}>
                <Text style={{fontSize:30,color:'red'}}>🔥 Hot Stack 🔥</Text>
            </View>
       </View>
    );
}

export default Splash;