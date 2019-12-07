import { createStackNavigator, createAppContainer } from 'react-navigation';
//import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import DetailScreen from './src/screens/DetailScreen';
import ImageScreen from './src/screens/ImageScreen';
import SearchScreen from './src/screens/SearchScreen';
import Home from "./src/components/Home";
import LoginScreen from "./src/screens/LoginScreen";
import {TextComponent, YellowBox} from 'react-native';
import React from "react";
import {Text} from "react-native";

const navigator = createStackNavigator(
    {
        Login: {
            screen: LoginScreen,
            navigationOptions: {
                header: null,
            }
        },
        Search: {
            screen: SearchScreen,
            navigationOptions: ({navigation}) => ({
                headerTitle: <Text style={{fontSize: 27, fontWeight: 'bold', color: '#ffdd59'}}>CARE MAP</Text>
            })
        },
        Components: {
            screen: ComponentsScreen,
            navigationOptions: ({
                headerTitle: <Text style={{fontSize: 27, fontWeight: 'bold', color: '#ffdd59'}}>CARE MAP</Text>
            })
        },
        Image: {
            screen: ImageScreen,
            navigationOptions: ({
                headerTitle: <Text style={{fontSize: 27, fontWeight: 'bold', color: '#ffdd59'}}>CARE MAP</Text>
            })
        },
        Detail: {
            screen: DetailScreen,
            navigationOptions: ({
                headerTitle: <Text style={{fontSize: 27, fontWeight: 'bold', color: '#ffdd59'}}>CARE MAP</Text>
            })
        }
    }, {headerMode: 'screen'}
);

export default createAppContainer(navigator);
