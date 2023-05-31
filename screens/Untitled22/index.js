import React from "react";
import { StyleSheet, ScrollView, SafeAreaView, View, Text, TextInput, Pressable } from "react-native";

const SignupScreen = () => {
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#FFF",
      padding: 20,
      position: "relative",
      flex: 1
    }}>
        <View style={styles.container}>
          <Text style={styles.heading}>Sign Up</Text>
          <TextInput style={styles.input} placeholder="Email" />
          <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
          <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry={true} />
          <View style={styles.checkboxContainer}>
            <Pressable style={styles.checkbox}></Pressable>
            <Text style={styles.checkboxText}>
              I have read and agree to the Terms and Conditions
            </Text>
          </View>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Signup</Text>
          </Pressable>
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Already have an account?</Text>
            <Pressable style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Login</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff"
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 50,
    textAlign: "center"
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    paddingLeft: 20,
    marginVertical: 10,
    fontSize: 16
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#000",
    marginRight: 10
  },
  checkboxText: {
    fontSize: 16
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#000",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20
  },
  buttonText: {
    color: "#fFff",
    fontSize: 18,
    fontWeight: "bold"
  },
  loginContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  loginText: {
    color: "#000",
    fontSize: 16
  },
  loginButton: {
    marginLeft: 5
  },
  loginButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold"
  }
});
export default SignupScreen;