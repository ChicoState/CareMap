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
    textAlign: 'center',
    fontSize: 20,
    marginLeft: 10,
    bottom: 100, 
    fontWeight: 'bold'
  },

  box: {
    flex: 1,
    borderStyle: "solid",
    borderWidth: 1,
    height: 102,
    padding: 0,
    borderColor: '#d6d7da'
  }
});

export default ChildcareImageDetail;