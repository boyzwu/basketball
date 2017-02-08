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
,WebView
} from 'react-native';


var Dimensions = require('Dimensions');
var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;

export  default class PlayerDetail extends Component {

    render() {

        return (
            <View style={styles.container}>
                <WebView
                    style={{flex:1,backgroundColor:'gray'}}
                    source={{uri:this.props.link,method: 'GET'}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    scalesPageToFit={true}
                />
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

