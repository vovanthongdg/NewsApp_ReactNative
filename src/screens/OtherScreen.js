import { Image, ScrollView, StyleSheet, Text, Touchable, View } from 'react-native'
import React, {useState} from 'react'
import xoso from '../assets/img/xoso.png'
import giavang from '../assets/img/giavang.png'
import thoitiet from '../assets/img/thoitiet.png'
import lich from '../assets/img/lich.jpg'
import {windowWidth, windowHeight} from '../utils/Dimensions'
import { TouchableOpacity } from 'react-native-gesture-handler'


const OtherScreen = () => {

  
  return (
    <ScrollView style={styles.container}>
      <View style = {styles.body}>
        <Text style={styles.text}>Xổ Số</Text>
        <TouchableOpacity>
          {/* <View style={styles.containImage}> */}
          <Image 
            source={xoso} 
            style={styles.image}
            resizeMode="stretch"
          
          />
          {/* </View> */}
        </TouchableOpacity>
        

        <Text style={styles.text}>Thời Tiết</Text>
        <TouchableOpacity>
        
          <Image 
            source={thoitiet} 
            style={styles.image}
            resizeMode="stretch"
          
          />
        </TouchableOpacity>

        <Text style={styles.text}>Lịch</Text>
        <TouchableOpacity>
        
          <Image 
            source={lich} 
            style={styles.image}
            resizeMode="stretch"
          
          />
        </TouchableOpacity>

        <Text style={styles.text}>Giá Vàng</Text>
        <TouchableOpacity>
        
          <Image 
            source={giavang} 
            style={styles.image}
            // resizeMode="stretch"
          
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
    
  )
}

export default OtherScreen

const styles = StyleSheet.create({
  body: {
    flex: 1, 
    backgroundColor: '#fff',
    
    
  },
  text: {
    
    color: '#000',
    marginLeft: 5,
    marginTop: 5,
    marginBottom: 5,
    fontSize: 30,
    fontWeight: '500',
  },
  image: {
    width: '95%',
    height: windowWidth/2,
    // resizeMode: "contain",
    alignSelf: "center",
    borderWidth: 1,
    borderRadius: 20,
    
    
  },
  container: {
    
  }
})