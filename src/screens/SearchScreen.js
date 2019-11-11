import React, { useState } from 'react';
import { Text,  StyleSheet, View, Image, ImageBackground} from 'react-native';
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';
import {YellowBox} from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SearchScreen = () => {
    // 'term' is the what we will search the Yelp API with
    const [term, setTerm] = useState(''); 
    const  [searchAPI, results, errorMessage] = useResults();

    const filterResultsByterm = (term) => {
        return results.filter(result => {
            return result.term === term;
        });
    };
    YellowBox.ignoreWarnings(['Warning: ...']);
    console.disableYellowBox = true;
    return (
        //We have found {results.length} results 
        
        <View style = {styles.container}>   
            <SearchBar 
            term ={term}
            onTermChange={(newTerm) => setTerm(newTerm)}
            onTermSubmit={() => searchAPI(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ResultsList 
                results ={filterResultsByterm()}   
            /> 
        </View>
    );
}

SearchScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: <TouchableOpacity onPress={() => navigation.navigate('Image') }>
            <FontAwesome name = "child" size={30}/>
            </TouchableOpacity>
    };
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F0F2BE'
    }
});  
export default SearchScreen;