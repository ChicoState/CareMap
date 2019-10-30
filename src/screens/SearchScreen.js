import React, { useState } from 'react';
import { Text,  StyleSheet, View} from 'react-native';
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    // 'term' is the what we will search the Yelp API with
    const [term, setTerm] = useState(''); 
    const  [searchAPI, results, errorMessage] = useResults();

    const filterResultsByCategory = (open_now) => {
        return results.filter(result => {
            return result.open_now === open_now;
        });
    };
    return (
        <View>
            <SearchBar 
            term ={term}
            onTermChange={(newTerm) => setTerm(newTerm)}
            onTermSubmit={() => searchAPI(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results </Text> 
            <ResultsList 
                results ={filterResultsByCategory()}
                title="Day Care" 
            />  
            <ResultsList 
                results ={filterResultsByCategory(false)}
                title="Open Now"
            /> 
           
        </View>
    )
}

const styles = StyleSheet.create({});  
export default SearchScreen;