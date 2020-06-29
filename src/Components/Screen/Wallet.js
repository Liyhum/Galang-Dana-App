import React,{useEffect,useState} from 'react';
import {Font} from 'expo'
import { View,Text,Image ,FlatList,YellowBox} from "react-native";
import styles from '../../Style/walletStyle'
import {LinearGradient} from 'expo-linear-gradient'
import {Data} from '../../Assets/tempData'
function convertToRupiah(angka)
{
	var rupiah = '';		
	var angkarev = angka.toString().split('').reverse().join('');
	for(var i = 0; i < angkarev.length; i++) if(i%3 == 0) rupiah += angkarev.substr(i,3)+'.';
	return rupiah.split('',rupiah.length-1).reverse().join('');
}

const _renderItem = (item) =>{
    const conver =convertToRupiah(item.saldo)
    const change = item.bulan
    console.log(change,"GAS")
    console.ignoredYellowBox = [
        'Setting a timer'
    ];
    return(
        <View style={[styles.history,{justifyContent: 'space-between',}]}>
            <Text style={styles.name}>
                {item.name}
            </Text>
            <View style={styles.Money}>    
                <Text style={styles.saldo}> 
                    Rp.
                    {conver}
                </Text>
                <Text style={styles.saldo}>
                    {change}
                </Text>
            </View>
        </View>
    )
}
const Wallet = () =>{
    
    console.ignoredYellowBox = [
        'Setting a timer'
    ];
    const [data,setData] = useState(Data)
    const Data2 = data.slice(0,3)
    const saldo =data;
    let jumlah = 0
    saldo.forEach((item)=>
        jumlah += item.saldo
    )
    const rupiah = convertToRupiah(jumlah)
    return(
        <View style={styles.viewHome}>
            <View style={styles.viewBalance}>
                <LinearGradient
                colors={['#3EA898','#dbfff9']}
                style={{flex:1,borderRadius:10}}
                start={{x:1,y:0}}
                end = {{x:0,y:1}}
                style={styles.linear}
                >
                <View style={styles.viewSaldo}> 
                    <Text style={styles.textSaldo}>
                        Saldo
                    </Text>
                    <Text style={styles.textRupiah2}>
                        Rp  
                            <Text style={styles.textRupiah}>
                                {rupiah}
                            </Text>
                    </Text>
                </View>
                </LinearGradient>
            </View>
            <View style={[styles.viewSend,{justifyContent: 'space-between',}]}>
                <View style={styles.Send2}>
                    <View style={styles.viewImg}>
                        <LinearGradient
                        colors={['#0084ff','#e6fbff']}
                        style={{height:'100%',width:'100%',borderRadius:90,justifyContent: 'center',}}
                        start={{x:1,y:0}}
                        end={{x:0,y:1.5}}
                        >
                            <Image 
                            source={require('../../../assets/images/income.png')} 
                            style={styles.income}
                            />
                        </LinearGradient>
                    </View>
                    <Text style={styles.topup}>
                        Top up
                    </Text>
                </View>
                <View style={styles.Send}>
                    <View style={styles.viewImg}>
                        <LinearGradient
                        colors={['#fc6aae','#e6fbff']}
                        style={{height:'100%',width:'100%',borderRadius:90,justifyContent: 'center',}}
                        start={{x:1,y:0}}
                        end={{x:0,y:1.5}}
                        >
                            <Image 
                            source={require('../../../assets/images/spending.png')} 
                            style={styles.spending}
                            />
                        </LinearGradient>
                    </View>
                        <Text style={styles.kirimDonasi}>
                            Kirim Donasi
                        </Text>
                </View>
            </View>
            <View style={[styles.Activity,{justifyContent:'space-between'}]}>
                <Text style={styles.textActivity}>
                    Activity
                </Text>
                <Text style={[styles.textActivity,{fontWeight:'100'}]}>
                    See All
                </Text>
            </View>
            <FlatList
            data={Data2}
            keyExtractor={item=>item.id}
            renderItem={({item})=>_renderItem(item)}
            style={styles.flatlist}
            showsVerticalScrollIndicator={false}
            />
           
        </View>
    )
}
export default Wallet