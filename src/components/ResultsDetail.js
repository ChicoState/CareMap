import React from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';

const ResultsDetail = ({ result }) => {
    return ( 
    <View style={styles.container}>
        <View style = {styles.bgImag}>
            <Image style={styles.image} source={{ uri: result.image_url}} />
        <Text style={styles.name}>{result.name}</Text>
        <Text style={{fontSize: 18, color: '#2E71DC'}}>{result.rating} Stars, {result.review_count} Reviews{"\n"}
        </Text>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        padding: 0,
        borderColor: '#ffdd59'

    },
    bgImag: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'white',
        borderColor: '#ffdd59',
        borderWidth: 2,
        padding: 1

      },
    image: {
        width: '100%',
        height: 220,
        borderRadius: 0,
        borderColor: '#ffdd59',
        shadowOffset: {width: 2, height: 2},
        shadowColor: 'black',
        shadowOpacity: 0.26
    },
    name: {
        flex: 1,
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 15,
        color: '#ffdd59'
    }
});

export default ResultsDetail;