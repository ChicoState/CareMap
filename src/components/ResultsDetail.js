import React from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';

const ResultsDetail = ({ result }) => {
    return ( 
    <View style={styles.container}>
        <ImageBackground style = {styles.bgImag} source = {require("../../assets/dotz.jpg")}> 
        <Text style={styles.name}>{result.name}</Text>
        <Text>{result.rating} Stars, {result.review_count} Reviews{"\n"}    
        </Text>
        <Image style={styles.image} source={{ uri: result.image_url}} />
        </ImageBackground> 
    </View>
    );
};

const styles = StyleSheet.create({
    container:{
        
    },
    bgImag: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
        
      },
    image: {
        width: 350,
        height: 220,
        borderRadius: 4
    },
    name: {
        flex: 1,
        fontWeight: 'bold',
        fontSize: 18, 
        marginTop: 15,
    }
});

export default ResultsDetail;