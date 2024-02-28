import { View, Text,Image } from 'react-native'
import React from 'react'
import { Entypo, Feather, FontAwesome, Ionicons } from '@expo/vector-icons'

export default function PostItem({item}) {
  return (
    <View className='flex-1 mt-6 gap-2'>
      <View className='flex-row justify-between items-center'>
        <View className='flex-row items-center gap-4'>
            <View className='rounded-full border-2  ml-4 border-rose-500'>
                <Image
                source={item.item.profile} 
                className='rounded-full' 
                style={{height:32,width:32}}/>
            </View>
            <Text className='text-white font-semibold'>{item.item.name}</Text>
        </View>
        {/* Three dots */}
        <View className='mr-4'>
            <Entypo name='dots-three-vertical' size={20} color={'white'}/>
        </View>

      </View>
      <View >
        <Image 
        source={item.item.image}
         style={{height:450,width:420}}
         resizeMode='cover'
         />
      </View>
      <View className='flex-row justify-between mx-4 mt-2'>
        <View className='flex-row gap-4 items-center '>
            <View>
                <Feather name='heart' size={28} color={'white'}/>
            </View>
            <View>
                <Ionicons name='chatbubble-outline' size={28} color={'white'}/>
            </View>
            <View>
                <Feather name='send' size={28} color={'white'}/>
            </View>

        </View>
        <View>
            <FontAwesome name='bookmark-o' size={28} color={'white'}/>
        </View>
      </View>
      <View className='ml-4 mt-4 gap-1'>
        <Text className='text-white font-semibold'>203,000 likes</Text>
        <Text className='text-white font-semibold'>{item.item.name} Fuck off!</Text>
        <Text className='text-neutral-400'>View all 15,000 comments</Text>
        <Text className='text-neutral-400' style={{fontSize:10}}>1 hour ago</Text>
      </View>
    </View>
  )
}