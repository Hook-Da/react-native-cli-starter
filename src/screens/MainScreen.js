import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Provider } from 'react-redux';

class MainScreen extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return <Provider>
            <View>
                <Text>Main</Text>
                <TouchableOpacity onPress={() => navigate('Todo')}>
                    <Text>
                        Navigate to Todo
                    </Text>
                </TouchableOpacity>
            </View>
        </Provider>
    }
}
const styles = StyleSheet.create({});
export default MainScreen;