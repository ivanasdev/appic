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

import navigationStrings from '../../constants/navigationStrings';

const Beneficiaries =({navigation})=>{

  const GotoBankDataForm = () => {
    navigation.navigate(navigationStrings.BANKDATA, {title: 'Datos Bancarios'});
  };

    return(

        <View style={stylesS.container}>
        <ScrollView>
        <LinearGradient colors={['#192f6a', '#0C76E7', '#E75F0C']}>
        <View style={stylesS.Cardlog}>
            <Text style={stylesS.txtlog}>
            Beneficiarios
            </Text>





      
            <View>

              <Text>Beneficiarios</Text>

              <TextInput style={stylesS.input} placeholder="Nombre" />
              <TextInput style={stylesS.input} placeholder="Apellido paterno" />
              <TextInput
                style={stylesS.input}
                placeholder="Apellido materno "
              />
              <TextInput style={stylesS.input} placeholder="Parentesco" />
              <TextInput style={stylesS.input} placeholder="Porcentaje" />
              <Text>Telefonos</Text>

              <TextInput style={stylesS.input} placeholder="Telefono Fijo " />
              <TextInput style={stylesS.input} placeholder="Trabajo" />
              <TextInput style={stylesS.input} placeholder="Celular" />

              <Text>Domicilio</Text>

              <TextInput style={stylesS.input} placeholder="Calle" />
              <TextInput
                style={stylesS.input}
                placeholder="N&uacte;mero interior"
              />
              <TextInput
                style={stylesS.input}
                placeholder="N&uacte;mero exterior"
              />
              <TextInput style={stylesS.input} placeholder="Colonia" />
              <TextInput
                style={stylesS.input}
                placeholder="Alcaldia &oacute; municipio"
              />
              <TextInput style={stylesS.input} placeholder="Estado" />
              <TextInput
                style={stylesS.input}
                placeholder="C&oacute;digo postal"
              />
            </View>

           <TouchableOpacity
                style={stylesS.button}
                onPress={GotoBankDataForm}
                >
                <Text style={stylesS.txtlogsubmit}>Guardar Datos</Text>
              </TouchableOpacity>

    



           </View>
            </LinearGradient>
            </ScrollView>
            </View>

    )
}


export default Beneficiaries