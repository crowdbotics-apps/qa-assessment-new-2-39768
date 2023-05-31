import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from "react-native";

const CoinCard = ({
  coinName
}) => {
  return <View style={styles.card}>
      <Text style={styles.coinName}>{coinName}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Accept</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Decline</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

const CoinsList = () => {
  const coins = [{
    id: "1",
    name: "Bitcoin"
  }, {
    id: "2",
    name: "Ethereum"
  }, {
    id: "3",
    name: "Litecoin"
  }, {
    id: "4",
    name: "Ripple"
  }, {
    id: "5",
    name: "Bitcoin Cash"
  }];

  const renderItem = ({
    item
  }) => <CoinCard coinName={item.name} />;

  return <FlatList data={coins} renderItem={renderItem} keyExtractor={item => item.id} contentContainerStyle={styles.listContainer} />;
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 20
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20
  },
  coinName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: "45%"
  },
  buttonText: {
    color: "#fff",
    textAlign: "center"
  }
});
export default CoinsList;