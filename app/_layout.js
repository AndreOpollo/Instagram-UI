import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import "../global.css"
import { Slot, Stack } from 'expo-router'
import HomeHeader from '../components/HomeHeader'
import { AntDesign, Feather, MaterialCommunityIcons } from '@expo/vector-icons'


export default function _layout() {
  return (
    <Stack screenOptions={{
      headerStyle:{
        backgroundColor:"black"
      }
    }}>
      <Stack.Screen name='index' options={{
        title:'',

        headerLeft:()=>(
          <TouchableOpacity className='flex-row items-center'>
  
            <Image source={require('../assets/images/instagram-white.png')} resizeMode='contain' 
            style={{height:50,width:120}}/>
            <AntDesign name='down' size={20} color={'white'}/>
          </TouchableOpacity>
        ),
        headerRight:()=>(
          <View className='flex-row items-center gap-6'>
            <TouchableOpacity>
              <Feather name='heart' size={26} color={'white'}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialCommunityIcons name='facebook-messenger' size={26} color={'white'}/>
            </TouchableOpacity>
          </View>
        )
      }}/>
    </Stack>
  )
}