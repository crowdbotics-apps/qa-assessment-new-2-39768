import { Text } from "react-native";
import { View } from "react-native";
import { Image } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled15 = () => {
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }} style={styles.HqDmFSno}>
        <Image style={styles.OXBbRPHq} source={require("./investment-removebg-preview.png")} resizeMode="cover" />

        <View style={styles.spPczPac}>
          <Text style={styles.ZezLXuKD}>{"About Us"}</Text>
        </View>
      </ScrollView>
      <View style={styles.JuRsRqkK}>
        <Text style={styles.JjrHHKKm}>{"Terms and Conditions"}</Text>
      </View>
      <View style={styles.OHsigrkx}>
        <Text style={styles.tmOHRJWU}>{"Contact Us"}</Text>
      </View>
      <View style={styles.DXCaOeme}>
        <Text style={styles.zqrbQWem}>{"Privacy Policy"}</Text>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%",
    backgroundColor: "#ed2e2e"
  },
  OXBbRPHq: {
    width: 107,
    height: 102,
    position: "absolute",
    top: 92,
    left: 125
  },
  HqDmFSno: {
    backgroundColor: "#da3030"
  },
  spPczPac: {
    height: 60,
    width: 140,
    backgroundColor: "#173140",
    borderRadius: 10,
    color: "#777777",
    position: "absolute",
    top: 410,
    left: 29
  },
  ZezLXuKD: {
    width: 81,
    height: 20,
    lineHeight: 14,
    fontSize: 18,
    borderRadius: 0,
    position: "absolute",
    top: 23,
    left: 31,
    textAlign: "center",
    fontWeight: "700",
    color: "#fff",
    fontFamily: "inherit"
  },
  JuRsRqkK: {
    height: 60,
    width: 140,
    backgroundColor: "#173140",
    borderRadius: 10,
    color: "#777777",
    position: "absolute",
    top: 513,
    left: 27
  },
  JjrHHKKm: {
    width: 100,
    height: 38,
    lineHeight: 18,
    fontSize: 18,
    borderRadius: 0,
    position: "absolute",
    top: 12,
    left: 21,
    textAlign: "center",
    fontWeight: "700",
    color: "#fff",
    fontFamily: "inherit",
    letterSpacing: 0
  },
  OHsigrkx: {
    height: 60,
    width: 140,
    backgroundColor: "#173140",
    borderRadius: 10,
    color: "#777777",
    position: "absolute",
    top: 410,
    left: 190
  },
  tmOHRJWU: {
    width: 100,
    height: 16,
    lineHeight: 14,
    fontSize: 18,
    borderRadius: 0,
    position: "absolute",
    top: 22,
    left: 22,
    textAlign: "center",
    fontWeight: "700",
    color: "#fff",
    fontFamily: "inherit"
  },
  DXCaOeme: {
    height: 60,
    width: 140,
    backgroundColor: "#173140",
    borderRadius: 10,
    color: "#777777",
    position: "absolute",
    top: 512,
    left: 193
  },
  zqrbQWem: {
    width: 99,
    height: 42,
    lineHeight: 21,
    fontSize: 18,
    borderRadius: 0,
    position: "absolute",
    top: 7,
    left: 19,
    textAlign: "center",
    fontWeight: "700",
    color: "#fff",
    fontFamily: "inherit"
  }
});
export default Untitled15;