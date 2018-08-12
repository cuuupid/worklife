import React, { Component } from "react";
import { Center } from "@builderx/utils";
import Button1 from "../symbols/button1";
import Button6 from "../symbols/button6";
import { View, StyleSheet, StatusBar, Text } from "react-native";

export default class Splash extends Component {
  render() {
    return (
      <View style={styles.root}>
        <StatusBar barStyle="light-content" style={styles.statusBar} />
        <View style={styles.background} />
        <Center>
          <Text style={styles.text}>WorkLife</Text>
        </Center>
        <Button1 style={styles.button1} />
        <Button6 style={styles.button6} buttonContent="Register" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },
  statusBar: {},
  background: {
    top: 0,
    left: 0,
    position: "absolute",
    backgroundColor: "rgba(74,130,193,1)",
    right: 0,
    bottom: 0,
    opacity: 1
  },
  text: {
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 60,
    color: "rgba(255,255,255,1)",
    fontFamily: "Phosphate-Solid"
  },
  button1: {
    top: 301.69,
    left: -355.9,
    position: "absolute",
    height: 44
  },
  button6: {
    position: "absolute",
    height: 44,
    left: 15,
    right: 15,
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1,
    bottom: 45.64
  }
});
