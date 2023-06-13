import { View, Text } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'

const FeaturedRow = (id, title, description) => {
  return (
    <View>
        <View>
            <Text>FeaturedRow</Text>
            <ArrowRightIcon/>
        </View>
    </View>
  )
}

export default FeaturedRow