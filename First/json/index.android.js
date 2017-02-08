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
    View
    ,ToastAndroid
    ,ListView
    ,Image
} from 'react-native';


class First extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态


        var datas=require('./json/shop.json');

        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        var dataSource= ds.cloneWithRows(datas);
        this.state = {dataSource:dataSource};
    }
    render() {
        return (
            <View style={styles.container}>
                <ListView initialListSize ={1} dataSource={this.state.dataSource} renderRow={this.getItem} renderSeparator={this.getSeparator} ></ListView>
            </View>

        );
    }
    getItem(rowData, sectionID, rowID, highlightRow){
        return(
            <View style={styles.listItemContainer}>

                <Image source={{uri:rowData.pic}} style={styles.listItemImage}></Image>
                <Text style={styles.listItemText}>{rowData.title}</Text>
                <Image source={require('./pics/arrow.png')}></Image>
            </View>
        );
    }

    getSeparator(sectionID, rowID, adjacentRowHighlighted){
        return(
            <View key={rowID} style={{height:2,backgroundColor:'#000'}}></View>
        );
    }

}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF'
        ,flex:1
    }
    ,listItemContainer:{
        flexDirection:'row'
        ,height:80
        ,backgroundColor:'#FFF'
        ,padding:5
        ,alignItems:'center'

}
    ,listItemImage:{

        width:70,
        height:70,
        resizeMode:'cover'
        ,borderRadius:70
    }

    ,listItemText:{
        fontSize:20
        ,fontWeight:'bold'
        , margin:15
        ,flex:1
    }
});

AppRegistry.registerComponent('First', () => First);
