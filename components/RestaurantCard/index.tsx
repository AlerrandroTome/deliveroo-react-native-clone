import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface RestaurantCardProps {
    name: string;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ name }) => {
  return (
    <TouchableOpacity>
      <Text>{name}</Text>
    </TouchableOpacity>
  )
}

export default RestaurantCard