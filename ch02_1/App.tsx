import React from 'react'
import {Text} from 'react-native'

export default function App() {
  console.log("App called")
  const textElement = React.createElement(Text, null, 'Hello wolrd!!')
  return textElement
}