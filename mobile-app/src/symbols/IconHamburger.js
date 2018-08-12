import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

export default class IconHamburger extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 48,
    height: 32
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.group4}>
          <View style={styles.group3}>
            <View style={styles.rectangle2} />
            <View style={styles.rectangle2Copy2} />
            <View style={styles.rectangle2Copy} />
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  group4: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%"
  },
  group3: {
    position: "absolute",
    top: "28.13%",
    left: "25.00%",
    height: "43.75%",
    width: "50.00%"
  },
  rectangle2: {
    position: "absolute",
    top: "0.00%",
    left: "20.83%",
    height: "14.29%",
    width: "58.33%",
    borderRadius: 1,
    backgroundColor: "rgba(74,130,193,1)",
    opacity: 1
  },
  rectangle2Copy2: {
    position: "absolute",
    top: "85.71%",
    left: "20.83%",
    height: "14.29%",
    width: "62.50%",
    borderRadius: 1,
    backgroundColor: "rgba(74,130,193,1)",
    opacity: 1
  },
  rectangle2Copy: {
    position: "absolute",
    top: "42.86%",
    left: "0.00%",
    height: "14.29%",
    width: "100.00%",
    borderRadius: 1,
    backgroundColor: "rgba(74,130,193,1)",
    opacity: 1
  }
});
