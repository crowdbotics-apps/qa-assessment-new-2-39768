import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { StyleSheet } from "react-native";
import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";

const MyOffersScreen = () => {
  const navigation = useNavigation();
  const coinOffers = [{
    id: "1",
    title: "10% off on Bitcoin",
    image: require("../assets/bitcoin.png")
  }, {
    id: "2",
    title: "20% off on Ethereum",
    image: require("../assets/ethereum.png")
  }, {
    id: "3",
    title: "15% off on Dogecoin",
    image: require("../assets/dogecoin.png")
  }, {
    id: "4",
    title: "5% off on Litecoin",
    image: require("../assets/litecoin.png")
  }, {
    id: "5",
    title: "25% off on Ripple",
    image: require("../assets/ripple.png")
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
      <View style={_styles.QDahqBny}>
        <TouchableOpacity>
          <Image source={require("../assets/home.png")} style={_styles.GKuBhEtH} />
          <Pressable onPress={() => {
          navigation.navigate("ScreenAI12");
        }}><Text style={_styles.UZsmjWKT}>Home</Text></Pressable>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../assets/my_offers.png")} style={_styles.JxJofnVA} />
          <Text style={_styles.UZsmjWKT}>My Offers</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../assets/profile.png")} style={_styles.hpOsEfGw} />
          <Pressable onPress={() => {
          navigation.navigate("profile");
        }}><Text style={_styles.UZsmjWKT}>Profile</Text></Pressable>
        </TouchableOpacity>
      </View>
    </View>;
};

export default MyOffersScreen;

const _styles = StyleSheet.create({
  ZBjbKrgj: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16
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
  }
});