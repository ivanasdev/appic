import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import navigationStrings from '../../constants/navigationStrings';
import LinearGradient from 'react-native-linear-gradient';

import stylesS from './stylesSignup';



const ContactData =({navigation})=>{

    const GotoBeneficiariesForm = () => {
        navigation.navigate(navigationStrings.BENEFICIARIES, {title: 'Beneficiarios'});
      };
    
    


    return(

        <View style={stylesS.container}>
        <ScrollView>
        <LinearGradient colors={['#192f6a', '#0C76E7', '#E75F0C']}>
        <View style={stylesS.Cardlog}>
            <Text style={stylesS.txtlog}>
            Datos de contacto 
            </Text>


            <View>
       


              <TextInput style={stylesS.input} placeholder="Telefono fijo" />
              <TextInput
                style={stylesS.input}
                placeholder="telefono de trabajo "
              />
              <TextInput style={stylesS.input} placeholder="Celular" />
            </View>

            <TouchableOpacity
                style={stylesS.button}
                onPress={GotoBeneficiariesForm}
                >
                <Text style={stylesS.txtlogsubmit}>Guardar Datos</Text>
              </TouchableOpacity>

    





           </View>
            </LinearGradient>
            </ScrollView>
            </View>

    )
}


export default ContactData