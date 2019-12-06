import { createStackNavigator, createAppContainer } from 'react-navigation';
//import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import DetailScreen from './src/screens/DetailScreen';
import ImageScreen from './src/screens/ImageScreen';
import SearchScreen from './src/screens/SearchScreen';
import Home from "./src/components/Home";
import {YellowBox} from 'react-native';

const navigator = createStackNavigator(
  {
    Home: Home,
    Component: ComponentsScreen,
    Image: ImageScreen,
    Search: SearchScreen,
    Detail: DetailScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Care Map',
        header: null
    }
  }
);

export default createAppContainer(navigator);
