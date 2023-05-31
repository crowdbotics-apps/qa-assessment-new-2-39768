import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

const Card = () => {
  const data = [{
    id: "1",
    name: "Test Name 1",
    quantity: 3,
    price: 45
  }, {
    id: "2",
    name: "Test Name 2",
    quantity: 2,
    price: 30
  }, {
    id: "3",
    name: "Test Name 3",
    quantity: 1,
    price: 15
  }];

  const renderItem = ({
    item
  }) => <View style={styles.card}>
      <Text style={styles.name}>Name: {item.name}</Text>
      <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
      <Text style={styles.price}>Price per ounce: ${item.price}</Text>
    </View>;

  return <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id} contentContainerStyle={styles.scrollStyles} />;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  scrollStyles: {
    paddingVertical: 20
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10
  },
  quantity: {
    fontSize: 16,
    marginBottom: 5
  },
  price: {
    fontSize: 16
  }
});
export default Card;