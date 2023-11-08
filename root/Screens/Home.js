import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, ScrollView, Modal } from "react-native";
import Header2 from "../Components/Header2";
import { Feather } from "@expo/vector-icons";
import SvgImport from "../Components/SvgImport";
import upper from "../../assets/Svgs/upper";
import Lower from "../../assets/Svgs/Lower";
import Start from "../../assets/Svgs/Start";
import { FlatList } from "react-native";
import FlatItems2 from "../Components/FlatItems2";
import { Pressable } from "react-native";
import data from "../Components/Data";
import Option from "../../assets/Svgs/Option";
import { useTheme } from "../Theme/ThemeContext";
import ChevronLeft from "../../assets/Svgs/ChevronLeft";


export default function Home({navigation}){

    const [modalVisible, setModalVisible] = useState(false);
    const [text, setText] = useState('');
    const [found, setFound] = useState([]);

    const handleSearch=(text)=>{
        setText(text);
        const searchedData = data.filter((item)=> item.text.toLowerCase().includes(text));
        setFound(searchedData);
        console.log(found);
    }

    const handleModal=()=>{
        setModalVisible(true);
    }

    const theme = useTheme();

    return(
        <View style={styles.container}>
            <Header2 image={require('../../assets/Profile.png')} text={'Home'} image2={Option} click1={()=>{navigation.navigate('EditProfile')}} click2={()=>{navigation.navigate('Profile')}}/>
            <ScrollView style={{flex:1}}
            showsVerticalScrollIndicator={false}> 
            <View
            style={[theme.screenPadding,{padding:10}]}>
            <Text
            style={styles.text}>👋 Hello!</Text>
            <Text
            style={{
                width:'100%',
                fontWeight:'600',
                fontSize:24,
                width:256,
                height:80,
                lineHeight:36,
            }}>What would you like to book</Text>
            <View style={{
            flexDirection:'row',
            alignItems:'center',
            paddingTop:10,
            width:345,
            height:51, 
            justifyContent:'center'
            }}>
                <Pressable onPress={handleModal}>
                <View style={{ flexDirection:"row",
                         borderRadius:10, 
                         width:340,
                         height:51,
                         borderRadius:8,
                         elevation:8,
                         backgroundColor:theme.colors.primary,
                         padding:10
                         }}>
                    <Feather name="search" size={20} color={theme.colors.tertiary} style={{marginTop:5}}/>
                    <Text
                    style={{
                         width:250,
                         color:theme.colors.tertiary,
                         fontSize:14,
                         fontWeight:'400',
                         lineHeight:31,
                         marginLeft:5,
                         }}>Find for a digger...</Text>
               </View>
               </Pressable>
               {/* <View style={{ height:51, width:51, marginLeft:15, borderRadius:8, alignItems:'center', elevation:8, backgroundColor:theme.colors.primary, }}>
                <SvgImport svg={upper} style={{marginTop:16}}/>
                <SvgImport svg={Lower}/>
               </View> */}
            </View>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between', width:350, alignItems:'center'}}>
                <Text style={{fontWeight:'600', fontSize: 22, lineHeight:33, width:173, height:33, marginLeft:15}}>Recommended</Text>
                <Pressable onPress={()=>{navigation.navigate('Shop')}}>
                <Text style={{fontWeight:'400', fontSize: 14, lineHeight:21}}>View All</Text>
                </Pressable>
            </View>
            <View style={{height:200}}>
            <FlatList
            style={{overflow:'scroll'}}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={data}
            keyExtractor={(item)=> item._id}
            renderItem={({item})=>{
            return(
                <Pressable onPress={()=>{navigation.navigate('Details')}}>
            <View style={{padding:10}}> 
            <FlatItems2 image={item.image} text={item.text} star={Start} rate={item.rate} price={item.price}/>
            </View>
            </Pressable>
            );
            }}/>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between', width:350, alignItems:'center'}}>
                <Text style={{fontWeight:'600', fontSize: 22, lineHeight:33, width:173, height:33, marginLeft:15}}>Most Popular</Text>
                <Pressable onPress={()=>{navigation.navigate('Shop')}}>
                <Text style={{fontWeight:'400', fontSize: 14, lineHeight:21}}>View All</Text>
                </Pressable>
            </View>
            <FlatList
            data={data}
            numColumns={2}
            keyExtractor={(item)=> item._id}
            renderItem={({item})=>{
            return(
            <View style={{padding:10}}> 
            <Pressable onPress={()=>{navigation.navigate('Details')}}>
            <FlatItems2 image={item.image} text={item.text} star={Start} rate={item.rate} price={item.price}/>
            </Pressable>
            </View>
            );
            }}/>
            </ScrollView>
            <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={()=>{
            setModalVisible(!modalVisible);
        }}
        supportedOrientations={['portrait', 'landscape']}
        useNativeDriver={true}
        >
            <View style={{flexDirection:'column', alignItems:'center', height:'100%'}}>
        <View style={{ flexDirection:"row",
                         borderRadius:10, 
                         width:330,
                         height:51,
                         borderRadius:8,
                         elevation:8,
                         backgroundColor:theme.colors.primary,
                         padding:10, 
                         marginTop:10
                         }}>     
                         <Pressable onPress={()=>{setModalVisible(false)}}>
                         <SvgImport svg={ChevronLeft} style={{marginTop:5, marginRight:10}}/>
                         </Pressable>
                    <Feather name="search" size={20} color={theme.colors.tertiary} style={{marginTop:5}}/>
                    <TextInput
                    placeholder="Find for a digger"
                    value={text}
                    onChangeText={(data)=>{handleSearch(data)}}
                    style={{
                         width:250,
                         color:theme.colors.tertiary,
                         fontSize:14,
                         fontWeight:'400',
                         lineHeight:21,
                         marginLeft:5,
                         justifyContent:'center', 
                         alignItems:'center', 
                         }}/>
               </View>
            <FlatList
            data={found}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item)=> item._id}
            renderItem={({item})=>{
            return(
            <View style={{padding:10}}> 
            <Pressable onPress={()=>{navigation.navigate('Details')}}>
            <FlatItems2 image={item.image} text={item.text} star={Start} rate={item.rate} price={item.price}/>
            </Pressable>
               </View>
            );
            }}/>
            </View>
        </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        height:'100%',
    },
    text:{
        width:208,
        fontWeight:'600',
        fontSize:28,
        height:42,
    }
})