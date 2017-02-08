/**
 * Created by Administrator on 2017/1/6.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
    ToastAndroid,
    Navigator
    ,ListView
    ,BackAndroid
} from 'react-native';


var Dimensions = require('Dimensions');
var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;


export  default class Welcome extends Component {

    render() {

        return (
            <View style={styles.container}>

                <Image style={{width:screenWidth,height:screenHeight,resizeMode:'stretch'}} source={require('./pics/splash.png')}></Image>
            </View>
        );
    }



}
const styles = StyleSheet.create({
    container: {
        flex:1
    },


});

