import React from 'react';
import {Font} from 'expo'
import { StyleSheet } from "react-native";
import {fonts} from '../../assets/fonts/Font'

const styles = StyleSheet.create({
    viewHome:{
        flex:1,
        backgroundColor: '#e6f2ed',
    },
    linear:{
        justifyContent:'center',height:'100%',
        width:"100%",
        borderRadius:10
    },
    viewBalance:{
        height:'50%',
        width:'88%',
        borderRadius:10,
        alignSelf:'center',
        marginTop:'5%',
        justifyContent: 'center',
    },
    Send:{
        height:'45%',
        width:'40%',
        backgroundColor: 'white',
        elevation:5,
        borderRadius:30,
        marginRight:'6%',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:'5%'
    },
    Send2:{
        height:'45%',
        width:'40%',
        backgroundColor: 'white',
        elevation:5,
        borderRadius:30,
        marginLeft:"6%",
        justifyContent:'center',
        alignItems:'center',
        marginBottom:'5%'
    },
    kirimDonasi:{
        fontSize:15,
        color:"#3EA898",
        top:'5%'
    },
    spending:{
        height:'55%',
        width:'55%',
        tintColor:'white',
        alignSelf:'center',
        bottom:'6%'
    },
    income:{
        height:'55%',
        width:'55%',
        tintColor:'white',
        alignSelf:'center'
    },
    history:{
        height:60,
        width:'88%',
        backgroundColor: 'white',
        elevation:3,
        borderRadius:3,
        alignSelf:'center',
        margin:'2%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row',
        paddingHorizontal:'5%'
    },
    flatlist:{
        bottom:'5%',         
    },
    Activity:{
        height:'5%',
        width:'100%',
        justifyContent: 'center',
        flexDirection:'row'
    },
    textActivity:{
        fontSize:15,
        fontWeight:'bold',
        marginHorizontal:'15%',
        color:'#3EA898'
    },
    viewImg:{
        height:50,
        width:50,
        backgroundColor: '#0059ff',
        borderRadius:50,
        justifyContent: 'center',
        alignItems: 'center',
        elevation:5
    },
    topup:{
        fontSize:15,
        color:"#3EA898",
        top:'5%'
    },
    viewSend:{
        height:'50%',
        width:'100%',
        alignItems:'center',
        justifyContent: 'center',
        flexDirection:'row',
        
    },
    textSaldo:{
        fontSize:20,
        color:'#e6f2ed',
        fontFamily:'OpenSans_400Regular_Italic'
    },
    textRupiah:{
        fontSize:30,
        color :'#e6f2ed',
        fontFamily:'OpenSans_600SemiBold'
    },
    textRupiah2:{
        fontSize:20,
        color :'#e6f2ed',
        alignSelf:'center',
    },
    Money:{
        alignItems:'flex-start',
        width:'30%'
    },
    name:{
        color:'#3EA898'
    },
    saldo:{
        color:'#3EA898'
    }
})

export default styles