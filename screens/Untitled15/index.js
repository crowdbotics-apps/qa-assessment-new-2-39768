import { Pressable } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { Image } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled15 = ({
  navigation
}) => {
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

      <View style={styles.KBZeTCNN}>
        <Pressable onPress={() => {
        navigation.navigate("signup");
      }}>
          <Text style={styles.dFwnCtGs}>{"Sign In / Sign Up"}</Text>
        </Pressable>
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
    top: 386,
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
    top: 475,
    left: 31
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
    top: 387,
    left: 191
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
    top: 475,
    left: 190
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
  },
  XoNJtAdd: {
    height: 60,
    width: 300,
    backgroundColor: "#173140",
    borderRadius: 10,
    color: "#777777",
    position: "absolute",
    top: 555,
    left: 33
  },
  SKCZdFqh: {
    width: 150,
    height: 42,
    lineHeight: 21,
    fontSize: 18,
    borderRadius: 0,
    position: "absolute",
    top: 20,
    left: 78,
    textAlign: "center",
    fontWeight: "700",
    color: "#fff",
    fontFamily: "inherit"
  },
  KBZeTCNN: {
    height: 60,
    width: 300,
    backgroundColor: "#173140",
    borderRadius: 10,
    color: "#777777",
    position: "absolute",
    top: 552,
    left: 31
  },
  dFwnCtGs: {
    width: 159,
    height: 42,
    lineHeight: 21,
    fontSize: 18,
    borderRadius: 0,
    position: "absolute",
    top: 19,
    left: 70,
    textAlign: "center",
    fontWeight: "700",
    color: "#fff",
    fontFamily: "inherit"
  }
});
export default Untitled15;