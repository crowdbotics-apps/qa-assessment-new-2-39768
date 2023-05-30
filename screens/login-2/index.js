import { Pressable } from "react-native";
import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image, TextInput, StyleSheet } from "react-native";

const Login2 = ({
  navigation
}) => {
  const [selected, setSelected] = useState(false);

  const onPress = () => {
    setSelected(!selected);
  };

  return <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.headingText}>{"Login"}</Text>
      </View>
      <View>
        <View style={styles.emailContainer}>
          <Text style={styles.mr10}>Email address</Text>
          <Input placeholder="Email" />
        </View>
        <View style={styles.mb20}>
          <Text style={styles.mr10}>Password</Text>
          <Input placeholder="Password" />
        </View>
        <View style={styles.forgotPassword}>
          <View>
            <CheckBox onPress={onPress} selected={selected} text="Remember me" />
          </View>
          <TouchableOpacity>
            <Pressable onPress={() => {
            navigation.navigate("forgotPassword");
          }}>
              <Text>Forgot Password?</Text>
            </Pressable>
          </TouchableOpacity>
        </View>
        {
        /*         <View style={styles.loginContainer}>
                <Button>Log In</Button>
              </View> */
      }
      </View>
      <Pressable onPress={() => {
      navigation.navigate("signup");
    }}>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Do not have an account?</Text>
          <TouchableOpacity>
            <Pressable onPress={() => {
            navigation.navigate("signup");
          }}>
              <Text>Sign Up</Text>
            </Pressable>
          </TouchableOpacity>
        </View>
      </Pressable>
      <View style={styles.DUqwmwLc}>
        <Pressable>
          <Text style={styles.vkrKyqAb}>{"Login"}</Text>
        </Pressable>
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
    fontWeight: "500",
    position: "absolute",
    top: 43,
    left: -55
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
  forgotPassword: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40
  },
  footerContainer: {
    alignSelf: "center",
    display: "flex",
    flexDirection: "row"
  },
  footerText: {
    color: "#6B6B6B"
  },
  DUqwmwLc: {
    height: 54,
    width: 297,
    backgroundColor: "#000",
    borderRadius: 10,
    color: "#777777",
    position: "absolute",
    top: 464,
    left: 28
  },
  vkrKyqAb: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 18,
    borderRadius: 0,
    color: "#fff",
    fontWeight: "700",
    position: "absolute",
    top: 18,
    left: 123
  }
});
export default Login2;

const CheckBox = ({
  selected,
  onPress,
  text
}) => <TouchableOpacity onPress={onPress}>
    <View style={checkBoxStyles.checkBoxContainer}>
      <View style={checkBoxStyles.iconContainer}>
        {selected && <Image source={require("./assets/checkbox.png")} style={checkBoxStyles.icon} />}
      </View>
      <Text style={checkBoxStyles.iconText}>{text}</Text>
    </View>
  </TouchableOpacity>;

const checkBoxStyles = StyleSheet.create({
  checkBoxContainer: {
    display: "flex",
    flexDirection: "row"
  },
  iconContainer: {
    height: 18,
    width: 18,
    borderColor: "#000000",
    borderWidth: 2,
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    height: 16,
    width: 16
  },
  iconText: {
    marginLeft: 10
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