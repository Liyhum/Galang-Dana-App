import React from 'react';
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    viewHome:{
        flex:1,
        backgroundColor: '#3EA898'
    },
    viewAkun:{
        height:'60%',
        width:'100%',
        backgroundColor: '#3EA898',
        flex:1,
    },
    avatar:{
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        height:'60%'
    },
    circle:{
        height:'74%',
        width:'35%',
        borderRadius:100,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        elevation:10
    },
    viewHeader:{
        alignItems: 'flex-end',
    },
    viewEdit:{
        height:'60%',
        width:'100%',
        backgroundColor: '#e6f2ed',
        borderTopStartRadius:50,
        borderTopEndRadius:50
    },
    text:{
        fontSize:20,
        color:'#e6f2ed',
        marginTop:'5%',
        fontWeight:'100'
    },
    input:{
        marginBottom: '5%',
    },
    icon:{
        marginRight:'5%',
        marginTop:'10%',
    },
    viewText:{
        fontSize:25,
        color:'#e6f2ed',
        marginLeft:'5%',
        marginTop:'10%'
    }
})

export default styles