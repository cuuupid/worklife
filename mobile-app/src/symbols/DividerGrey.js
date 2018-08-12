import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import { View, StyleSheet } from "react-native";

export default class DividerGrey extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 326,
    height: 1
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Svg
          viewBox="0 0 328.00 3.00"
          preserveAspectRatio="none"
          style={styles.divider30}
        >
          <Path
            strokeWidth={1}
            fill="transparent"
            stroke="rgba(198,203,212,1)"
            isClosed
            d=""
          />
        </Svg>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  divider30: {
    position: "absolute",
    height: "200.00%",
    width: "100.31%",
    top: "-50.00%",
    left: "-0.15%",
    backgroundColor: "transparent",
    borderColor: "transparent",
    transform: [
      {
        scaleX: -1
      },
      {
        scaleY: -1
      }
    ]
  }
});
