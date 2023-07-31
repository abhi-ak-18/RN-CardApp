import { ScrollView, StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
            "uid": 1,
            "name": "Elma Herring",
            "email": "elmaherring@unq.com",
            "phone": "+1 (913) 497-2020"
          },
          {
            "uid": 2,
            "name": "Knapp Berry",
            "email": "knappberry@unq.com",
            "phone": "+1 (951) 472-2967"
          },
          {
            "uid": 3,
            "name": "Bell Burgess",
            "email": "bellburgess@unq.com",
            "phone": "+1 (887) 478-2693"
          },
          {
            "uid": 4,
            "name": "Hobbs Ferrell",
            "email": "hobbsferrell@unq.com",
            "phone": "+1 (862) 581-3022"
          },
    ];
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container} scrollEnabled={false}
      >
        {contacts.map(({uid,name,email,phone}) => (
            <View key={uid} style={styles.userCard}>
                <Image
                    source={{uri:'https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png'}}
                    style={styles.userImage}
                />
                <View style={styles.userData}>
                    <Text style={styles.userName}>{name}</Text>
                    <Text style={styles.userEmail}>{email}</Text>
                    <Text style={styles.userPhone}>{phone}</Text>
                </View>
            </View>
        ))}
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
    container:{
        paddingHorizontal:16,
        marginBottom:6
    },
    userCard:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:8,
        backgroundColor:'#758283',
        borderRadius:6,
        padding:4
    },
    userImage:{
        height:60,
        width:60,
        borderRadius: 60/2,
        marginRight:14
    },
    userName:{
        fontSize:16,
        fontWeight:'900',
        color:'white'
    },
    userEmail:{
        fontSize:11,
        fontWeight:'500',
        color:'#03203C'
    },
    userPhone:{
        fontSize:11,
        fontWeight:'300',
        color:'#F4CE6A'
    },
    userData:{},

})