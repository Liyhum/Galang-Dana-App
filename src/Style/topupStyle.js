import React from 'react';
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    viewContainer:{
        height:200,
        backgroundColor: '#3EA898',
        position: 'relative',
    },
    viewContainer2:{
        backgroundColor: '#e6f2ed',
        height:'30%'
    },
    header:{
        height:50,
        backgroundColor: '#3EA898',
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    textTopup:{
        fontSize:17,
        color:'#e6f2ed',
        fontFamily:'OpenSans_600SemiBold',
    },
    ViewContent:{
        backgroundColor:'#e6f2ed',
        elevation:4,
        width:'90%',
        alignSelf:'center',
        borderRadius:10,
        height:210,
        marginBottom:'5%',
        position:'absolute',
        top:'20%'
    },
    viewValue:{
        height:35,
        width:'80%',
        borderRadius:20,
        elevation:2,
        backgroundColor: '#e6f2ed',
        justifyContent: 'center',
        alignItems:"center",
        marginTop:'20%',
        alignSelf:'center',
        marginBottom:'10%'
    },
    textCard:{
        fontSize:15,
        color:'#3EA898',
        fontFamily:'OpenSans_600SemiBold',
        margin:'5%'
    },
    viewAddHarga:{
        height:150,
        width:'90%',
        backgroundColor: '#e6f2ed',
        elevation:4,
        alignSelf:'center',
        borderRadius:10,
        justifyContent: 'center',
        alignItems:"center",
        justifyContent: 'space-between',
        flexDirection:'row',
        marginBottom:'5%',
        marginTop:'30%'
    },
    Addharga:{
        elevation:3,
        backgroundColor: '#e6f2ed',
        width:'63%',
        height:'30%',
        borderRadius:40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ButtonSubmit:{
        alignSelf:'center',
        height:50,
        width:'80%',
        backgroundColor:'#3EA898',
        elevation:3,
        borderRadius:30,
        marginBottom:'5%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default styles