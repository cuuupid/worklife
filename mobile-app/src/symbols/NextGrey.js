import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class NextGrey extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 35,
    height: 20
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Text style={styles.next1}>Next</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  next1: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    backgroundColor: "transparent",
    fontSize: 16,
    fontFamily: "Avenir-Book",
    lineHeight: 20,
    textAlign: "center"
  }
});
