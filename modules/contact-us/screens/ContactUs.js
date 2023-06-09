import React, { useContext } from "react"
import { Text, View, Image, StyleSheet } from "react-native" // @ts-ignore

import emailIcon from "../emailIcon.png"
import { OptionsContext } from "@options"

const ContactUs = props => {
  const options = useContext(OptionsContext)
  return (
    <View style={styles.pt30}>
      <Text style={styles.YsOxQmMo}>
        Test Test Test Test Test Test Test Test Test Test Test Test Test Test
        Test Test Test Test Test Test Test Test Test Test Test Test Test Test
        Test Test Test Test Test Test Test Test Test Test Test Test Test Test
        Test Test Test Test Test Test Test Test Test Test Test Test Test Test
        Test Test Test Test Test Test Test Test Test Test Test Test Test Test
        Test Test Test Test Test Test Test Test Test Test Test Test Test Test
        Test Test Test Test Test Test Test Test Test Test Test Test Test Test
        Test Test Test Test Test Test Test Test Test Test Test Test Test Test
        Test Test Test Test Test Test Test Test Test Test Test{" "}
      </Text>
      <View style={styles.email}>
        <View style={styles.mr15}>
          <Image source={emailIcon} style={styles.image} />
        </View>
        <View>
          <Text style={styles.text}>{options.email}</Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Image source={require("../phone.png")} style={styles.phoneImage} />
        <Text style={styles.infoText}>+1 111 111 1111</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  email: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 30
  },
  phoneImage: {
    height: 27,
    width: 27
  },
  pt30: {
    padding: 30
  },
  image: {
    height: 20,
    width: 25
  },
  mr15: {
    marginRight: 15
  },
  text: {
    color: "#284752",
    fontSize: 15
  },
  YsOxQmMo: {
    fontSize: 15
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  infoText: {
    fontSize: 14,
    marginLeft: 15
  }
})
export default ContactUs
