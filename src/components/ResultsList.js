import React from 'react';
import {View, Text, StyleSheet, FlatList, ImageBackground } from 'react-native';
import ResultsDetail from './ResultsDetail';

// <Text style={styles.subText}> Number of results: {results.length}</Text>
const ResultsList = ({ title, results }) => {
    return (
        
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList                 
                data={results}
                keyExtractor={(result) => result.id}
                renderItem= { ({ item }) => {
                return <ResultsDetail result={item}/>;
                }}
            /> 
        </View>
        
    )
}

const styles = StyleSheet.create({
    title:  { 
        fontSize: 18, 
        fontWeight: 'bold', 
        marginLeft: 15, 
        color: '#715F2C'
    },
    subText: {
        marginLeft: 12
    },

    container: {
        marginBottom: 101, 
        backgroundColor: '#CFF2F6'
    }, 

    back:{
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
        opacity: 0.7
    } 
}); 

export default ResultsList;  