import React, {Component} from "react";
import Animated, {Easing} from 'react-native-reanimated';
import {StyleSheet, Text, View, Image, Dimensions, TextInput, TouchableOpacity} from "react-native";
import {TapGestureHandler, State} from "react-native-gesture-handler";

const {width, height} = Dimensions.get('window');
const {Value,
    event,
    block,
    cond,
    eq,
    set,
    Clock,
    startClock,
    stopClock,
    debug,
    timing,
    clockRunning,
    interpolate,
    Extrapolate,
    concat} = Animated;

function runTiming(clock, value, dest) {
    const state = {
        finished: new Value(0),
        position: new Value(0),
        time: new Value(0),
        frameTime: new Value(0)
    };

    const config = {
        duration: 1000,
        toValue: new Value(0),
        easing: Easing.inOut(Easing.ease)
    };

    return block([
        cond(clockRunning(clock), 0, [
            set(state.finished, 0),
            set(state.time, 0),
            set(state.position, value),
            set(state.frameTime, 0),
            set(config.toValue, dest),
            startClock(clock)
        ]),
        timing(clock, state, config),
        cond(state.finished, debug('stop clock', stopClock(clock))),
        state.position
    ]);
}

class LoginScreen extends Component {
    constructor(props) {
        super(props);

        this.buttonOpacity = new Value(1);
        this.onStateChange = event([
            {
                nativeEvent: ({state}) => block([
                    cond(eq(state, State.END),set(this.buttonOpacity, runTiming(new Clock(), 1,0)))
                ])
            }
        ]);

        this.onCloseState = event([
            {
                nativeEvent: ({state}) => block([
                    cond(eq(state, State.END),set(this.buttonOpacity, runTiming(new Clock(), 0,1)))
                ])
            }
        ]);

        this.buttonRotate = this.textInputOpacity = interpolate(this.buttonOpacity, {
            inputRange:[0,1],
            outputRange:[180,360],
            extrapolate: Extrapolate.CLAMP
        });

        this.buttonY = interpolate(this.buttonOpacity, {
            inputRange:[0,1],
            outputRange:[100,0],
            extrapolate: Extrapolate.CLAMP
        });

        this.bgY = interpolate(this.buttonOpacity, {
            inputRange:[0,1],
            outputRange:[-height/3,0],
            extrapolate: Extrapolate.CLAMP
        });

        this.textInputZindex = interpolate(this.buttonOpacity, {
            inputRange:[0,1],
            outputRange:[1,-1],
            extrapolate: Extrapolate.CLAMP
        });

        this.textInputY = interpolate(this.buttonOpacity, {
            inputRange:[0,1],
            outputRange:[0,100],
            extrapolate: Extrapolate.CLAMP
        });

        this.textInputOpacity = interpolate(this.buttonOpacity, {
            inputRange:[0,1],
            outputRange:[1,0],
            extrapolate: Extrapolate.CLAMP
        });
    }
    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'flex-end'}}>
                <Animated.View style={{...StyleSheet.absoluteFill, transform: [{translateY: this.bgY}]}}>
                    <Image
                        source={require('../../assets/kids-drawing.jpeg')}
                        style={{flex: 1, height: null, width: null}}
                    />
                </Animated.View>
                <View style={{height: height/3, justifyContent: 'center'}}>
                    <TapGestureHandler onHandlerStateChange={this.onStateChange}>
                    <Animated.View style={{...styles.button, opacity: this.buttonOpacity,
                        transform:[{translateY: this.buttonY}]}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>SIGN IN</Text>
                    </Animated.View>
                    </TapGestureHandler>
                    <Animated.View style={{...styles.button, backgroundColor: '#2E71DC', opacity: this.buttonOpacity,
                    transform: [{translateY: this.buttonY}]}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                            SIGN IN WITH FACEBOOK
                        </Text>
                    </Animated.View>
                    <Animated.View style={{height: height/3, ...StyleSheet.absoluteFill, top:null,
                        justifyContent: 'center', zIndex: this.textInputZindex, opacity: this.textInputOpacity,
                        transform:[{translateY: this.textInputY}]}}>

                        <TapGestureHandler onHandlerStateChange={this.onCloseState}>
                            <Animated.View style={styles.closeButton}>
                                <Animated.Text style={{fontSize: 20, color: 'white', transform: [{rotate: concat(this.buttonRotate, 'deg')}]}}>
                                    X
                                </Animated.Text>
                            </Animated.View>
                        </TapGestureHandler>

                        <TextInput placeholder="EMAIL"
                                   style={styles.textInput}
                                   placeholderTextColor='black'
                        />
                        <TextInput placeholder="PASSWORD"
                                   style={styles.textInput}
                                   placeholderTextColor='black'
                        />
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Search")}>
                        <Animated.View style={styles.button}>
                            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                                SIGN IN
                            </Text>
                        </Animated.View>
                        </TouchableOpacity>
                    </Animated.View>
                </View>
            </View>
        )
    }
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: '#ffdd59',
        shadowOffset: {width: 2, height: 2},
        shadowColor: 'black',
        shadowOpacity: 0.26,
        height: 70,
        marginHorizontal: 20,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5
    },
    closeButton: {
        height: 40,
        width: 40,
        backgroundColor: '#ffdd59',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: -20,
        left: width / 2 - 20,
        shadowOffset: {width: 2, height: 2},
        shadowColor: 'black',
        shadowOpacity: 0.26,
    },
    textInput: {
        height: 50,
        borderRadius: 25,
        borderWidth: 0.5,
        marginHorizontal: 20,
        marginVertical: 5,
        paddingLeft: 10,
        borderColor: 'rgba(0,0,0,0.2)'
    },
});