import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import TodoScreen from './src/screens/TodoScreen';

const MainNavigator = createStackNavigator({
  Todo: { screen: TodoScreen },
});

const App = createAppContainer(MainNavigator);

export default App;