import React, { Component } from "react";
import { Svg, Defs, ClipPath, Path } from "react-native-svg";
import { View, StyleSheet } from "react-native";

export default class User extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 24,
    height: 24
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Svg
          viewBox="0 0 18.00 20.00"
          preserveAspectRatio="none"
          style={styles.combinedShape2}
        >
          <Defs>
            <ClipPath id="clipPath4">
              <Path
                strokeWidth={0}
                fill="rgba(0,0,0,1)"
                isClosed={true}
                d="M17.00 20.00 C16.45 20.00 16.00 19.00 16.00 19.00 L16.00 17.00 L13.00 14.00 L5.00 14.00 L2.00 17.00 L2.00 19.00 C2.00 19.00 1.55 20.00 1.00 20.00 C0.45 20.00 0.00 19.00 0.00 19.00 L0.00 17.00 L5.00 12.00 L13.00 12.00 L18.00 17.00 L18.00 19.00 C18.00 19.00 17.55 20.00 17.00 20.00 Z M9.00 10.00 C6.24 10.00 4.00 7.76 4.00 5.00 C4.00 2.24 6.24 0.00 9.00 0.00 C11.76 0.00 14.00 2.24 14.00 5.00 C14.00 7.76 11.76 10.00 9.00 10.00 Z M9.00 8.00 C10.66 8.00 12.00 6.66 12.00 5.00 C12.00 3.34 10.66 2.00 9.00 2.00 C7.34 2.00 6.00 3.34 6.00 5.00 C6.00 6.66 7.34 8.00 9.00 8.00 Z"
              />
            </ClipPath>
          </Defs>
          <Path
            strokeWidth={0}
            fill="rgba(0,0,0,1)"
            isClosed={true}
            d="M17.00 20.00 C16.45 20.00 16.00 19.00 16.00 19.00 L16.00 17.00 L13.00 14.00 L5.00 14.00 L2.00 17.00 L2.00 19.00 C2.00 19.00 1.55 20.00 1.00 20.00 C0.45 20.00 0.00 19.00 0.00 19.00 L0.00 17.00 L5.00 12.00 L13.00 12.00 L18.00 17.00 L18.00 19.00 C18.00 19.00 17.55 20.00 17.00 20.00 Z M9.00 10.00 C6.24 10.00 4.00 7.76 4.00 5.00 C4.00 2.24 6.24 0.00 9.00 0.00 C11.76 0.00 14.00 2.24 14.00 5.00 C14.00 7.76 11.76 10.00 9.00 10.00 Z M9.00 8.00 C10.66 8.00 12.00 6.66 12.00 5.00 C12.00 3.34 10.66 2.00 9.00 2.00 C7.34 2.00 6.00 3.34 6.00 5.00 C6.00 6.66 7.34 8.00 9.00 8.00 Z"
            clipPath="url(#clipPath4)"
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
  combinedShape2: {
    position: "absolute",
    height: "83.33%",
    width: "75.00%",
    top: "8.33%",
    left: "12.50%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  }
});
