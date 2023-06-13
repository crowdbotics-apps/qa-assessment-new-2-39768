import React, { useEffect, useState } from "react"
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
  Alert
} from "react-native"
import { useDispatch, useSelector } from "react-redux"
import {
  getCoins,
  makeOffer
} from "../../store/qaassessmentnewAPI/homescreen.slice"
import { BottomSheet } from "react-native-elements"
import { unwrapResult } from "@reduxjs/toolkit"

const Card = ({ item, navigation, modalState, setCoinDetails }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.text}>Quantity: {item.coin_quantity}</Text>
      <Text style={styles.text}>Spot Price: {item.price}</Text>
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
        <Text style={styles.price}>
          Between Price: {(item?.bid_premium_low + item?.bid_premium_high) / 2}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setCoinDetails(item)
          modalState(true)
        }}
      >
        <Text style={styles.buttonText}>Make me an offer</Text>
      </TouchableOpacity>
    </View>
  )
}

const MakeAnOffer = ({ navigation }) => {
  const dispatch = useDispatch()
  const state = useSelector(state => state.Homescreen.coinList.entities)

  useEffect(() => {
    dispatch(getCoins())
  }, [])

  const [visible, setVisible] = useState(false)
  const [quantity, setQuantity] = useState("")
  const [price, setPrice] = useState(false)
  const [coinDetails, setCoinDetails] = useState(false)

  const makeCoinOffer = () => {
    if (quantity < coinDetails.coin_quantity) {
      const data = {
        offer_price: price,
        quantity,
        coin: coinDetails.id,
        user: coinDetails.coin_user
      }
      
      dispatch(makeOffer(data))
        .then(unwrapResult)
        .then(() => {
          setVisible(false)
          reset()
          Alert.alert("Success", "Your offer has been sent!")
        })
    } else {
      Alert.alert(
        "Invalid value",
        "Quantity must not be greater than the available amount."
      )
    }
  }

  const reset = () => {
    setPrice("")
    setQuantity("")
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={state}
        renderItem={({ item }) => (
          <Card
            item={item}
            navigation={navigation}
            modalState={setVisible}
            setCoinDetails={setCoinDetails}
          />
        )}
        keyExtractor={item => item.id}
      />

      <BottomSheet isVisible={visible} containerStyle={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TextInput
            style={styles.input}
            placeholder="Quantity"
            value={quantity}
            onChangeText={text => setQuantity(text)}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="$ Price"
            value={price}
            onChangeText={text => setPrice(text)}
            keyboardType="numeric"
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[
                styles.button2,
                { opacity: quantity !== "" && price !== "" ? 1 : 0.6 }
              ]}
              onPress={() => makeCoinOffer()}
              disabled={quantity !== "" && price !== "" ? false : true}
            >
              <Text style={styles.buttonText}>Make Offer</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button2, styles.cancelButton]}
              onPress={() => {
                setVisible(false)
                reset()
              }}
            >
              <Text style={[styles.buttonText, { color: "#000" }]}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheet>
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
  },

  modalContainer: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    height: 350,
    paddingTop: 30
  },
  input: {
    height: 50,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderColor: "#ccc",
    borderWidth: 2,
    borderRadius: 10,
    marginVertical: 10
  },
  buttonContainer: {
    // flexDirection: "row",
    // justifyContent: "space-between",
    marginTop: 30
  },
  button2: {
    backgroundColor: "black",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16
  },
  cancelButton: {
    backgroundColor: "#fff",
    borderWidth: 2,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center"
  }
})
export default MakeAnOffer
