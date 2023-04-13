import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image, Pressable } from "react-native";

const MyOffersScreen = () => {
  const navigation = useNavigation();
  const coinOffers = [{
    id: "1",
    title: "10% off on Bitcoin"
  }, {
    id: "2",
    title: "20% off on Ethereum"
  }, {
    id: "3",
    title: "15% off on Dogecoin"
  }, {
    id: "4",
    title: "5% off on Litecoin"
  }, {
    id: "5",
    title: "25% off on Ripple"
  }];

  const renderCoinOffer = ({
    item
  }) => <TouchableOpacity style={_styles.ZBjbKrgj}>
      <Image source={{
      uri: "https://static01.nyt.com/images/2017/10/29/business/29Coin4/29Coin4-superJumbo.jpg"
    }} style={_styles.JORrwtwR} />
      <Text style={_styles.UZsmjWKT}>{item.title}</Text>
    </TouchableOpacity>;

  return <View style={_styles.AJuMpbNO}>
      <FlatList data={coinOffers} renderItem={renderCoinOffer} keyExtractor={item => item.id} contentContainerStyle={{
      padding: 16
    }} />
      <View style={_styles.footer}>
        <TouchableOpacity style={_styles.footerButton}>
          <Pressable onPress={() => {
          navigation.navigate("ScreenAI12");
        }}><Image source={{
            uri: "https://static01.nyt.com/images/2017/10/29/business/29Coin4/29Coin4-superJumbo.jpg"
          }} style={_styles.footerIcon} /></Pressable>
          <Pressable onPress={() => {
          navigation.navigate("ScreenAI12");
        }}><Text style={_styles.footerText}>Home</Text></Pressable>
        </TouchableOpacity>
        <TouchableOpacity style={_styles.footerButton}>
          <Image source={{
          uri: "https://static01.nyt.com/images/2017/10/29/business/29Coin4/29Coin4-superJumbo.jpg"
        }} style={_styles.footerIcon} />
          <Pressable onPress={() => {
          navigation.navigate("ScreenAI13");
        }}>
            <Text style={_styles.footerText}>My Offers</Text>
          </Pressable>
        </TouchableOpacity>
        <TouchableOpacity style={_styles.footerButton}>
          <Pressable onPress={() => {
          navigation.navigate("profile");
        }}><Image source={{
            uri: "https://static01.nyt.com/images/2017/10/29/business/29Coin4/29Coin4-superJumbo.jpg"
          }} style={_styles.footerIcon} /></Pressable>
          <Pressable onPress={() => {
          navigation.navigate("profile");
        }}>
            <Text style={_styles.footerText}>Profile</Text>
          </Pressable>
        </TouchableOpacity>
      </View>
    </View>;
};

export default MyOffersScreen;

const _styles = StyleSheet.create({
  ZBjbKrgj: {
    flexDirection: "row",
    alignItems: "center",
    padding: 18
  },
  JORrwtwR: {
    width: 50,
    height: 50,
    marginRight: 16
  },
  UZsmjWKT: {
    fontSize: 18
  },
  AJuMpbNO: {
    flex: 1,
    backgroundColor: "#fff"
  },
  QDahqBny: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 16
  },
  GKuBhEtH: {
    width: 30,
    height: 30
  },
  JxJofnVA: {
    width: 30,
    height: 30
  },
  hpOsEfGw: {
    width: 30,
    height: 30
  },
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
    borderTopColor: "#ccc",
    position: "relative",
    width: 356
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