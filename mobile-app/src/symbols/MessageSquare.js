import React, { Component } from "react";
import { Svg, Defs, ClipPath, Path } from "react-native-svg";
import { View, StyleSheet } from "react-native";

export default class MessageSquare extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 24,
    height: 24
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Svg
          viewBox="0 0 20.00 20.00"
          preserveAspectRatio="none"
          style={styles.shape2}
        >
          <Defs>
            <ClipPath id="clipPath2">
              <Path
                strokeWidth={0}
                fill="rgba(0,0,0,1)"
                isClosed={true}
                d="M2.00 16.59 L2.00 3.00 L3.00 2.00 L17.00 2.00 L18.00 3.00 L18.00 13.00 L17.00 14.00 L5.00 14.00 L4.29 14.29 L2.00 16.59 Z M17.00 16.00 L20.00 13.00 L20.00 3.00 L17.00 0.00 L3.00 0.00 L0.00 3.00 L0.00 19.00 L1.71 19.71 L5.41 16.00 L17.00 16.00 Z"
              />
            </ClipPath>
          </Defs>
          <Path
            strokeWidth={0}
            fill="rgba(0,0,0,1)"
            isClosed={true}
            d="M2.00 16.59 L2.00 3.00 L3.00 2.00 L17.00 2.00 L18.00 3.00 L18.00 13.00 L17.00 14.00 L5.00 14.00 L4.29 14.29 L2.00 16.59 Z M17.00 16.00 L20.00 13.00 L20.00 3.00 L17.00 0.00 L3.00 0.00 L0.00 3.00 L0.00 19.00 L1.71 19.71 L5.41 16.00 L17.00 16.00 Z"
            clipPath="url(#clipPath2)"
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
  shape2: {
    position: "absolute",
    height: "83.34%",
    width: "83.33%",
    top: "8.33%",
    left: "8.33%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  }
});
