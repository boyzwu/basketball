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


export  default class Tab extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {nowScore:true,nowReb:false,nowMins:false};
      }
    render() {

        return (
            <View style={styles.container}>
                <TouchableHighlight
                    underlayColor={'#0000'} style={styles.tabout} onPress={()=>{
                            this.changeSelect(0);

                    }}>
                    <View style={styles.tabInner}>
                        <Image style={[styles.Image,{height:this.state.nowScore?0:50}]} source={require('./pics/score_normal.png')} ></Image>
                        <Image style={[styles.Image,{height:this.state.nowScore?50:0}]} source={require('./pics/score_selected.png')} ></Image>
                    </View>
                </TouchableHighlight>



                <TouchableHighlight
                    underlayColor={'#0000'} style={styles.tabout} onPress={()=>{
                            this.changeSelect(1);

                    }}>
                    <View style={styles.tabInner}>
                        <Image style={[styles.Image,{height:this.state.nowReb?0:50}]} source={require('./pics/reb_normal.png')} ></Image>
                        <Image style={[styles.Image,{height:this.state.nowReb?50:0}]} source={require('./pics/reb_selected.png')} ></Image>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    underlayColor={'#0000'} style={styles.tabout} onPress={()=>{
                            this.changeSelect(2);

                    }}>
                    <View style={styles.tabInner}>
                        <Image style={[styles.Image,{height:this.state.nowMins?0:50}]} source={require('./pics/time_normal.png')} ></Image>
                        <Image style={[styles.Image,{height:this.state.nowMins?50:0}]} source={require('./pics/time_selected.png')} ></Image>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }

    changeSelect(pos){
        switch (pos){
            case 0:
                if (!this.state.nowScore){
                    this.setState({nowScore:true});
                    this.setState({nowReb:false});
                    this.setState({nowMins:false});
                    this.props.select(0);
                }

                break;
            case 1:
                if (!this.state.nowReb){
                    this.setState({nowScore:false});
                    this.setState({nowReb:true});
                    this.setState({nowMins:false});
                    this.props.select(1);
                }

                break;
            case 2:
                if (!this.state.nowMins){
                    this.setState({nowScore:false});
                    this.setState({nowReb:false});
                    this.setState({nowMins:true});
                    this.props.select(2);
                }

                break;
        }
    }

}
const styles = StyleSheet.create({
    container: {
        height:80,
        flexDirection:'row',
        backgroundColor:'#F5FCFF'
    },
    tabout:{

        flex:1
        , margin:10
    },
    tabInner:{
        backgroundColor:'#F5FCFF',
        justifyContent:'center'
        ,alignItems:'center'
    }
    ,Image:{
        width:50
        ,height:50
        ,resizeMode:'contain'
    }

});

