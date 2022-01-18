import Color from 'color'
import React from 'react'
//prettier-ignore
import { StyleSheet, SafeAreaView, Text, View } from 'react-native'
import { Platform } from 'react-native'
import { Dimensions } from 'react-native'
import {Colors} from 'react-native-paper'
import color from 'color'

console.log(Platform.OS)

const {width, height} = Dimensions.get('window')

export default function App() {
  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <Text style={[styles.text, {color: 'white'}]}>os: {Platform.OS}</Text>
      <Text style={[styles.text, {color: 'yellow'}]}>width : {width} px</Text>
      <Text style={[styles.text, {color: 'orange'}]}>height : {height} px</Text>

      <View style={[styles.box, {borderRadius: 10}]} />
      <View style={[styles.box, styles.border]} />
      <View style={[styles.box, styles.border, {borderRadius: 10}]} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  //%는 항상 부모 컴포넌트의 크기를 기준으로 한다.
  //paddingRight=paddingLeft -> paddingHorizontal로 control
  //paddingTop=paddingBottom -> paddingVertical로 control
  //Platform.select({ios: ~~, android: ~~}) 를 통해 운영체제별로 다르게 style속성값을 지정해줄 수 있다.
  safeAreaView: {backgroundColor: Colors.blue500, flex: 1, paddingLeft: Platform.select({ios: 0, android: 20})},
  text: {fontSize: 20, color: color(Colors.blue500).lighten(0.9).string(), marginBottom: 10, marginLeft: 50, marginTop: 20},
  box: { width: '70%', height: 100, backgroundColor: 'white', marginBottom: 10, marginLeft: Platform.select({ios: 20, android: 0})},
  border: { borderWidth: 10, borderColor : Colors.lime500}
})
