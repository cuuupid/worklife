import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import { View, StyleSheet } from "react-native";

export default class IconHide extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 19,
    height: 16
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Svg
          viewBox="0 0 18.32 15.82"
          preserveAspectRatio="none"
          style={styles.hide}
        >
          <Path
            strokeWidth={0}
            fill="rgba(198,203,212,1)"
            isClosed
            d="M0.00 0.00 L0.00 0.00 M0.00 0.00 L0.00 0.00 M0.00 0.00 L0.00 0.00 M0.00 0.00 L0.00 0.00 "
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
  hide: {
    position: "absolute",
    height: "98.88%",
    width: "96.42%",
    top: "0.00%",
    left: "0.00%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  }
});
