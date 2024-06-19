import React from 'react'
import { View, Text, ScrollView } from 'react-native';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from '../RestaurantCard';

interface FeaturedRowProps {
    id: string;
    title: string;
    description: string;
}

const FeaturedRow: React.FC<FeaturedRowProps> = ({ id, title, description }) => {
    return (
        <View>
            <View className="m-4 flex-row items-center justify-between px-4">
                <Text className="font-bold text-lg" >{title}</Text>
                <ArrowRightIcon color="#00CCBB" />
            </View>

            <Text className="text-xs text-gray-500 px-4">{description}</Text>
            <ScrollView horizontal contentContainerStyle={{paddingHorizontal: 15}} showsHorizontalScrollIndicator={false} className="pt-4" >
                <RestaurantCard name="restaurant 1" />
                <RestaurantCard name="restaurant 2" />
                <RestaurantCard name="restaurant 3" />
                <RestaurantCard name="restaurant 4" />
                <RestaurantCard name="restaurant 5" />
                <RestaurantCard name="restaurant 6" />
            </ScrollView>
        </View>
    );
};

export default FeaturedRow;