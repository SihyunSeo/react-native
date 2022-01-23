import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Colors } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import * as D from '../data'

const iconSize = 30, iconColor = 'white'
const icons = ['home', 'table-search', 'face-profile-woman', 'account-settings']

export default function BottomBar() {
    const children = icons.map((name) => (
        <Icon key={name} name={name} size={iconSize} color={iconColor} />
    ))
    return <View style={styles.view}>{children}</View>
}

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 5, 
        backgroundColor: Colors.blue900
    },
    text: {fontSize: 20, color: 'white'}
})