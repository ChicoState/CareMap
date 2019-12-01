import React from 'react';
import { StyleSheet, View} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

const SearchBar = ({ term, onTermChange, onTermSubmit}) => {
    return (
        <View style = {styles.background}>
            <Feather name="search" style = {styles.IconStyle}/>
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle} 
                placeholder="Search"
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        marginTop: 12,
        marginBottom: 0,
        backgroundColor: '#F5F5F5', 
        height: 50,
        borderRadius: 5, 
        marginHorizontal: 10, 
        // lines up the icon and text in a row
        flexDirection: 'row'
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    IconStyle: {
        fontSize: 35, 
        alignSelf: 'center',
        marginHorizontal: 15
    }
});
export default SearchBar;