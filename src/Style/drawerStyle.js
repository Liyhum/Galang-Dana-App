import React from 'react'
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    viewDrawer:{
        backgroundColor: '#3EA898',
        flex:1
        // justifyContent:'space-around'
    },
    textProfile:{
        fontSize:16,
        color:'#9aede1',
        fontFamily:'OpenSans_600SemiBold'
    },
    textSetting:{
        fontSize:25,
        color:'#9aede1',
        fontFamily:'OpenSans_600SemiBold'
    },
    viewSetting:{
        height:'10%',
        justifyContent: 'center',
        marginLeft:'5%',
        marginTop:'10%'
    },
    viewText:{
        marginLeft:'5%',
        marginTop:'5%'
    },
    viewText2:{
        marginLeft:'5%'
    },
    viewLogout:{
        height:'100%',
        width:'100%'
    },
    Button:{
        height:'8%',
        width:'85%',
        margin: '5%',
        backgroundColor: '#e6f2ed',
        elevation:5,
        borderRadius:10,
        alignSelf:'center',
    },
    TextLogout:{
        color:'#e6f2ed',
        fontFamily:'OpenSans_600SemiBold',
        left:'8%'
    },
    LogOut:{
        height:'7%',
        width:'60%',
        backgroundColor: '#e6f2ed',
        elevation:5,
        borderRadius:10,
        alignSelf:'center'
    },
    TextLogout2:{
        color:'#e6f2ed',
        fontFamily:'OpenSans_600SemiBold',
        left:'3%'
    },
    TextLogout3:{
        color:'#e6f2ed',
        fontFamily:'OpenSans_600SemiBold',
        left:'5%'
    },
    circle:{
        height:'80%',
        width:'31%',
        borderRadius:100,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        elevation:5,
        marginTop:'4%'
    },
    nama:{
        color:'#e6f2ed',
        fontFamily:'OpenSans_600SemiBold',
    },
    viewNama:{
        justifyContent: 'center',
        marginRight:'35%'
    },
    viewUser:{
        height:'15%',
        justifyContent: 'space-between',
        marginHorizontal:'5%',
        flexDirection:'row'
    },
})
export default styles