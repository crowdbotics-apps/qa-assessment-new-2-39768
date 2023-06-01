import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const Login2 = ({
  navigation
}) => {
  return <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.signupButton}>Signup.</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  input: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10
  },
  forgotPassword: {
    marginTop: 10,
    color: "blue"
  },
  loginButton: {
    backgroundColor: "black",
    width: "80%",
    height: 50,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20
  },
  loginButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold"
  },
  signupContainer: {
    flexDirection: "row",
    marginTop: 20
  },
  signupText: {
    fontSize: 16
  },
  signupButton: {
    fontSize: 16,
    fontWeight: "bold",
    color: "blue"
  }
});
export default Login2;