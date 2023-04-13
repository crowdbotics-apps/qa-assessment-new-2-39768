import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const HomeScreen = () => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome to Coin Offer</Text>
      </View>
      <View style={styles.content}>
        <Image source={require("../assets/home-image.png")} style={styles.image} />
        <Text style={styles.contentText}>
          Explore our coin offers and find the best deals for you!
        </Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Image source={require("../assets/home-icon.png")} style={styles.footerIcon} />
          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Image source={require("../assets/offers-icon.png")} style={styles.footerIcon} />
          <Text style={styles.footerText}>My Offers</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Image source={require("../assets/profile-icon.png")} style={styles.footerIcon} />
          <Text style={styles.footerText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    height: 80,
    backgroundColor: "#f4511e",
    justifyContent: "center",
    alignItems: "center"
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff"
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  contentText: {
    fontSize: 18,
    color: "#333",
    textAlign: "center",
    paddingHorizontal: 20
  },
  footer: {
    height: 80,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#ccc"
  },
  footerButton: {
    justifyContent: "center",
    alignItems: "center"
  },
  footerIcon: {
    width: 30,
    height: 30,
    marginBottom: 5
  },
  footerText: {
    fontSize: 12,
    color: "#333"
  }
});
export default HomeScreen;