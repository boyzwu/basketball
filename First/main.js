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

import Tab from './tab.js'
import Score from './score.js'
import Reb from './reb.js'
export  default class Main extends Component {

    render() {

        return (
            <View style={styles.container}>
                <View style={{flex: 1,backgroundColor:'#FF0'}}>
                    <Score></Score>

                </View>

                <Tab select={(pos)=>{
                       this.changeScene(pos);
                }}></Tab>
            </View>
        );
    }

    changeScene(pos){
        ToastAndroid.show('点到了'+pos,ToastAndroid.SHORT);
    }


}
const styles = StyleSheet.create({
    container: {
        flex:1
    },


});

