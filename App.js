import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import Inputs from "./src/components/input";
import Buttons from "./src/components/button";

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.mainView}>
          <View>
            <View>
              <Text style={styles.headingSignUp}> Sign-Up </Text>
            </View>
            <View style={styles.inputView}>
              <Inputs Text="Enter Your Full Name :" />
            </View>
            <View style={styles.inputView}>
              <Inputs Text="Enter Your Email :" />
            </View>
            <View style={styles.inputView}>
              <Inputs Text="Enter Your Password :" />
            </View>
            <View style={styles.inputView}>
              <Inputs Text="Enter Your Confrom Password :" />
            </View>
          </View>
          <View>
            <Buttons Text="Sign Up" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 200,
  },
  mainView: {
    backgroundColor: "white",
    height: 700,
    width: 400,
  },
  headingSignUp: {
    fontSize: 50,
    textAlign: "center",
  },
  inputView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});
