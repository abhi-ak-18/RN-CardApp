import { StyleSheet, Text, View,Linking ,Image, TouchableOpacity} from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(weblink: string){
        Linking.openURL(weblink)
      }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card , styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                What's new in Javascript
            </Text>
        </View>
        <Image
            source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png'}}
            style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
            <Text numberOfLines={3} style={styles.bodyText}>
            In conclusion, ECMAScript 2022 is the latest version of the ECMAScript standard, which provides a set of rules and guidelines for programming languages such as JavaScript. It includes new features such as private class fields, optional chaining, and null coalescing, as well as updates to existing features.
            </Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity onPress={() => openWebsite('https://www.infoworld.com/article/3665748/8-new-javascript-features-to-start-using-today.html')}>
                <Text style={styles.readmoreLink}>Read More ...</Text>
            </TouchableOpacity>
        </View>
      </View>
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
        width:340,
        height:480,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:10
    },
    elevatedCard:{
        backgroundColor:'#03203C',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1,
        },
        shadowColor:'#333',
        shadowOpacity:0.4
    },
    headingContainer:{
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    headerText:{
        color:'white',
        fontSize:16,
        fontWeight:'600'
    },
    cardImage:{
        height:330,
        width:340,
        borderTopLeftRadius:6,
        borderTopRightRadius:6
    },
    bodyContainer:{
        padding:10,
    },
    footerContainer:{
        padding:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    readmoreLink:{
        fontSize:16,
        color:'black',
        backgroundColor:'#CAD5E2',
        paddingHorizontal:10,
        paddingVertical:3,
        borderRadius:6
        
    },
    bodyText:{
        fontSize:13,
        textAlign:'justify'
    }


})