import React from 'react'
import { StyleSheet, SafeAreaView, ImageBackground, Image, Text, Platform, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {Colors} from 'react-native-paper'

const onIconPressed = () => console.log('icon pressed')
const avatarSize = 50

export default function App() { 
    return(
        <SafeAreaView style={[styles.flex]}>
        <ImageBackground
            style={[styles.flex, styles.imageBackground]}
            source={require('./src/assets/images/image1.jpeg')}
        >
        <Image source={{uri: './src/assets/images/image2.jpeg'}} style={[styles.image]} />
        <View>
            <Text style={[styles.medium]}>some text here</Text>
            <Text style={[styles.regular]}>some text here</Text>
            <Text style={[styles.semiBold]}>some text here</Text>
            <Text style={[styles.bold]}>some text here</Text>
        </View>
        
        </ImageBackground>
        <Icon name='home' size={50} color={Colors.lightBlue500} onPress={onIconPressed}/>
        </SafeAreaView>
    ) 
}

const styles = StyleSheet.create({
    flex: {flex: 1},
    imageBackground: {padding: 10},
    image: {width : avatarSize, height: avatarSize, borderRadius: avatarSize /2},
    regular: {fontFamily: 'DancingScript-Regular', fontSize: 70, fontWeight: '400'},
    medium: {fontFamily: 'DancingScript-Medium', fontSize: 70, fontWeight: '500'},
    semiBold: {fontFamily: 'DancingScript-SemiBold', fontSize: 70, fontWeight: '600'},
    bold: {fontFamily: 'DancingScript-Bold', fontSize: 70, fontWeight: Platform.select({ios: '700', android: '600'})},
})