import React, { Component } from "react";
import Icon from "@builderx/icons";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default class header4 extends Component {
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
        <View style={styles.leftWrapper}>
          <TouchableOpacity style={styles.leftIconButton}>
            <Icon
              style={styles.leftIcon}
              name="ios-arrow-back"
              type="Ionicons"
            />
            <Text style={styles.leftText}>Back</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.title} numberOfLines={1}>
            Title
          </Text>
        </View>
        <View style={styles.rightWrapper}>
          <TouchableOpacity style={styles.TouchableOpacity}>
            <Icon style={styles.rightIcon} name="ios-add" type="Ionicons" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    backgroundColor: "#1EC8FF",
    paddingRight: 8,
    paddingLeft: 8
  },
  leftWrapper: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center"
  },
  leftIconButton: {
    flexDirection: "row"
  },
  leftIcon: {
    color: "#FFFFFF",
    fontSize: 32
  },
  leftText: {
    alignSelf: "center",
    paddingLeft: 5,
    fontSize: 17,
    color: "#FFFFFF"
  },
  textWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "Roboto",
    lineHeight: 17,
    color: "#000"
  },
  rightWrapper: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center"
  },
  TouchableOpacity: {},
  rightIcon: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 32
  }
});
