import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider} from './src/context/BlogContext';
import { createStackNavigator, createAppContainer } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';

const navigator = createStackNavigator({
    Index:IndexScreen
}, {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
        title: 'Blogs'
    }
});

const App = createAppContainer(navigator);

export default () => {
    return <Provider>
            <App />
        </Provider>
}
