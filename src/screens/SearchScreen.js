import { Text,  StyleSheet, View} from 'react-native';
import React from 'react';
/* useResult custom hook 
*   - function searchAPI to search yelp api
*/
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';
import {YellowBox} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

const SearchScreen = ({ }) => {
    // uses function and JSON object from
    const  [searchAPI, results] = useResults();
    const Byterm = (term) => {
        return results.filter(result => {
            return result.categories.alias === term;
        });
    };
    /* Hello Bug, source.uri is null?!? */
    YellowBox.ignoreWarnings(['Warning: ...']);
    console.disableYellowBox = true;
    
    return ( 
        <View style = {styles.container}>
            <View style={styles.container}>
            
                <View style = {{flexDirection: "row"}}>
                <TouchableOpacity onPress={() => searchAPI('preschool')}>
                    <View style={styles.button}> 
                        <Text style={styles.buttonText}>Preschool</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => searchAPI('DayCare')}>
                    <View style={styles.button}> 
                        <Text style={styles.buttonText}>Day Care</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => searchAPI('Montessori')}>
                    <View style={styles.button}> 
                        <Text style={styles.buttonText}>Montessori</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => searchAPI('kids activities')}>
                    <View style={styles.button}> 
                        <Text style={styles.buttonText}>After School Programs</Text>
                    </View>
                </TouchableOpacity>
                </View>           
            </View>
            <ScrollView>
            <ResultsList
                results ={Byterm()}
            /> 
            </ScrollView>
        </View>
    );
};

/* Navigtion Header to information on childcare options screen */
SearchScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: <TouchableOpacity onPress={() => navigation.navigate('Components')}>
            <FontAwesome name = "child" size={37} style={{color: '#ffdd59', right: 1}}/>
            </TouchableOpacity>
    };
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffdd59',

    }, 
      button: {
        height: 50,
        width: 103,
        alignItems: 'center',
        backgroundColor: '#2E71DC',
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      buttonText: {
        textAlign: 'center',
        padding: 10,
        color: 'white'
      }
}); 

// Jozzell Geo Location Function :: =>
let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
    };
    
    function success(pos){
      let crd = pos.coords;
    
      console.log('Your current positon is:');
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
    }
    
    function error(err)
    {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    
    navigator.geolocation.getCurrentPosition(success, error, options);
  
export default SearchScreen;