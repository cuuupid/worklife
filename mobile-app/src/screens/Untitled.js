import React, { Component } from "react";
import { Center } from "@builderx/utils";
import { View, StyleSheet, Text, TextInput, Switch } from "react-native";

export default class Untitled extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.text} />
        <Center horizontal>
          <View style={styles.rect} />
        </Center>
        <Text style={styles.text2}>$ you get paid hourly?</Text>
        <TextInput
          style={styles.textInput}
          placeholder="$XYZ"
          placeholderTextColor="rgba(201,197,197,1)"
          autoFocus={true}
          keyboardType="numeric"
        />
        <Text style={styles.text3}>I have stock options</Text>
        <Switch
          style={styles.switch}
          onTintColor="rgba(32,61,94,1)"
          thumbTintColor="rgba(255,255,255,1)"
          tintColor="rgba(255,255,255,1)"
          value={true}
        />
        <View style={styles.rect2} />
        <Text style={styles.text4}>NEXT</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },
  text: {
    top: 91.01,
    left: 169.03,
    position: "absolute",
    backgroundColor: "transparent"
  },
  rect: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
    backgroundColor: "rgba(74,130,193,1)",
    opacity: 1
  },
  text2: {
    top: 124.99,
    width: 282,
    height: 40,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 30,
    lineHeight: 41,
    letterSpacing: 0.24,
    textAlign: "center",
    color: "rgba(255,255,255,1)",
    left: "10.83%"
  },
  textInput: {
    top: 165.76,
    width: 303,
    height: 113,
    position: "absolute",
    fontSize: 63,
    textAlign: "center",
    color: "rgba(255,255,255,1)",
    left: "8.06%"
  },
  text3: {
    top: 395.01,
    left: "7.78%",
    width: 249,
    height: 39,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 20,
    lineHeight: 41,
    letterSpacing: 0.24,
    textAlign: "center",
    color: "rgba(255,255,255,1)"
  },
  switch: {
    top: 405,
    position: "absolute",
    right: "16.39%"
  },
  rect2: {
    left: 0,
    right: 0,
    height: 100.2,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1,
    bottom: -1
  },
  text4: {
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 30,
    fontFamily: "Phosphate-Solid",
    color: "rgba(74,130,193,1)",
    left: "40.83%",
    bottom: 35
  }
});
