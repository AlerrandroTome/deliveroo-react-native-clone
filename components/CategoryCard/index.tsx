import React from "react";
import { Text, TouchableOpacity, Image, View } from "react-native";

interface CategoryCardProps {
    imgUrl: string;
    title: string;
}

const CategoryCard: React.FC<CategoryCardProps> =  ({ imgUrl, title }) => {
    return (
        <TouchableOpacity className="relative mr-2">
            <Image src={imgUrl} className="h-20 w-20 rounded" />
            <Text className="absolute bottom-0 w-20 text-white font-bold">{title}</Text>
        </TouchableOpacity>
    );
};

export default CategoryCard;