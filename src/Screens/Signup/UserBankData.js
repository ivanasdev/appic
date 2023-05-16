import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import stylesS from './stylesSignup';



const BankData =()=>{





    return(

        <View style={stylesS.container}>
        <ScrollView>
        <LinearGradient colors={['#192f6a', '#0C76E7', '#E75F0C']}>
        <View style={stylesS.Cardlog}>
            <Text style={stylesS.txtlog}>
            Datos Bancarios
            </Text>


    

            <View>
              <Text>Datos Bancarios</Text>

              <TextInput style={stylesS.input} placeholder="Banco" />
              <TextInput style={stylesS.input} placeholder="CLABE" />
            </View>

            <View>
              <Text>Forma de pago de rendimientos</Text>

              <TextInput style={stylesS.input} placeholder="Mensual " />
            </View>
    

            <TouchableOpacity
                style={stylesS.button}
        
                >
                <Text style={stylesS.txtlogsubmit}>Guardar Datos</Text>
              </TouchableOpacity>

    



           </View>
            </LinearGradient>
            </ScrollView>
            </View>

    )
}


export default BankData