import { View, Text, FlatList } from 'react-native'
import React from 'react'
import StoryItem from './StoryItem'
import { storyData } from '../utils'

export default function StoryList({stories}) {
    //console.log('StroyList',stories)
   // console.log('StoryId',storyData[0].name)
    

  return (
    <View>
      <FlatList 
      data={stories}
      renderItem={(item,index)=><StoryItem item={item} index={index}/>}
      showsHorizontalScrollIndicator={false}
      horizontal/>
    </View>
  )
}