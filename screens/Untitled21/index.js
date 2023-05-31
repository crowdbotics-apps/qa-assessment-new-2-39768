import React from "react";
import { StyleSheet, ScrollView, SafeAreaView, View, Image, Text, Pressable } from "react-native";

const Untitled21 = ({
  navigation
}) => {
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <View style={styles.tabContainer}>
          <Pressable onPress={() => {
          navigation.navigate("Untitled17");
        }} style={styles.tab}>
            <Image style={styles.mzYtvhsR} source={require("./icons8-coins-50.png")} />
            <Text style={styles.bottomText}>Spot price</Text>
          </Pressable>
          <Pressable onPress={() => {
          navigation.navigate("Untitled18");
        }} style={styles.tab}>
            <Image style={styles.mzYtvhsR} source={require("./icons8-coins-50.png")} />
            <Text style={styles.bottomText}>Retail Value</Text>
          </Pressable>
          <Pressable onPress={() => {
          navigation.navigate("Untitled19");
        }} style={styles.tab}>
            <Image style={styles.mzYtvhsR} source={require("./icons8-coins-50.png")} />
            <Text style={styles.bottomText}>Make offer</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 15,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0
  },
  bottomText: {
    marginTop: 5
  },
  tab: {
    flex: 1,
    alignItems: "center"
  },
  mzYtvhsR: {
    width: 42,
    height: 42
  }
});
export default Untitled21;