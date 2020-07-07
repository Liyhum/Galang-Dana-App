import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Styles } from "../../Style/caraouselItemStyle";
import * as Progress from "react-native-progress";
import { HomeContext } from "../../Context/HomeContext";

const CaraouselItem = ({ item, Navigation }) => {
  const [homeIdContext, setHomeIdContext] = React.useContext(HomeContext);

  const handleSetIdHome = (item) => {
    setHomeIdContext(item.id);
  };

  return (
    <TouchableOpacity
      onPress={() => {
        Navigation.navigate("Artikel"), handleSetIdHome(item);
      }}
    >
      <View style={Styles.cardView}>
        <Image style={Styles.image} source={{ uri: item.url }} />

        <View style={Styles.textView}>
          <Text style={Styles.itemTitle}> {item.title}</Text>
          <Progress.Bar color="green" progress={0.8} width={200} />
          <Text style={Styles.itemDescription}>{item.desc}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CaraouselItem;
