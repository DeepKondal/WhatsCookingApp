import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

const navigator = createStackNavigator({
    Search : SearchScreen,
    Results : ResultsShowScreen
}, {
  initialRouteKey : 'Search',
  defaultNavigationOptions : {
  title : "What's Cookin?"
  }
});

export default createAppContainer(navigator);