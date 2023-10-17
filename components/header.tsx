import React from "react";
import {View, Text, StyleSheet, Image} from 'react-native'

const Header = () => {
    return (
        <View style={style.header}>
        <Image style={style.userProfileImg} source={require('../assets/img/pro.jpg')} />
        <Text style={style.headerText}>Notes App</Text>
      </View>
    );
}

export default Header;

const style = StyleSheet.create({
    header:{
      flexDirection:'row',
      flexWrap:'nowrap',
      justifyContent:'space-between',
      alignItems:'center',
      borderWidth:1,
      borderBottomColor:'#000',
      height:60,
    },
    userProfileImg:{
      marginHorizontal:20,
      marginVertical:10,
      width:50,
      height:50,
      borderRadius:70,
      backgroundColor:'#000'
    },
    headerText:{
      fontSize:20,
      color:'#000',
      fontWeight:'800',
      marginHorizontal:20,
    }
  
  })