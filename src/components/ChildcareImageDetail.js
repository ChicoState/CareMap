import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ChildcareImageDetail = props => {
  console.log(props);
  return (
    <View style={styles.box}>
      <Image style={styles.imageStyle} source={props.imageSource} />
      <Text style={styles.textStyle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 125,
    height: 125
  },

  textStyle: {
    fontSize: 20,
    marginLeft: 150,
    bottom: 125
  },

  box: {
    borderStyle: "solid",
    borderWidth: 1,
    padding: 0,
    borderTopWidth: 0
  }
});

export default ChildcareImageDetail;
