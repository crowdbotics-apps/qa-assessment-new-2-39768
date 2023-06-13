import React, { useEffect } from "react"
import { StyleSheet, View, Text, FlatList, Pressable } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { getUserRequests } from "../../store/qaassessmentnewAPI/homescreen.slice"

const CoinCard = ({ coinName }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.coinName}>{coinName}</Text>
      <View style={styles.buttonsContainer}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Accept</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Decline</Text>
        </Pressable>
      </View>
    </View>
  )
}

const CoinsList = () => {
  const dispatch = useDispatch()
  const state = useSelector(state => state.Homescreen.userRequestList.entities)

  useEffect(() => {
    dispatch(getUserRequests())
  }, [])

  const renderItem = ({ item }) => <CoinCard coinName={item.name} />

  return (
    <View style={styles.container}>
      <FlatList
        data={state}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
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
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: "45%"
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700"
  },
  ayMotHta: {
    width: 24
  },
  gMdEanPl: {
    width: 35,
    height: 38,
    marginRight: 90
  }
})
export default CoinsList
