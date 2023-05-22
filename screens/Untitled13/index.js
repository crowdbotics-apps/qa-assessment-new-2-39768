import { useState } from "react";
import { useSelector } from "react-redux";
import { TextInput } from "react-native";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled13 = () => {
  const {
    entities: User
  } = useSelector(state => state.User);
  const [localEmail, setLocalEmail] = useState(User.email);
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <TextInput style={styles.tHaWKQeZ} value={localEmail}></TextInput>
      <TextInput style={styles.ynmokZxg} value={User.password}></TextInput></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  },
  tHaWKQeZ: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  },
  ynmokZxg: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  }
});
export default Untitled13;