import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {Stack} from 'expo-router'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function HomeHeader() {
    const {top}=useSafeAreaInsets()
  return (
   <View className='flex-row justify-between p-10'>
    <TouchableOpacity>
      <Image source={require('../assets/images/instagram-white.png')} style={{
        height:50,
        width:50
      }}/>        
    </TouchableOpacity> 

   </View>
  )
}