import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      <View style={[styles.card , styles.cardElevated]}>
        <Image
            source={{uri:'https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGFqfGVufDB8fDB8fHww&w=1000&q=80'}}
            style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Taj Mahal</Text>
            <View style={styles.locationInfo}>
                <Image
                    source={{uri:'https://cdn-icons-png.flaticon.com/512/2775/2775994.png'}}
                    style={styles.locatiomImg}
                />
                <Text style={styles.cardLabel}> Agra, India</Text>
            </View>
            <Text style={styles.cardDesc}>An immense mausoleum of white marble, built in Agra between 1631 and 1648 by order of the Mughal emperor Shah Jahan in memory of his favourite wife, the Taj Mahal is the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage.</Text>
            <View style={styles.distanceInfo}>
                <Image
                    source={{uri:'https://cdn-icons-png.flaticon.com/512/1196/1196775.png'}}
                    style={styles.distImage}
                />
                <Text style={styles.cardFooter}>15 mins away</Text>
            </View>
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
        height:380,
        borderRadius:8,
        margin:6,

    },
    cardElevated:{
        backgroundColor:'white',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1,
        }
    },
    cardImage:{
        height:180,
        marginBottom:8,
        borderTopLeftRadius:8,
        borderTopRightRadius:8,
        
    },
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12,
    },
    cardTitle:{
        color:'black',
        fontSize:20,
        fontWeight:'bold',
        marginBottom:4
    },
    cardLabel:{
        color:'#E07C24',
        fontSize:12,
        margin:2
    },
    cardDesc:{
        color:'#242B2E',
        fontSize:12,
        marginBottom:12,
        marginTop:6,
        flexShrink:0,
        textAlign:'justify'
    },
    cardFooter:{
        color:'#1C8D73',
        margin:2,
        paddingLeft:4
    },
    locatiomImg:{
        height:20,
        width:20,
    },
    locationInfo:{
        flex:0,
        flexDirection:'row',

    },
    distanceInfo:{
        flex:0,
        flexDirection:'row',
    },
    distImage:{
        height:20,
        width:20,
    }

})