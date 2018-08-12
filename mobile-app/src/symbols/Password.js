import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import { View, StyleSheet } from "react-native";

export default class Password extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 62,
    height: 6
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.group1}>
          <Svg
            viewBox="0 0 6.00 6.00"
            preserveAspectRatio="none"
            style={styles.oval}
          >
            <Path strokeWidth={0} fill="rgba(51,51,51,1)" isClosed d="" />
          </Svg>
          <Svg
            viewBox="0 0 6.00 6.00"
            preserveAspectRatio="none"
            style={styles.ovalCopy3}
          >
            <Path strokeWidth={0} fill="rgba(51,51,51,1)" isClosed d="" />
          </Svg>
          <Svg
            viewBox="0 0 6.00 6.00"
            preserveAspectRatio="none"
            style={styles.ovalCopy}
          >
            <Path strokeWidth={0} fill="rgba(51,51,51,1)" isClosed d="" />
          </Svg>
          <Svg
            viewBox="0 0 6.00 6.00"
            preserveAspectRatio="none"
            style={styles.ovalCopy4}
          >
            <Path strokeWidth={0} fill="rgba(51,51,51,1)" isClosed d="" />
          </Svg>
          <Svg
            viewBox="0 0 6.00 6.00"
            preserveAspectRatio="none"
            style={styles.ovalCopy6}
          >
            <Path strokeWidth={0} fill="rgba(51,51,51,1)" isClosed d="" />
          </Svg>
          <Svg
            viewBox="0 0 6.00 6.00"
            preserveAspectRatio="none"
            style={styles.ovalCopy2}
          >
            <Path strokeWidth={0} fill="rgba(51,51,51,1)" isClosed d="" />
          </Svg>
          <Svg
            viewBox="0 0 6.00 6.00"
            preserveAspectRatio="none"
            style={styles.ovalCopy5}
          >
            <Path strokeWidth={0} fill="rgba(51,51,51,1)" isClosed d="" />
          </Svg>
          <Svg
            viewBox="0 0 6.00 6.00"
            preserveAspectRatio="none"
            style={styles.ovalCopy7}
          >
            <Path strokeWidth={0} fill="rgba(51,51,51,1)" isClosed d="" />
          </Svg>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  group1: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%"
  },
  oval: {
    position: "absolute",
    height: "100.00%",
    width: "9.68%",
    top: "0.00%",
    left: "0.00%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  ovalCopy3: {
    position: "absolute",
    height: "100.00%",
    width: "9.68%",
    top: "0.00%",
    left: "38.71%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  ovalCopy: {
    position: "absolute",
    height: "100.00%",
    width: "9.68%",
    top: "0.00%",
    left: "12.90%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  ovalCopy4: {
    position: "absolute",
    height: "100.00%",
    width: "9.68%",
    top: "0.00%",
    left: "51.61%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  ovalCopy6: {
    position: "absolute",
    height: "100.00%",
    width: "9.68%",
    top: "0.00%",
    left: "77.42%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  ovalCopy2: {
    position: "absolute",
    height: "100.00%",
    width: "9.68%",
    top: "0.00%",
    left: "25.81%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  ovalCopy5: {
    position: "absolute",
    height: "100.00%",
    width: "9.68%",
    top: "0.00%",
    left: "64.52%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  ovalCopy7: {
    position: "absolute",
    height: "100.00%",
    width: "9.68%",
    top: "0.00%",
    left: "90.32%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  }
});
