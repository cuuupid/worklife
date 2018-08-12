import React, { Component } from "react";
import User from "./User";
import { View, StyleSheet } from "react-native";

export default class IconProfile extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 48,
    height: 32
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.group6}>
          <User style={styles.user} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  group6: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%"
  },
  user: {
    position: "absolute",
    top: "12.50%",
    left: "25.00%",
    height: "75.00%",
    width: "50.00%",
    backgroundColor: "transparent"
  }
});
