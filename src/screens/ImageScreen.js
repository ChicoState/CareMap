import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ChildcareImageDetail from "../components/ChildcareImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ChildcareImageDetail style={styles.container}
        title="Chico Childcare"
        imageSource={require("../../assets/reading-book.jpeg")}
      />
      <ChildcareImageDetail
        title="San Luis Obispo Childcare"
        imageSource={require("../../assets/kids-eating.jpeg")}
      />
      <ChildcareImageDetail
        title="Long Beach Childcare"
        imageSource={require("../../assets/crayon.jpeg")}
      />
      <ChildcareImageDetail
        title="Sacramento Childcare"
        imageSource={require("../../assets/kids-drawing.jpeg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
container: {
  paddingTop: 0,
}
});

export default ImageScreen;
