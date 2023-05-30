import { Pressable } from "react-native";
import React from "react";
import { ScrollView, Text, View, StyleSheet, TouchableHighlight } from "react-native";

const pressed = () => {
  console.log("pressed");
};

const Profile = ({
  navigation
}) => {
  return <ScrollView style={styles.tfTVXojR}>
      <View style={styles.mainContainer}>
        <View style={styles.btnSave}>
          <Button onPress={pressed} height={49}>
            Edit Profile
          </Button>
        </View>
      </View>

      <View style={styles.SdRjwfTN}>
        <Text style={styles.MiqDiFzk}>{"Full Name"}</Text>
        <View style={styles.UnhjSBVC}>
          <Text style={styles.niqwKWtr}>{"Full Name"}</Text>
        </View>
      </View>

      <Text style={styles.yPmeXPji}>{"Email "}</Text>
      <View style={styles.YNBGZvWa}>
        <Text style={styles.sMCYPuBL}>{"example@test.com"}</Text>
      </View>
    </ScrollView>;
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    backgroundColor: "#FFF"
  },
  btnSave: {
    display: "flex",
    alignSelf: "center",
    marginTop: 50,
    width: "80%",
    position: "absolute",
    top: 500
  },
  MiqDiFzk: {
    width: 100,
    height: 22,
    lineHeight: 14,
    fontSize: 16,
    borderRadius: 0,
    position: "absolute",
    top: 46,
    left: 49,
    fontWeight: "700"
  },
  UnhjSBVC: {
    height: 60,
    width: 268,
    backgroundColor: "#E4E4E4",
    borderRadius: 10,
    color: "#777777",
    position: "absolute",
    top: 78,
    left: 43
  },
  niqwKWtr: {
    width: 232,
    height: 30,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    top: 19,
    left: 19,
    color: "#5A5A5A"
  },
  SdRjwfTN: {
    width: 356,
    height: 204,
    position: "absolute",
    left: 0,
    top: 38
  },
  yPmeXPji: {
    width: 100,
    height: 19,
    lineHeight: 14,
    fontSize: 16,
    borderRadius: 0,
    position: "absolute",
    top: 190,
    left: 45,
    fontWeight: "700"
  },
  YNBGZvWa: {
    height: 60,
    width: 268,
    backgroundColor: "#E4E4E4",
    borderRadius: 10,
    color: "#777777",
    position: "absolute",
    top: 223,
    left: 43
  },
  sMCYPuBL: {
    width: 232,
    height: 30,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    top: 19,
    left: 19,
    color: "#5A5A5A"
  },
  tfTVXojR: {}
});
export default Profile;

const Button = props => {
  return <TouchableHighlight onPress={props.onPress} underlayColor="#DDDDDD">
      <Pressable onPress={() => {
      navigation.navigate("ProfileScreenCopy");
    }}>
        <View style={[btnStyles.button, {
        backgroundColor: props.backgroundColor ? props.backgroundColor : "#000000",
        height: props.height ? props.height : 49,
        borderWidth: props.borderWidth ? props.borderWidth : 0,
        borderColor: props.borderColor ? props.borderColor : "#000000"
      }]}>
          <Text style={[btnStyles.text, {
          color: props.color ? props.color : "#ffffff"
        }]}>
            {props.children}
          </Text>
        </View>
      </Pressable>
    </TouchableHighlight>;
};

const btnStyles = StyleSheet.create({
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    position: "relative",
    top: 0,
    left: 5,
    width: 263,
    height: 49
  },
  text: {
    fontWeight: "bold",
    fontSize: 15
  }
});