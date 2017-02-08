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

import Welcome from './welcome.js';
import Main from './main.js';
var zjcjd;
class First extends Component {

    componentWillMount() {
            BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);

        this.state={}
    }
    componentWillUnmount() {
            BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
    }
    onBackAndroid = () => {
        //要一个navigator
        var nav=zjcjd;

        const routers = nav.getCurrentRoutes();
        if (routers.length > 2) {
            nav.pop();
            return true;
        }
    }
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};

         this.time= setInterval(()=>{
              zjcjd.push({title: 'Second Scene', index: 1});
              clearInterval(this.time);
          },1000);
      }

    getScene(route, navigator) {
        zjcjd=navigator;
        //提供一个navigator
        if (route.index === 0) {
            return (
                <Welcome></Welcome>
            )
        } else if (route.index === 1) {
            return (

                <Main></Main>
            );
        }

    }

    render() {

        return (
            <Navigator

                initialRoute={({title: ' First  Scene', index: 0})}


                renderScene={(route, navigator)=>this.getScene(route, navigator)}

            />
        );
    }

}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF'
    },

    stylePress: {
        backgroundColor: '#F00'
    },

});

AppRegistry.registerComponent('First', () => First);
