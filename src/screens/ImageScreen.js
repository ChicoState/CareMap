import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ChildcareImageDetail from "../components/ChildcareImageDetail";

/*  TODO: convert this screen to RESOURCES/INFO page 
    about child care options
*/
const ImageScreen = () => {
  return (
    <View>
      <Text style={styles.header}>Understanding Your Options</Text>
      <ChildcareImageDetail style={styles.container}
        title="Day Care"
        imageSource={require("../../assets/reading-book.jpeg")}
      />
      <ChildcareImageDetail
        title="Preschool"
        imageSource={require("../../assets/kids-eating.jpeg")}
      />
      <ChildcareImageDetail
        title="Montessori"
        imageSource={require("../../assets/crayon.jpeg")}
      />
      <ChildcareImageDetail
        title="After School Programs"
        imageSource={require("../../assets/kids-drawing.jpeg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
container: {
  paddingTop: 0,
},
header: {
  fontSize: 18,
  fontWeight: 'bold'
  
}
});

export default ImageScreen;
