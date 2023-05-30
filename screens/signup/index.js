import { Pressable } from "react-native";
import React from "react";
import { Text, View, TouchableOpacity, StyleSheet, TextInput, TouchableHighlight } from "react-native";

const pressed = () => {
  console.log("pressed");
};

const Signup = ({
  navigation
}) => {
  return <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.headingText}>Sign up</Text>
      </View>
      <View>
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

        <View style={styles.loginContainer}>
          <Button onPress={pressed}>Sign up</Button>
        </View>
        
        <View style={styles.imageContainer}>
          
          
          
        </View>
      </View>
      <View style={styles.footerContainer}>
        
        <TouchableOpacity onPress={pressed}>
          <Pressable onPress={() => {
          navigation.navigate("login2");
        }}>
            <Text>Login</Text>
          </Pressable>
        </TouchableOpacity>
      </View>
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
    fontSize: 42,
    fontWeight: "500"
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
  loginContainer: {
    width: "80%",
    alignSelf: "center"
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "60%",
    alignSelf: "center",
    justifyContent: "space-between"
  },
  footerContainer: {
    alignSelf: "center",
    display: "flex",
    flexDirection: "row"
  }
});
export default Signup;

const Button = props => {
  return <TouchableHighlight onPress={props.onPress} underlayColor="#DDDDDD">
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
    </TouchableHighlight>;
};

const btnStyles = StyleSheet.create({
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    position: "absolute",
    left: 4,
    width: 250,
    top: 59
  },
  text: {
    fontWeight: "bold",
    fontSize: 15
  }
});

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