import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, {useState} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

const UserScreen = () => {

  
  return (
    <View style={styles.body} > 
        <Text style={styles.txtlogin}>Đăng nhập</Text>
        
        <View style={styles.containinput}>

        <Ionicons
            name="call"
            size={40}
          />
        <TextInput 
          style={styles.input}
          placeholder='Số điện thoại...'
        />
        
        </View>
        <View style={styles.containinput}>

        <Ionicons
            name="md-lock-closed"
            size={40}   
          />
        <TextInput 
          style={styles.input}
          placeholder='Mật khẩu...'
        />
        </View>

    </View>
  )
}

export default UserScreen

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'

  },
  txtlogin: {
    fontSize: 38,
    fontWeight: '500',
    top: -100,

  },
  input: {
    fontSize: 20,
    borderWidth: 1,
    width: 300,
    marginLeft: 10,
    marginTop: 10,

  },
  containinput: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  }
})