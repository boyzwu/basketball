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

var zjcjd;
import PlayerDetail from './playerDetail.js'
export  default class Reb extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态

        var datas=require('./json/player_score.json');
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        var dataSource= ds.cloneWithRows(datas.result);
        this.state = {dataSource:dataSource};
    }
    componentWillMount() {
        BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);


    }
    componentWillUnmount() {
        BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
    }
    onBackAndroid = () => {
        //要一个navigator
        var nav=zjcjd;

        const routers = nav.getCurrentRoutes();
        if (routers.length > 1) {
            nav.pop();
            return true;
        }
    }
    getScene(route, navigator) {
        zjcjd=navigator;
        //提供一个navigator
        if (route.index === 3) {
            return (
                <View style={styles.container}>
                    <Image style={styles.ImageBG} source={require('./pics/ucloud_pre_bg.png')}></Image>
                    <Text style={styles.title}>篮板排序结果</Text>
                    <ListView initialListSize ={1} dataSource={this.state.dataSource} renderRow={this.getItem} renderSeparator={this.getSeparator} ></ListView>
                </View>
            );
        } else {
            return (
                <PlayerDetail link={route.title} ></PlayerDetail>
            );
        }

    }
    render() {

        return (
            <Navigator
                initialRoute={({title: 'one', index: 3})}
                renderScene={(route, navigator)=>this.getScene(route, navigator)}
            />
        );
    }

    getItem(rowData, sectionID, rowID, highlightRow){
        var realPos=parseInt(rowID)+1;
        return(
            <TouchableHighlight onPress={()=>{
               zjcjd.push({title: rowData.player_link, index: 4});

            }}>
                <View style={styles.listItemContainer}>
                    <Text style={{color:'#FFF' ,fontSize:16,fontWeight:'bold' ,margin:5}}>{realPos+"."}</Text>
                    <Image style={{width:80,height:120,resizeMode:'contain',marginRight:30}} source={{uri:rowData.photo_link}}></Image>
                    <View style={{flex:1,justifyContent:'center'}}>
                        <Text style={{color:'#FFF' ,fontSize:16,fontWeight:'bold' ,margin:5}}>姓名：</Text>
                        <Text style={{color:'#FFF' ,fontSize:16,fontWeight:'bold' ,margin:5}}>{rowData.player_name}</Text>

                        <Text style={{color:'#FFF' ,fontSize:16,fontWeight:'bold' ,margin:5}}>得分：</Text>
                        <Text style={{color:'#FFF' ,fontSize:16,fontWeight:'bold' ,margin:5}}>{rowData.personal_data.total_data} 分</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }

    getSeparator(sectionID, rowID, adjacentRowHighlighted){
        return(
            <View key={rowID} style={{height:1,backgroundColor:'#FFF'}}></View>
        );
    }

}
const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center'
    },
    ImageBG:{
        width:screenWidth
        ,height:700
        ,resizeMode:'stretch'
        ,position:'absolute'
        ,top:0
        ,left:0
    }
    ,title:{
        color:'#FFF'
        ,fontSize:20
        ,fontWeight:'bold'
        ,margin:15
    }
    ,listItemContainer:{
        width:screenWidth,
        height:140
        ,flexDirection:'row'
        ,padding:10
    }

});

