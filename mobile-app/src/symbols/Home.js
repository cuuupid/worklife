import React, { Component } from "react";
import { Svg, Defs, ClipPath, Path } from "react-native-svg";
import { View, StyleSheet } from "react-native";

export default class Home extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 24,
    height: 24
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Svg
          viewBox="0 0 20.00 22.00"
          preserveAspectRatio="none"
          style={styles.combinedShape}
        >
          <Defs>
            <ClipPath id="clipPath1">
              <Path
                strokeWidth={0}
                fill="rgba(0,0,0,1)"
                isClosed={true}
                d="M0.39 7.21 L9.39 0.21 L10.61 0.21 L19.61 7.21 L20.00 8.00 L20.00 19.00 L17.00 22.00 L3.00 22.00 L0.00 19.00 L0.00 8.00 L0.39 7.21 Z M2.00 8.49 L2.00 19.00 L3.00 20.00 L6.00 20.00 L6.00 11.00 L7.00 10.00 L13.00 10.00 L14.00 11.00 L14.00 20.00 L17.00 20.00 L18.00 19.00 L18.00 8.49 L10.00 2.27 L2.00 8.49 Z M8.00 12.00 L8.00 20.00 L12.00 20.00 L12.00 12.00 L8.00 12.00 Z"
              />
            </ClipPath>
          </Defs>
          <Path
            strokeWidth={0}
            fill="rgba(0,0,0,1)"
            isClosed={true}
            d="M0.39 7.21 L9.39 0.21 L10.61 0.21 L19.61 7.21 L20.00 8.00 L20.00 19.00 L17.00 22.00 L3.00 22.00 L0.00 19.00 L0.00 8.00 L0.39 7.21 Z M2.00 8.49 L2.00 19.00 L3.00 20.00 L6.00 20.00 L6.00 11.00 L7.00 10.00 L13.00 10.00 L14.00 11.00 L14.00 20.00 L17.00 20.00 L18.00 19.00 L18.00 8.49 L10.00 2.27 L2.00 8.49 Z M8.00 12.00 L8.00 20.00 L12.00 20.00 L12.00 12.00 L8.00 12.00 Z"
            clipPath="url(#clipPath1)"
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
  combinedShape: {
    position: "absolute",
    height: "91.67%",
    width: "83.33%",
    top: "4.17%",
    left: "8.33%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  }
});
