import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Buttons(props) {
  return (
    <View style={styles.buttonView}>
      <TouchableOpacity style={styles.singUpButton}>
        <Text style={styles.buttonText}>{props.Text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonView: {
    justifyContent: "center",
    alignContent: "center",
    width: "100%",
    height: 80,
  },
  singUpButton: {
    justifyContent: "center",
    alignContent: "center",
    height: 45,
    width: 350,
    borderRadius: 15,
    backgroundColor: "blue",
    marginLeft: 20,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 17,
  },
});
