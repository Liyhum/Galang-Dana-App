import React from "react";
import { View, Text, Image, Dimensions } from "react-native";
import { Styles } from "../../Style/caraouselItemStyle";
import * as Progress from "react-native-progress";

const CaraouselItem = ({ item }) => {
  return (
    <View style={Styles.cardView}>
      <Image style={Styles.image} source={{ uri: item.url }} />

      <View style={Styles.textView}>
        <Text style={Styles.itemTitle}> {item.title}</Text>
        <Progress.Bar color="green" progress={0.8} width={200} />
        <Text style={Styles.itemDescription}>{item.desc}</Text>
      </View>
    </View>
  );
};

export default CaraouselItem;
