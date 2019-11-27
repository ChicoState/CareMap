import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

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
    height: 100,
    width: 100,
    padding: 0,
    overflow: "visible"
  },

  textStyle: {
    fontSize: 20,
    marginLeft: 110,
    bottom: 100, 
    fontWeight: 'bold'
  },

  box: {
    borderStyle: "solid",
    borderWidth: 1,
    height: 102,
    padding: 0,
    backgroundColor: '#F0F2BE'
  }
});

export default ChildcareImageDetail;