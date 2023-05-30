import { Pressable } from "react-native";
import { CheckBox } from "react-native-elements";
import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

const Signup = ({
  navigation
}) => {
  return <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.headingText}>Sign up</Text>
      </View>
      <View style={styles.uDZvAxRY}>
        <View style={styles.emailContainer}>
          <Text style={styles.mr10}>Email address</Text>
          <Input placeholder="Email" />
        </View>
        <View style={styles.mb20}>
          <Text style={styles.mr10}>Password</Text>
          <Input placeholder="Enter" />
        </View>
        <View style={styles.mb20}>
          <Text style={styles.mr10}>Confirm password</Text>
          <Input placeholder="Enter" />
        </View>

        {
        /*         <View style={styles.loginContainer}>
             <Button onPress={pressed}>Sign up</Button>
           </View> */
      }
      </View>

      <View style={styles.tCjtGqjL}>
        <CheckBox style={styles.kEMCBHUe} />
        <Text style={styles.hXvAkQpN}>
          {"I have read Terms and Conditions and Privacy Policy"}
        </Text>
      </View>

      {
      /*       <View style={styles.footerContainer}>
        <TouchableOpacity onPress={pressed}></TouchableOpacity>
      </View> */
    }
      <View style={styles.BxjDSoZM}>
        <Pressable onPress={() => {
        navigation.navigate("login2");
      }}>
          <Text style={styles.nHIHOBof}>{"Sign Up"}</Text>
        </Pressable>
      </View>

      <Pressable style={styles.qXIwXffk} onPress={() => navigation.navigate("login2")}>
      <Text>{"Already have an account? Login."}</Text>
      </Pressable>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    backgroundColor: "#fff"
  },
  heading: {
    alignSelf: "center"
  },
  headingText: {
    fontSize: 45,
    fontWeight: "500",
    position: "absolute",
    top: 27,
    left: -100,
    width: 204,
    height: 32,
    textAlign: "center"
  },
  emailContainer: {
    marginBottom: 10
  },
  mr10: {
    marginRight: 10,
    marginBottom: 10
  },
  mb20: {
    marginBottom: 20
  },
  kEMCBHUe: {
    width: 15,
    height: 15
  },
  tCjtGqjL: {
    height: 35,
    marginVerical: 20,
    position: "absolute",
    width: 250,
    left: 8,
    top: 413
  },
  uDZvAxRY: {
    position: "absolute",
    left: 25,
    top: 163,
    width: 301,
    height: 257
  },
  hXvAkQpN: {
    width: 253,
    height: 50,
    lineHeight: 16,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    top: 18,
    left: 52
  },
  BxjDSoZM: {
    height: 54,
    width: 297,
    backgroundColor: "#000",
    borderRadius: 10,
    color: "#777777",
    position: "absolute",
    top: 499,
    left: 28
  },
  nHIHOBof: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 18,
    borderRadius: 0,
    color: "#fff",
    fontWeight: "700",
    position: "absolute",
    top: 17,
    left: 110
  },
  qXIwXffk: {
    width: 239,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    top: 594,
    left: 73
  }
});
export default Signup;

const Input = props => {
  return <View>
      <TextInput style={textStyles.input} placeholder={props.placeholder} value={props.value} onChangeText={num => props.setValue(num)} placeholderTextColor="#ddd" editable={props.editable !== false} />
      {props.errorText ? <Text style={textStyles.error}>{props.errorText}</Text> : null}
    </View>;
};

const textStyles = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
    height: 53,
    borderColor: "#C4C4C4",
    color: "#000",
    borderRadius: 10,
    fontSize: 14,
    borderWidth: 1,
    paddingHorizontal: 10
  },
  error: {
    fontSize: 13,
    color: "#FA060D",
    paddingTop: 8
  }
});