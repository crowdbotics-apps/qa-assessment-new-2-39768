import { api_v1_login_create } from "../../store/qaassessmentnewAPI/authTokens.slice.js";
import { useDispatch } from "react-redux";
import { Pressable } from "react-native";
import { View } from "react-native";
import { useState } from "react";
import { useSelector } from "react-redux";
import { TextInput } from "react-native";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled13 = () => {
  const dispatch = useDispatch();
  const {
    entities: UserProfile
  } = useSelector(state => state.UserProfile);
  const {
    entities: User
  } = useSelector(state => state.User);
  const [localEmail, setLocalEmail] = useState(User.email);
  const [localPassword2, setLocalPassword2] = useState(UserProfile.password2);
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <TextInput style={styles.tHaWKQeZ} value={localEmail}></TextInput>
        <TextInput style={styles.ynmokZxg} value={User.password}></TextInput>
        <TextInput style={styles.KfPbPgIj} value={localPassword2}></TextInput>
        <Pressable onPress={onSubmit}>
          <View style={styles.KnFEXUvo}></View>
        </Pressable>
      </ScrollView>
    </SafeAreaView>;

  const onSubmit = () => {
    dispatch(api_v1_login_create({
      localEmail,
      localPassword2
    }));
  };
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
  },
  KfPbPgIj: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  },
  KnFEXUvo: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  }
});
export default Untitled13;