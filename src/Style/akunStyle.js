import React from 'react';
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    viewHome:{
        flex:1,
        backgroundColor: '#3EA898'
    },
    viewAkun:{
        height:250,
        width:'100%',
        backgroundColor: '#3EA898',
    },
    showProfile:{
        height:250,
        width:'100%',
    },
    avatar:{
        // backgroundColor: 'red',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        height:'60%',
        justifyContent:'space-between',
    },
    circle:{
        height:'60%',
        width:'25%',
        borderRadius:100,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        elevation:10,
        marginLeft: '5%',
        marginTop: '10%',
    },
    viewTextInput:{
        width:'80%',
        marginTop:'5%',
        alignSelf:'center'
    },
    textEditProfile:{
        fontSize:20,
        color:'#3EA898',
        fontFamily:'OpenSans_600SemiBold',
        marginTop:'5%',
        alignSelf:'center'
    },
    viewHeader:{
        alignItems: 'flex-end',
        flexDirection:'row',
        justifyContent:'space-between',
        height:'25%',
        marginBottom:'5%',
        alignItems:'center'
    },
    headerText:{
        fontSize:20,
        color:'#e6f2ed',
        marginTop:'10%'
    },
    viewTextEdit:{
        width:'80%',
        height:'20%',
        alignSelf:"center",
        borderBottomWidth:2,
        marginTop:'5%',
        justifyContent: 'center',
        borderColor:'#3EA898',
        marginTop:'8%',
    },
    viewEdit:{
        height:470,
        width:'100%',
        backgroundColor: '#e6f2ed',
        top:'5%',
        borderTopRightRadius:50,
        borderTopLeftRadius:50
    },
    Edit:{
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    text:{
        fontSize:19,
        color:'#e6f2ed',
        fontWeight:'100',
        // fontFamily:'OpenSans_400Regular',
        fontFamily:'OpenSans_600SemiBold',
        marginRight: '10%',
        marginTop:'15%'
    },
    input:{
        marginBottom: '5%',
    },
    icon:{
        marginRight:'5%',
        marginLeft:'5%',
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