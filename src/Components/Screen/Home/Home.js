import React, { useRef } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { Styles } from "../../../Style/homeStyle";
import Carousel from "../../Carraousel/Carraousel";
import { dummyData } from "../../Carraousel/data";
import * as Progress from "react-native-progress";
import Data from "./Data.json";

const Home = ({ navigation }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={Styles.viewHome}>
        <View style={Styles.viewTextMP}>
          <Text style={Styles.text1}>Most Popular</Text>
        </View>
        <View>
          <Carousel data={dummyData} />
        </View>
        <Text style={Styles.text1}>Most Recent</Text>
        <View style={Styles.viewCard}>
          {Data.Data.map((res) => (
            <View style={Styles.viewCard2}>
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
                  onPress={() => navigation.navigate("Artikel")}
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
