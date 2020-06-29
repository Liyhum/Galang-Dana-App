import React from 'react';
import { View,Text } from "react-native";
import styles from '../../Style/akunStyle'
import {
    FontAwesome,
    AntDesign,
    MaterialCommunityIcons,
    Ionicons,
    FontAwesomeIcon
} from '@expo/vector-icons'
import { Sae } from "react-native-textinput-effects";

const Akun = ({navigation}) =>{
    return(
        <View style={styles.viewHome}>
            <View style={styles.viewAkun}>
                <View style={styles.viewHeader}>
                    <MaterialCommunityIcons
                    name="menu"
                    size={30}
                    color="#e6f2ed"
                    style={styles.icon}
                    onPress={()=> navigation.toggleDrawer()}
                    />
                </View>
                <View style={styles.avatar}> 
                    <View style={styles.circle}>
                        <MaterialCommunityIcons
                        name="account"
                        size={100}
                        color="#e6f2ed"
                        style={{elevation:10}}
                        />
                    </View>    
                    <View>
                        <Text style={styles.text}>
                            Muhammad Muhyillail
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.viewEdit}> 
            </View>
        </View>
    )
}
export default Akun