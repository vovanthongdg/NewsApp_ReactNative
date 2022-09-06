import React, { useLayoutEffect } from "react";
import { createStackNavigator, Header } from "@react-navigation/stack";


import BottomTabNavigator from "./BottomTabNavigator";
import CustomTabBar from "../components/CustomTabBar";
import Categories from "../components/Categories";
import CustomHeader from "../components/CustomHeader";
import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getFocusedRouteNameFromRoute, useNavigation, useRoute } from "@react-navigation/native";
import {DrawerActions} from '@react-navigation/native';
import DrawerNavigator from "./DrawerNavigator";
import SearchScreen from "../screens/SearchScreen";
import UserScreen from "../screens/UserScreen";
import NewsDetail from "../screens/NewsDetail";
import SplashScreen from "../screens/SplashScreen";

const Stack = createStackNavigator();



const StackNavigator = () => {
  
  

 

  return (
    <Stack.Navigator id="stack" 
      initialRouteName="splash"
    
      screenOptions={({ navigation }) => ({
        headerShown: false,
        // headerMode: 'screen',
        // // header = {(props) => <CustomTabBar {...props} />}
        
        
        // headerStyle: {
        //   backgroundColor: '#54700b',

          
          
        // },
        
        // headerLeft: () => (
        //   <View>
        //     <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        //       <Ionicons 
        //         size={25} 
        //         // color="white" 
        //         name="md-list" 
                
        //         />
        //     </TouchableOpacity>
        //   </View>
          
        // ),
        
        // headerTitle:'gdfklg',
        
              
      })}
   
    >
      <Stack.Screen name="splash" component={SplashScreen} />
      <Stack.Screen name="stack" component={DrawerNavigator} 
        options={({route}) => {
          // const routeName = getFocusedRouteNameFromRoute(route);
          // const routeName = route.name;
          // console.log(routeName);
          return {
            // headerShown: routeName == 'Tin Tức',
          };
       }}
      />

      
      
      {/* <Stack.Screen name="NewsDetail" component={NewsDetail}/>
      <Stack.Screen name="search" component={SearchScreen} />
      <Stack.Screen name="user" component={UserScreen} /> */}
      
    </Stack.Navigator>
  );
}

export default StackNavigator;