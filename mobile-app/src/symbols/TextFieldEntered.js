import React, { Component } from "react";
import DividerGrey from "./DividerGrey";
import { View, Text, StyleSheet } from "react-native";

export default class TextFieldEntered extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 327,
    height: 52
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Text style={styles.oliverOmstudioCo}>oliver@omstudio.co</Text>
        <DividerGrey style={styles.dividerGrey1} />
        <Text style={styles.inputTitleCopy2}>Label</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  oliverOmstudioCo: {
    position: "absolute",
    top: "38.46%",
    left: "0.00%",
    height: 24,
    width: 312,
    backgroundColor: "transparent",
    fontSize: 16,
    fontFamily: "Avenir-Book",
    lineHeight: 24,
    textAlign: undefined
  },
  dividerGrey1: {
    position: "absolute",
    top: "98.08%",
    left: "0.00%",
    height: "1.92%",
    width: "100.00%",
    backgroundColor: "transparent"
  },
  inputTitleCopy2: {
    position: "absolute",
    top: -7,
    backgroundColor: "transparent",
    fontSize: 12,
    fontFamily: "Avenir-Book",
    lineHeight: 20,
    textAlign: undefined
  }
});
