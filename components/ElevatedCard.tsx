import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCard() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Card</Text>
      <ScrollView  horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Tap 2</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Tap 3</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Tap 4</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Tap 5</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Tap 6</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
    },
    card:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:100,
        borderRadius:4,
        margin:8,
    
    },
    cardElevated:{
        backgroundColor:'#F4CE6A',
    },
    container:{
        padding:8,
    },
})