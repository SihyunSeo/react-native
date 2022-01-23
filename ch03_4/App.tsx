import React from "react";
import { StyleSheet, SafeAreaView, View, Platform, Alert } from "react-native";
import { Colors } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import TopBar from "./src/screens/TopBar";
import Content from "./src/screens/Content";
import BottomBar from "./src/screens/BottomBar";

export default function App() {
  const iconPressed = () => Alert.alert('아이콘이 눌렸습니다.')

  return (
    <SafeAreaView style={styles.flex}>
      <TopBar />
      <Content />
      <BottomBar />
      <View style={[styles.absoluteView]}>
        <Icon name="plus" size={50} color="white" onPress={iconPressed} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  flex: {flex: 1, backgroundColor: Colors.lightBlue100},
  absoluteView: {
    position: 'absolute',
    right: 30,
    bottom: Platform.select({ios: 100, android: 60}),
    padding: 10,
    borderRadius: 35,
    backgroundColor : Colors.purple900
  }
})