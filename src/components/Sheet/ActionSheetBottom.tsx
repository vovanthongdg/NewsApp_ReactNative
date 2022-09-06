import { StyleSheet, Text, View  } from 'react-native'
import React, {useRef, createRef, useState } from 'react'
import ActionSheet, {
    ActionSheetRef,
    SheetProps,
  } from 'react-native-actions-sheet';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Slider from '@react-native-community/slider'
import {useSelector, useDispatch} from 'react-redux'
import {setFont} from '../../redux/actions'

function ActionSheetBottom({sheetId, payload}: SheetProps<{data: string}>) {

    const actionSheetRef = useRef<ActionSheetRef>(null);
    const {font} = useSelector(state => state.fontReducer);
    const dispatch = useDispatch();
    

    // const [range, setRange] = useState(0);

    // dispatch(setFont(font));

  return (
    <ActionSheet
      id={sheetId}
      ref={actionSheetRef}
      containerStyle={{
        borderTopLeftRadius:25,
        borderTopRightRadius:25
      }}
      indicatorStyle={{
        width:100
      }}
      gestureEnabled={true}>
      <View style={styles.containline}>
        <View style={styles.line1}>
          <Ionicons 
            size={25} 
            name="options-sharp" 
            style={styles.icon}
                
          />
          <Text style={{fontSize: 20}}>Cỡ Chữ</Text>
          <Slider

            value={font}
            style={styles.slider}
            minimumValue={20}
            maximumValue={32}
            step={2}
            onValueChange={(value)=> {
              dispatch(setFont(value))
            }}
            // onSlidingStart={(value) => {
            //   dispatch(setFont(value))
            // }}
            
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"

          />
        </View>

        <View style={{flexGrow:1}}>
          
        </View>
        
      </View>
    </ActionSheet>
  )
}

export default ActionSheetBottom

const styles = StyleSheet.create({
  containline:{
    padding:20,
    height:300,
    flexDirection:'column',
    width:'100%',
    backgroundColor: '#3ad'
  },
  line1:{
    
    // width:50,
    // height:50,
    marginRight:10,
    flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
    
    
  },
  icon: {
    right: 5,
  },
  text: {
    fontSize: 20,
  },
  slider: {
    
    width: 200,
    height: 40,
    
    alignItems: 'flex-end',
    // alignSelf: 'flex-end',
  }


})