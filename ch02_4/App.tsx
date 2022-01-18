import React from 'react'
import { SafeAreaView, Alert, Button } from 'react-native'
import { TouchableOpacity, TouchableHighlight, Text } from 'react-native'
import { TextInput } from 'react-native'

// export default function App() {
//   return (
//     <SafeAreaView>
//       {/* alert 속성값중 첫번째는 타이틀 두번째는 메세지를 의미한다. */}
//       <Button title='Home' onPress={() => Alert.alert('home pressed.', 'message')} />
//     </SafeAreaView>
//   )
// }

const onPress = () => Alert.alert('home pressed.', 'message')

export default function App() {
  return (
    <SafeAreaView>
      <Button title='home' onPress={onPress} />
      <TouchableOpacity onPress={onPress}>
        <Text>TouchableOpacity</Text>
      </TouchableOpacity>
      <TouchableHighlight onPress={onPress}>
        <Text>TouchableHighlight</Text>
      </TouchableHighlight>
      <TextInput 
        placeholder='enter your name' 
        onChangeText={(text : string) => console.log(text)} 
        onFocus={() => console.log('onFocus')} 
        onBlur={() => console.log('onBlur')} 
        onEndEditing={() => console.log('onEndEditing')} />
    </SafeAreaView>
  )
}