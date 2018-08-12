import React, { Component } from "react";
import { Center } from "@builderx/utils";
import Icon from "@builderx/icons";
import { View, StyleSheet, Text, Switch } from "react-native";

export default class Untitled1 extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.text} />
        <Center horizontal>
          <View style={styles.rect} />
        </Center>
        <Text style={styles.text2}>I'm Married</Text>
        <Switch
          style={styles.switch}
          onTintColor="rgba(32,61,94,1)"
          thumbTintColor="rgba(255,255,255,1)"
          tintColor="rgba(255,255,255,1)"
          value={true}
        />
        <Icon style={styles.icon} name="gender-male" type="MaterialCommunityIcons" />
        <Icon style={styles.icon2} name="gender-female" type="MaterialCommunityIcons" />
        <Icon style={styles.icon3} name="gender-male-female" type="MaterialCommunityIcons" />
        <View style={styles.rect2} />
        <Text style={styles.text3}>FINISH</Text>
        <Text style={styles.text4}>I identify as....</Text>
        <Text style={styles.text5}>Male</Text>
        <Center horizontal>
          <Text style={styles.text6}>Female</Text>
        </Center>
        <Text style={styles.text7}>Other</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },
  text: {
    top: 91.01,
    left: 169.03,
    position: "absolute",
    backgroundColor: "transparent"
  },
  rect: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
    backgroundColor: "rgba(74,130,193,1)",
    opacity: 1
  },
  text2: {
    top: 158.02,
    left: "5.56%",
    width: 249,
    height: 48,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 42,
    lineHeight: 41,
    letterSpacing: 0.24,
    textAlign: "center",
    color: "rgba(255,255,255,1)"
  },
  switch: {
    top: 168,
    left: "75.28%",
    position: "absolute"
  },
  icon: {
    top: 396,
    left: 31,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 93
  },
  icon2: {
    top: 391,
    left: "38.89%",
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 93
  },
  icon3: {
    top: 394,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 93,
    right: 34.99
  },
  rect2: {
    left: 0,
    right: 0,
    height: 100.2,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1,
    bottom: -1
  },
  text3: {
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 30,
    fontFamily: "Phosphate-Solid",
    color: "rgba(74,130,193,1)",
    left: "38.33%",
    bottom: 35
  },
  text4: {
    top: 280,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 40,
    color: "rgba(255,255,255,1)",
    left: "18.33%"
  },
  text5: {
    top: 360,
    left: "9.72%",
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 28,
    color: "rgba(255,255,255,1)"
  },
  text6: {
    top: 360,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 28,
    color: "rgba(255,255,255,1)"
  },
  text7: {
    top: 360,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 28,
    color: "rgba(255,255,255,1)",
    right: 40.5
  }
});
