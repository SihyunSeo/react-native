import React from "react";
import { StyleSheet, Text, View, Image} from "react-native";
import { Avatar, Colors } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { imagePath } from '../../imagePath'

const first = 'first'
const second = 'second'
const third = 'third'
const forth = 'forth'

export default function TopBar() {
    return (
        <View style={[styles.view]}>
            <Image style={styles.avatar} source={{uri : forth}} />
            <View style={styles.centerView}>
                <Text style={[styles.text]}>image</Text>
            </View>
            <Icon name="menu" size={24} color={'white'} />
        </View>

    )
}

const styles = StyleSheet.create({
    view : {
        flexDirection: 'row',
        alignItems: 'center',
        padding:5, 
        backgroundColor:Colors.blue900
    },
    text : {fontSize: 20, color: 'white'},
    avatar: {width: 40, height: 40, borderRadius: 20},
    centerView: {flex: 1}

})