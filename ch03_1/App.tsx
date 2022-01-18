import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { StyleSheet } from 'react-native'
// 구글 머티리얼 디자인 -> 구글 색상표 활용 가능
// npm i react-native-vector-icons react-native-paper
import { Colors } from 'react-native-paper'

// npm i color
// npm i -D @types/color
import Color from 'color'

//#2196f3
console.log(Colors.blue500)
//hsla(206.60000000000002, 89.7%, 81.2%, 0.5)
console.log(Color(Colors.blue500).alpha(0.5).lighten(0.5).string())
export default function App() {
  return (
    //style 마크업 언어와 달리 문자열이 아니라 객체이다. // 안쪽 중괄호 -> 객체, 바깥쪽 중괄호 -> JSX구문에서 자바스크립트 코드를 설정할때 사용
    <SafeAreaView style={[styles.safeAreaView]}>
      <Text style={[styles.text]}>Hello wolrd!!!</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeAreaView: {flex:1, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.blue500},
  text: {fontSize: 20, color:Color(Colors.blue500).alpha(0.7).lighten(0.9).string()}
})
