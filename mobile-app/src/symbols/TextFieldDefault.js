import React, { Component } from "react";
import DividerGrey from "./DividerGrey";
import { View, Text, StyleSheet } from "react-native";

export default class TextFieldDefault extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 327,
    height: 52
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Text style={styles.label}>Label</Text>
        <DividerGrey style={styles.divider} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  label: {
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
  divider: {
    position: "absolute",
    top: "98.08%",
    left: "0.00%",
    height: "1.92%",
    width: "100.00%",
    backgroundColor: "transparent"
  }
});
