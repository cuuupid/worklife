import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import { View, StyleSheet } from "react-native";

export default class IconView extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 19,
    height: 13
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Svg
          viewBox="0 0 18.32 12.50"
          preserveAspectRatio="none"
          style={styles.view}
        >
          <Path
            strokeWidth={0}
            fill="rgba(198,203,212,1)"
            isClosed
            d="M0.00 0.00 L0.00 0.00 M0.00 0.00 L0.00 0.00 M0.00 0.00 L0.00 0.00 "
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
  view: {
    position: "absolute",
    height: "96.15%",
    width: "96.42%",
    top: "1.92%",
    left: "0.00%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  }
});
