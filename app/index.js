import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

import Animated from "react-native-reanimated";
const { width, height } = Dimensions.get("window");
class MusicApp extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          justifyContent: "flex-end"
        }}
      >
        <View style={{ ...StyleSheet.absoluteFill }}>
          <Image
            source={require("../assets/bg.jpg")}
            style={{ flex: 1, height: null, width: null }}
          />
        </View>
        <View style={{ height: height / 3, justifyContent: "center" }}>
          <View style={styles.button}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>SIGN IN</Text>
          </View>
          <View style={{ ...styles.button, backgroundColor: "#2E71DC" }}>
            <Text style={{ fontSize: 14, fontWeight: "bold", color: "white" }}>
              SIGN IN WITH FACEBOOK
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
export default MusicApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    backgroundColor: "white",
    height: 50,
    marginHorizontal: 20,
    borderRadius: 45,

    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5
  }
});
