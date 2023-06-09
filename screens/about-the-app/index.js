import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, SafeAreaView } from "react-native";

const AboutTheAppScreen = ({
  navigation
}) => {
  const [ImageSource, setImageSource] = useState();
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  useEffect(() => {
    setText1("I understand that uses my dolor sit amet, consectetur adipiscing elit. Viverra auctor laoreet sodales congue sit volutpat quisque. Mattis nisl in convallis sed et. Est turpis aliquam est, ut mattis nisi, amet feugiat. Aliquet odio consequat, nisl mauris ullamcorper malesuada velit sem dolor. Dui morbi porttitor integer felis, pellentesque quam. Et accumsan justo, massa tincidunt arcu fermentum est. Sed nibh id vel, diam ut feugiat nec, placerat mauris. Neque lorem netus lacinia elit est libero sed. Commodo viverra et, neque augue augue mauris, nunc ut nec.");
    setText2("I understand that uses my dolor sit amet, consectetur adipiscing elit. Viverra auctor laoreet sodales congue sit volutpat quisque. Mattis nisl in convallis sed et. Est turpis aliquam est, ut mattis nisi, amet feugiat. Aliquet odio consequat, nisl mauris ullamcorper malesuada velit sem dolor. Dui morbi porttitor integer felis, pellentesque quam. Et accumsan justo, massa tincidunt arcu fermentum est. Sed nibh id vel, diam ut feugiat nec, placerat mauris. Neque lorem netus lacinia elit est libero sed. Commodo viverra et, neque augue augue mauris, nunc ut nec.");
  }, []);
  return <SafeAreaView style={styles.container}>
      <View style={styles.imgScroller}>

      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text1}</Text>
        <Text style={styles.text}>{text2}</Text>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#fff"
  },
  rgVPtOhG: {
    position: "absolute",
    left: 0,
    top: -8
  },
  imgScroller: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20
  },
  threeDots: {
    marginTop: 20
  },
  textContainer: {
    paddingHorizontal: 20
  },
  text: {
    fontSize: 14,
    textAlign: "justify",
    lineHeight: 18,
    marginVertical: 10
  },
  rgVPtOhF: {
    width: 38,
    height: 35
  },
  DgLOWoTe: {
    width: 100,
    height: 32,
    lineHeight: 14,
    fontSize: 20,
    borderRadius: 0,
    position: "absolute",
    top: 16,
    left: 133,
    fontWeight: "700"
  }
});
export default AboutTheAppScreen;