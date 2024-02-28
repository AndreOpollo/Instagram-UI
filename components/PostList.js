import { View, Text, FlatList } from 'react-native'
import React from 'react'
import PostItem from './PostItem'

export default function PostList({posts}) {
  return (
    <View>
      <FlatList
      data={posts}
      key={Math.random()}
      renderItem={item=><PostItem item={item}/>}
      showsVerticalScrollIndicator={false}/>
    </View>
  )
}