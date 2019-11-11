import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ResultsDetail = ({ result }) => {
    return ( 
    <View style={styles.container}>
        <Text style={styles.name}>{result.name}</Text>
        <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        <Image style={styles.image} source={{ uri: result.image_url}} />

    </View>
    );
};

const styles = StyleSheet.create({
    container:{
        marginLeft: 15
    },
    image: {
        width: 350,
        height: 220,
        borderRadius: 4
    },
    name: {
        fontWeight: 'bold',
        fontSize: 18
    }
});

export default ResultsDetail;