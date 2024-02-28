import { View, Text,Image } from 'react-native'
import React from 'react'
import { storyData } from '../utils'

export default function StoryItem({item}) {
   // console.log('Item Data',item.item.name)
  return (
    <View className='flex-1 justify-center items-center'>
      <View className='border-4 border-rose-500  rounded-full mt-3 mx-2'>
         <Image className='rounded-full'source={item.item.image} style={{height:60,width:60}}/>
      </View>  
      <Text className='text-white font-medium' style={{fontSize:10}}>{item.item.name}</Text>
    </View>
  )
}