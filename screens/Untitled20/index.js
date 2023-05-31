import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Image } from "react-native";

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

  return <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>My Offers</Text>
        <View style={styles.ayMotHta}></View>
      </View>
      <FlatList data={coins} renderItem={renderItem} keyExtractor={item => item.id} contentContainerStyle={styles.listContainer} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold"
  },
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
  },
  ayMotHta: {
    width: 24
  }
});
export default CoinsList;