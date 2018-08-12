import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

export default class ColorGrey extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 32,
    height: 32
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.rectangle} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  rectangle: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    backgroundColor: "rgba(155,155,155,1)"
  }
});
