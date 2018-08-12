import React, { Component } from "react";
import { Center } from "@builderx/utils";
import { View, StyleSheet, Text, TextInput } from "react-native";

export default class Onboard1 extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.text} />
        <Center horizontal>
          <View style={styles.rect} />
        </Center>
        <Center horizontal>
          <Text style={styles.text2}>What's your name?</Text>
        </Center>
        <Center horizontal>
          <TextInput
            style={styles.textInput}
            placeholder="John Smith"
            placeholderTextColor="rgba(201,197,197,1)"
            autoFocus={true}
          />
        </Center>
        <View style={styles.rect2} />
        <Center horizontal>
          <Text style={styles.text3}>NEXT</Text>
        </Center>
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
    top: "33.32%",
    width: 281,
    height: 40,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 30,
    lineHeight: 41,
    letterSpacing: 0.24,
    textAlign: "center",
    color: "rgba(255,255,255,1)"
  },
  textInput: {
    top: "39.57%",
    width: 303,
    height: 114,
    position: "absolute",
    fontSize: 42,
    textAlign: "center",
    color: "rgba(255,255,255,1)"
  },
  rect2: {
    bottom: 0,
    left: 0,
    right: 0,
    height: 99,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1
  },
  text3: {
    bottom: 35,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 30,
    fontFamily: "Phosphate-Solid",
    color: "rgba(74,130,193,1)"
  }
});
