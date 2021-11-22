import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default function Inputs(props) {
  return (
    <View>
      <TextInput style={styles.fullNameInput} placeholder={props.Text} />
    </View>
  );
}

const styles = StyleSheet.create({
  fullNameInput: {
    paddingLeft: 15,
    borderColor: "black",
    borderWidth: 1,
    width: 370,
    height: 50,
    fontSize: 15,
    backgroundColor: "white",
    borderRadius: 10,
  },
});
