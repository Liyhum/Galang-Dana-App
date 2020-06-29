import React from 'react'
import {View,Text,Button,AsyncStorage} from 'react-native'
import styles from '../../Style/drawerStyle'
import { 
    DrawerItem,
    DrawerContentScrollView
} from "@react-navigation/drawer";
import { FontAwesome,Ionicons,MaterialCommunityIcons } from "@expo/vector-icons";
import {State, Dispatch} from '../../../App';

export const DrawerContent =({navigation,props})=>{
    const dipatch = React.useContext(Dispatch)
    const HandleLogout = () =>{
        dipatch({type:'logout'})
        AsyncStorage.removeItem('uid')
        navigation.closeDrawer()
    }
    return(
        <View style={{flex:1,justifyContent: 'center'}}>
            <View style={styles.viewDrawer}>
                <DrawerContentScrollView {...props}>
                    <DrawerItem
                    icon={({color,size})=>(
                        <FontAwesome
                        name="user"
                        color={"#e6f2ed"}
                        size={size}
                        />
                        )}
                    onPress={()=>navigation.navigate('Akun')}
                    label="Profile"
                    labelStyle={styles.TextLogout}
                    />
                    <DrawerItem
                    icon={({color,size})=>(
                        <FontAwesome
                        name="gear"
                        color={"#e6f2ed"}
                        size={size}
                        />
                        )}
                    onPress={()=>navigation.navigate('Setting')}
                    label="Settings"
                    labelStyle={styles.TextLogout}
                    />
                </DrawerContentScrollView>
                    <DrawerItem
                        icon={({color,size})=>(
                                <MaterialCommunityIcons
                                name="exit-to-app"
                                color={"#e6f2ed"}
                                size={size}
                                />
                            )}
                            label="Logout"
                            labelStyle={styles.TextLogout}
                            onPress={()=>HandleLogout() }
                    />
            </View>
        </View>
    )
}