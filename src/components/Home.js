import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "../screens/LoginScreen";

import {Asset} from "expo-asset";
import {AppLoading} from "expo";

function cacheImages(images) {
    return images.map(image => {
        if (typeof image === 'string') {
            return Image.prefetch(image);
        } else {
            return Asset.fromModule(image).downloadAsync();
        }
    });
}

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            isReady:false
        }
    }

    async _loadAssetsAsync() {
        const imageAssets = cacheImages([require('../../assets/kids-drawing.jpeg')]);
        await Promise.all([...imageAssets]);
    }

    render() {
        if (!this.state.isReady) {
            return (
                <AppLoading
                    startAsync={this._loadAssetsAsync}
                    onFinish={() => this.setState({ isReady: true })}
                    onError={console.warn}
                />
            );
        }
        return <LoginScreen navigation={this.props.navigation}/>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});