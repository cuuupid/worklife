import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import { View, StyleSheet } from "react-native";

export default class DividerBlue extends Component {
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
          style={styles.dividerBlack1}
        >
          <Path
            strokeWidth={1}
            fill="transparent"
            stroke="rgba(75,116,255,1)"
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
  dividerBlack1: {
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
