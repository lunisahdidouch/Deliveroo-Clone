import { View, Text, SafeAreaView, StatusBar, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ChevronDownIcon, UserIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon } from 'react-native-heroicons/outline'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'
import sanityClient from '../sanity'

const HomeScreen = () => {
  const navigation = useNavigation()
  const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

  const [featuredCategories, setFeaturedCategories] = useState([])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  useEffect(() => {
    sanityClient.fetch(`
    *[_type == "featured"] {
      ...,
      restaurants[]->{
        ...,
        dishes[]->
        }
        }`).then(data => {
         setFeaturedCategories(data) 
        })
  
  })
  return (
    <SafeAreaView style={{paddingTop: statusBarHeight + 10}} className='bg-white pt-5'>
      {/* <Text> */}
        {/* Header */}
        <View className='flex-row pb-3 items-center mx-4 space-x-2'>
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className='h-7 w-7 bg-gray-300 rounded-full'
          />

          <View className='flex-1'>
            <Text className='font-bold text-gray-400 text-xs'>
              Deliver Now!
              </Text>
            <Text className='font-bold text-xl'>
              Current Location
              <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
          </View>

          <UserIcon size={35} color="#00CCBB" />
        </View>

        {/* Search */}
        <View className='flex-row items-center space-x-2 pb-2 mx-4'>
          <View className='flex-row flex-1 space-x-2 p-3 bg-gray-200' >
            <MagnifyingGlassIcon color="darkgrey" size={20} />
            <TextInput placeholder='Restaurants and cuisines' keyboardType='default'></TextInput>
          </View>
          <AdjustmentsVerticalIcon color="#00CCBB" />
        </View>
        {/* Body */}
        <ScrollView 
        className="bg-gray-100" 
        contentContainerStyle={{
          paddingBottom: 100,
        }}>
          {/* Categories */}
            <Categories/>
          {/* Featured rows */}
            <FeaturedRow
              id="123"
              title="Featured"
              description="Paid placements from our partners"
            />
            <FeaturedRow
              id="1234"
              title="Tasty Discounts"
              description="Everyone's been enjoying these juicy discounts!"
            />
            <FeaturedRow
              id="12345"
              title="Offers near you"
              description="Why not support your local restaurant tonight!"
            />

        </ScrollView>
      {/* </Text> */}
    </SafeAreaView>
  )
}

export default HomeScreen