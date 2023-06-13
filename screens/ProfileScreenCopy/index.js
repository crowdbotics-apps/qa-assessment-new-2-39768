import {
  ActivityIndicator,
  Alert,
  Pressable,
  TouchableOpacity
} from "react-native"
import React, { useEffect, useState } from "react"
import { ScrollView, Text, View, StyleSheet, TextInput } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { updateProfile } from "../../store/qaassessmentnewAPI/homescreen.slice"
import { unwrapResult } from "@reduxjs/toolkit"

const Profile = ({ navigation }) => {
  const userDetails = useSelector(
    state => state.Homescreen.userDetails.entities
  )
  const loading = useSelector(
    state => state.Homescreen.updateProfile.api.loading
  )
  const dispatch = useDispatch()

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [dateOfBirth, setDateOfBirth] = useState("")
  const [address, setAddress] = useState("")
  const [zipcode, setZipcode] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [emptyVariables, setEmptyVariables] = useState([])

  // function addForwardSlash(input) {
  //   if (input.length > 0) {
  //     const digitsOnly = input.replace(/\//g, "")
  //     const chunks = digitsOnly.match(/.{1,2}/g)
  //     const result = chunks.join("/")
  //     setDateOfBirth(result)
  //   } else {
  //     setDateOfBirth("")
  //   }
  // }

  function checkEmptyVariables() {
    const vars = []
    for (let i = 0; i < arguments.length; i++) {
      const variable = arguments[i]
      if (!variable) {
        const variableName = `var${i + 1}`
        vars.push(variableName)
      }
    }

    if (vars.length === 0) {
      const data = {
        user: userDetails.user,
        first_name: firstName,
        last_name: lastName,
        email: userDetails.email,
        date_of_birth: dateOfBirth,
        address: address,
        city: city,
        state: state,
        zip_code: zipcode,
        country: "US"
      }
      dispatch(updateProfile(data))
        .then(unwrapResult)
        .then(() => {
          navigation.goBack()
          Alert.alert("Profile updated successfully!")
        })
    } else {
      setEmptyVariables(vars)
      Alert.alert("Please fill all fields")
    }
  }

  useEffect(() => {
    if (userDetails) {
      setFirstName(userDetails?.first_name)
      setLastName(userDetails?.last_name)
      setDateOfBirth(userDetails?.date_of_birth)
      setAddress(userDetails?.address)
      setZipcode(userDetails?.zip_code)
      setCity(userDetails?.city)
      setState(userDetails?.state)
    }
  }, [])

  const onPress = () => {
    checkEmptyVariables(
      firstName,
      lastName,
      dateOfBirth,
      address,
      zipcode,
      city,
      state
    )
  }

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <Text style={styles.heading}>Edit Profile</Text>
        <View style={styles.mainBody}>
          <View style={styles.mt15}>
            <Text style={styles.textLabel}>First Name</Text>
            <Input
              placeholder="Test"
              setValue={setFirstName}
              errorText={emptyVariables.includes("var1")}
              value={firstName}
            />
          </View>
          <View style={styles.mt15}>
            <Text style={styles.textLabel}>Last Name</Text>
            <Input
              placeholder="User"
              setValue={setLastName}
              errorText={emptyVariables.includes("var2")}
              value={lastName}
            />
          </View>
          <View style={styles.mt15}>
            <Text style={styles.textLabel}>Date of Birth</Text>
            <Input
              placeholder="YYYY-MM-DD"
              setValue={setDateOfBirth}
              value={dateOfBirth}
              maxLength={10}
              errorText={emptyVariables.includes("var3")}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.mt15}>
            <Text style={styles.textLabel}>Email</Text>
            <Input editable={false} value={userDetails.email} />
          </View>
          <View style={styles.mt15}>
            <Text style={styles.textLabel}>Address</Text>
            <Input
              placeholder="Address"
              setValue={setAddress}
              errorText={emptyVariables.includes("var4")}
              value={address}
            />
          </View>
          <View style={styles.mt15}>
            <Text style={styles.textLabel}>Zip code</Text>
            <Input
              placeholder="Zip code"
              setValue={setZipcode}
              errorText={emptyVariables.includes("var5")}
              value={zipcode}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.mt15}>
            <Text style={styles.textLabel}>City</Text>
            <Input
              placeholder="City name"
              setValue={setCity}
              errorText={emptyVariables.includes("var6")}
              value={city}
            />
          </View>

          <View style={styles.mt15}>
            <Text style={styles.textLabel}>State</Text>
            <Input
              placeholder="Name of state"
              setValue={setState}
              errorText={emptyVariables.includes("var7")}
              value={state}
            />
          </View>
        </View>
        <View style={styles.btnSave}>
          <TouchableOpacity onPress={() => onPress()} style={btnStyles.button}>
            {loading === "pending" ? (
              <ActivityIndicator color={"#fff"} size={"large"} />
            ) : (
              <Text style={btnStyles.text}>Update</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    backgroundColor: "#FFF"
  },
  heading: {
    fontSize: 48,
    fontWeight: "bold",
    marginBottom: 66,
    marginTop: 20,
    textAlign: "center"
  },
  mt15: {
    marginTop: 15
  },
  textLabel: {
    fontSize: 14,
    marginLeft: 15,
    marginBottom: 5,
    fontWeight: "bold"
  },
  mainBody: {
    // height: '60%'
  },
  btnSave: {
    display: "flex",
    alignSelf: "center",
    marginTop: 50,
    width: "80%"
  }
})
export default Profile

const btnStyles = StyleSheet.create({
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    height: 50,
    borderRadius: 10
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#fff"
  }
})

const Input = props => {
  return (
    <View>
      <TextInput
        style={inputStyles.input}
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={num => props.setValue(num)}
        placeholderTextColor="#d3d3d3"
        editable={props.editable}
        maxLength={props.maxLength}
        keyboardType={props.keyboardType}
      />
      {props.errorText ? (
        <Text style={inputStyles.error}>
          {props.errorText && "*This field is required."}
        </Text>
      ) : null}
    </View>
  )
}

const inputStyles = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
    height: 53,
    borderColor: "#C4C4C4",
    color: "#000",
    borderRadius: 10,
    fontSize: 14,
    borderWidth: 1,
    paddingHorizontal: 15
  },
  error: {
    fontSize: 13,
    color: "#FA060D",
    paddingTop: 8,
    marginLeft: 10
  }
})
