import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import DetailScreen from './src/screens/DetailScreen';
import ImageScreen from './src/screens/ImageScreen';
import SearchScreen from './src/screens/SearchScreen';
import {YellowBox} from 'react-native';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    Image: ImageScreen,
    Search: SearchScreen,
    Detail: DetailScreen
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'CareMap'
    }
  }
);

export default createAppContainer(navigator);
