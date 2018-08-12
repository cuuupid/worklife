import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import { View, StyleSheet } from "react-native";

export default class ArrowL extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 20,
    height: 20
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Svg
          viewBox="0 0 13.00 13.27"
          preserveAspectRatio="none"
          style={styles.forwardArrow}
        >
          <Path
            strokeWidth={0}
            fill="rgba(108,114,124,1)"
            isClosed
            d="M0.00 0.00 L0.00 0.00 M0.00 0.00 L0.00 0.00 "
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
  forwardArrow: {
    position: "absolute",
    height: "66.34%",
    width: "64.98%",
    top: "13.26%",
    left: "13.94%",
    backgroundColor: "transparent",
    borderColor: "transparent",
    transform: [
      {
        rotate: "-315deg"
      }
    ]
  }
});
