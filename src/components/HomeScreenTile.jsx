import { View, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const HomeScreenTile = ({ tileTitle, icon }) => {
  return (
    <LinearGradient
      colors={["#1C1C1E", "#212124"]}
      start={[0, 0]}
      end={[1, 0]}
      style={{ borderRadius: 24 }}
    >
      <View className="aspect-square p-4">
        <View className="flex flex-row items-center justify-between">
          <Text className="text-white font-bold text-center">{tileTitle}</Text>
          <MaterialIcons name="navigate-next" size={24} color={"#EB7363"} />
        </View>
        <Text>
          <View className="flex-1 items-center justify-center">{icon}</View>
        </Text>
      </View>
    </LinearGradient>
  );
};

export default HomeScreenTile;
