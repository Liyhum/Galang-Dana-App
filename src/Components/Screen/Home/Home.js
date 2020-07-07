import React, { useRef, useEffect, useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { Styles } from "../../../Style/homeStyle";
import Carousel from "../../Carraousel/Carraousel";
import { dummyData } from "../../Carraousel/data";
import * as Progress from "react-native-progress";
import Data from "./Data.json";
import { HomeContext } from "../../../Context/HomeContext";


const Home = ({ navigation }) => {
  const [homeIdContext, setHomeIdContext] = React.useContext(HomeContext);
  const handleSetIdHome = (res) => {
    console.log("res id home", homeIdContext);
    setHomeIdContext(res.id);
  };
  const handle = ()=>{
    navigation.navigate("Artikel")
  }
  return (
    <ScrollView 
    showsVerticalScrollIndicator={false}
    >
      <View style={Styles.viewHome}>
        <View style={Styles.viewTextMP}>
          <Text style={Styles.text1}>Most Popular </Text>
        </View>
        <View>
          <Carousel data={dummyData} 
          route={()=>handle() }/>
        </View>
        <Text style={Styles.text1}>Most Recent</Text>
        <View style={Styles.viewCard}>
          {Data.Data.map((res) => (
            <View key={res.id} style={Styles.viewCard2}>
              <View style={Styles.viewText}>
                <Image
                  style={{ width: "100%", height: 100 }}
                  source={{
                    uri: res.img,
                  }}
                />
                <Text style={Styles.textTitle}>{res.title}</Text>
                <Progress.Bar
                  style={{ width: "90%" }}
                  color="green"
                  progress={0}
                  width={200}
                />
                <Text style={Styles.textDonate}>{res.donasi} </Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Artikel"), handleSetIdHome(res);
                  }}
                  style={Styles.btnDonate}
                >
                  <Text style={Styles.textDonate2}>Donate</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};
export default Home;
