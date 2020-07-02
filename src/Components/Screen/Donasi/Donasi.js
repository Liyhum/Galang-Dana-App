import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import Data from "./Data.json";

const Donasi = () => {
  return (
    <ScrollView>
      <View style={{ margin: 5 }}>
        {Data.Data.map((res) => (
          <TouchableOpacity>
            <View
              key={res.id}
              style={{
                flexDirection: "row",
                backgroundColor: "white",
                padding: "4%",
                marginTop: "1%",
              }}
            >
              <Image
                style={{ width: 30, height: 30 }}
                source={{ uri: res.img }}
              />
              <Text
                style={{
                  marginLeft: "5%",
                  color: "#4A5566",
                  fontFamily: "OpenSans_600SemiBold",
                  marginTop: "2%",
                }}
              >
                {res.title}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
        <View style={{ height: "100%" }}></View>
      </View>
    </ScrollView>
  );
};

export default Donasi;
