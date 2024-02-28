import { View, Text, ScrollView } from 'react-native'
import React,{useState} from 'react'
import HomeHeader from '../components/HomeHeader'
import StoryList from '../components/StoryList'
import { postData, storyData } from '../utils'
import PostList from '../components/PostList'

export default function index() {
  const[stories,setStories]=useState(storyData)
  const[posts,setPosts]=useState(postData)
  //console.log('Stories',stories)
 // console.log('Posts',posts)
  return (
    <ScrollView className='flex-1 bg-black'>
      <StoryList stories={stories}/>
      <PostList posts={posts}/>       
    </ScrollView>
  )
}