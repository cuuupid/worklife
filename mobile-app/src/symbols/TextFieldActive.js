import React, { Component } from "react";
import Cursor from "./Cursor";
import DividerBlue from "./DividerBlue";
import { View, Text, StyleSheet } from "react-native";

export default class TextFieldActive extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 327,
    height: 52
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Cursor style={styles.cursor} />
        <DividerBlue style={styles.dividerBlack} />
        <Text style={styles.inputTitleCopy1}>Label</Text>
        <Text style={styles.oliver}>oliver@</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  cursor: {
    position: "absolute",
    top: "38.46%",
    left: "0.00%",
    height: "46.15%",
    width: "0.31%",
    backgroundColor: "transparent"
  },
  dividerBlack: {
    position: "absolute",
    top: "98.08%",
    left: "0.00%",
    height: "1.92%",
    width: "100.00%",
    backgroundColor: "transparent"
  },
  inputTitleCopy1: {
    position: "absolute",
    top: -7,
    backgroundColor: "transparent",
    fontSize: 12,
    fontFamily: "Avenir-Book",
    lineHeight: 20,
    textAlign: undefined
  },
  oliver: {
    position: "absolute",
    top: "38.46%",
    left: "0.61%",
    height: 24,
    width: 312,
    backgroundColor: "transparent",
    fontSize: 16,
    fontFamily: "Avenir-Book",
    lineHeight: 24,
    textAlign: undefined
  }
});
