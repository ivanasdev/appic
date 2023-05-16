import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  TextInput,
} from 'react-native';
import styles from '../Home/styles';
import navigationStrings from '../../constants/navigationStrings';
import LinearGradient from 'react-native-linear-gradient';


const Beneficiaries = () =>{


    const PorcentajeTotal=100;


    return(


        <LinearGradient
        colors={['#0D5C75', '#199FB1', '#04323A']}
        style={styles.linearGradient}>
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.welcomeprofiletxt}>
             Mis beneficiarios
            </Text>
  
   


            </View>
      </ScrollView>
    </LinearGradient>

    )

}


export default Beneficiaries