import React, { useEffect } from "react"
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList
} from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { getOffers } from "../../store/qaassessmentnewAPI/homescreen.slice"

const Card = ({ item, navigation }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.text}>Quantity: {item.quantity}</Text>
      <Text style={styles.text}>Spot Price: {item.spot_price}</Text>
      <Text style={styles.text}>
        Retail Price Range: {item.retailPriceRange}
      </Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>
          Lower End Price: {item.bid_premium_low}
        </Text>
        <Text style={styles.price}>
          Higher End Price: {item.bid_premium_high}
        </Text>
        <Text style={styles.price}>Between Price: {item.between_price}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Untitled20")}
      >
        <Text style={styles.buttonText}>Make me an offer</Text>
      </TouchableOpacity>
    </View>
  )
}

const MakeAnOffer = ({ navigation }) => {
  const dispatch = useDispatch()
  const state = useSelector(state => state.Homescreen.offerList.entities)

  useEffect(() => {
    dispatch(getOffers())
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={state}
        renderItem={({ item }) => <Card item={item} navigation={navigation} />}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 10,
    marginBottom: 100,
    paddingTop: 20
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    alignSelf: "center"
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    marginHorizontal: 5,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 10
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10
  },
  text: {
    fontSize: 16,
    marginBottom: 5
  },
  priceContainer: {
    // flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10
  },
  price: {
    fontSize: 16,
    lineHeight: 25
  },
  button: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 5,
    alignItems: "center"
  },
  buttonText: {
    color: "#fff",
    fontSize: 16
  }
})
export default MakeAnOffer
