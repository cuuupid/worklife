import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default class header31 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 44,
    width: 375,
    defaultHeight: "fixed",
    defaultWidth: "fixed"
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <TouchableOpacity style={styles.leftIconButton}>
          <Text style={styles.leftText}>All Files</Text>
        </TouchableOpacity>
        <View style={styles.textWrapper}>
          <Text style={styles.title} numberOfLines={1}>
            Title
          </Text>
          <Text style={styles.subTitle} numberOfLines={1}>
            SubTitle
          </Text>
        </View>
        <TouchableOpacity style={styles.rightIconButton}>
          <Text style={styles.rightText}>Done</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    backgroundColor: "#EFEFF4"
  },
  leftIconButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    alignSelf: "center",
    paddingRight: 8,
    paddingLeft: 8
  },
  leftText: {
    alignSelf: "center",
    fontSize: 17,
    color: "#007AFF"
  },
  textWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "Roboto",
    lineHeight: 15,
    color: "#000"
  },
  subTitle: {
    fontSize: 12,
    color: "#8E8E93"
  },
  rightIconButton: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: 8,
    paddingLeft: 8
  },
  rightText: {
    fontSize: 17,
    color: "#007AFF"
  }
});
