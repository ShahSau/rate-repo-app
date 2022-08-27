import { Text, View } from 'react-native'
import React from 'react'

const RepositoryItem = ({title, description,language,starts,forks,reviews,rating}) => {
  return (
    <View >
    <Text>Full Name: {title}</Text>
    <Text>Description: {description}</Text>
    <Text>Language: {language}</Text>
    <Text>Stars: {starts}</Text>
    <Text>Forks: {forks}</Text>
    <Text>Reviews: {reviews}</Text>
    <Text>Rating: {rating}</Text>
  </View>
  )
}

export default RepositoryItem

