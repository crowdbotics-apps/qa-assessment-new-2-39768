import React from "react"; // @ts-ignore

import { createStackNavigator } from "@react-navigation/stack";
import ContactUs from "../screens/ContactUs";
const Stack = createStackNavigator();

const Navigator = () => {
  return <Stack.Navigator screenOptions={{
    headerStyle: {
      elevation: 0
    },
    cardStyle: {
      backgroundColor: "#fff"
    }
  }}>
    <Stack.Screen options={{
      headerShown: false
    }} name="ContactUs" component={ContactUs} />

  </Stack.Navigator>;
};

export default Navigator;