import React from "react";
import { View} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home";
import Shop from "../Screens/Shop";
import Orders from "../Screens/Orders";
import ChatList from "../Screens/ChatList";
import Profile from "../Screens/Profile";
import House from "../../assets/Svgs/House";
import House2 from "../../assets/Svgs/House2";
import Cart from "../../assets/Svgs/Cart";
import Handbag from "../../assets/Svgs/Handbag";
import Chat_Dots from "../../assets/Svgs/Chat_Dots";
import User from "../../assets/Svgs/User";
import SvgImport from "./SvgImport";
import Cart2 from "../../assets/Svgs/Cart2";
import Handbag2 from "../../assets/Svgs/Handbag2";
import Chat_Dots2 from "../../assets/Svgs/Chat_Dots2";
import User2 from "../../assets/Svgs/User2";


const Tab = createBottomTabNavigator();

export default function NavBar(){


    return(
      <View style={{flex:1}}>
          <Tab.Navigator
          screenOptions={{
            tabBarLabel:'',
          }}
          >
            <Tab.Screen
            options={{
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                <View style={{flexDirection:'column', marginTop:10}}>
                <View style={{ backgroundColor: focused?'#F9AC16':'white', width:28, height:5, justifyContent:'center', bottom:7, borderBottomLeftRadius:3, borderBottomRightRadius:3}}/>
              <SvgImport svg={focused? House2: House}/>
              </View>
              ),
            }} name="Home" component={Home} />
            <Tab.Screen options={{ headerShown: false,
              tabBarIcon: ({ focused }) => (
                <View style={{flexDirection:'column', marginTop:10}}>
                <View style={{ backgroundColor: focused?'#F9AC16':'white', width:28, height:5, justifyContent:'center', bottom:7, borderBottomLeftRadius:3, borderBottomRightRadius:3}}/>
              <SvgImport svg={focused? Cart2: Cart}/>
              </View>
              ), }} name="Shop" component={Shop} />
            <Tab.Screen options={{ headerShown: false,
              tabBarIcon: ({ focused }) => (
                <View style={{flexDirection:'column', marginTop:10}}>
                <View style={{ backgroundColor: focused?'#F9AC16':'white', width:28, height:5, justifyContent:'center', bottom:7, borderBottomLeftRadius:3, borderBottomRightRadius:3}}/>
              <SvgImport svg={focused? Handbag2: Handbag}/>
              </View>
              ), }} name="Orders" component={Orders} />
            <Tab.Screen options={{ headerShown: false,
              tabBarIcon: ({ focused }) => (
                <View style={{flexDirection:'column', marginTop:10}}>
                <View style={{ backgroundColor: focused?'#F9AC16':'white', width:28, height:5, justifyContent:'center', bottom:7, borderBottomLeftRadius:3, borderBottomRightRadius:3}}/>
              <SvgImport svg={focused? Chat_Dots2: Chat_Dots}/>
              </View>
              ), }} name="ChatList" component={ChatList} />
            <Tab.Screen options={{ headerShown: false,
              tabBarIcon: ({ focused }) => (
                <View style={{flexDirection:'column', marginTop:10}}>
                <View style={{ backgroundColor: focused?'#F9AC16':'white', width:28, height:5, justifyContent:'center', bottom:7, borderBottomLeftRadius:3, borderBottomRightRadius:3}}/>
              <SvgImport svg={focused? User2 : User}/>
              </View>
              ), }} name="Profile" component={Profile} />
          </Tab.Navigator>
          </View>
    )
}