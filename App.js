import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import TodoScreen from './src/screens/TodoScreen';
import MainScreen from './src/screens/MainScreen';

const MainNavigator = createStackNavigator({
  Main:MainScreen,
  Todo: { screen: TodoScreen },
});

const App = createAppContainer(MainNavigator);

export default App;