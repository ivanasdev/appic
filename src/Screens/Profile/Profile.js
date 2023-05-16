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
import axios from 'axios';
import SelectDropdown from 'react-native-select-dropdown';

const ProfilePage = ({navigation, route}) => {
  const goToCompleteSignup = (username, ap, am, id_User) => {
    navigation.navigate(navigationStrings.COMPLETESIGNUP, {
      username: username,
      ap: ap,
      am: am,
      id_User: id_User,
    });
  };

  const goToBeneficiaries = (username, ap, am, id_User) => {
    navigation.navigate(navigationStrings.BENEFICIARIES, {
      username: username,
      ap: ap,
      am: am,
      id_User: id_User,
    });
  };

  const [monto, setMonto] = useState('');
  const [plazo, setPlazo] = useState('');
  const [resultado, setResultado] = useState(0);
  const plazocat = ['12', '24', '36'];

  const calcular = () => {
    c1 = parseInt(monto);
    c2 = parseInt(plazo);
    const resultadoop = c1 * c2;
    setResultado(resultadoop);
  };

  const username = route.params.username;
  const ap = route.params.ap;
  const am = route.params.am;
  const id_User = route.params.id_User;
  const id_FlagR = route.params.flagregistro;

  const terminarreg = () => {

      goToCompleteSignup(username, ap, am, id_User);
    }


    const gotobenfits = () => {

      goToBeneficiaries(username, ap, am, id_User);
    }



 
  

  return (
    <LinearGradient
      colors={['#0D5C75', '#199FB1', '#04323A']}
      style={styles.linearGradient}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.welcomeprofiletxt}>
            Bienvenido {username} {ap} {am}
          </Text>

          {id_FlagR == 1 ? (
               <Pressable onPress={gotobenfits} style={styles.botininvestpro}>
               <Text style={styles.btn1txt}> Registra tus beneficiarios </Text>
             </Pressable>
          ) : (
            <Pressable onPress={terminarreg} style={styles.botininvestpro}>
              <Text style={styles.btn1txt}> Completar Registro </Text>
            </Pressable>
          )}

          <LinearGradient
            colors={['#199FB1', '#fff']}
            style={styles.linearGradientcardProfile}>
            <Image
              style={styles.imgintro}
              source={require('../../../assets/inmo.png')}
            />

            <Text style={styles.welcomeprofiletxt1}>Simulador de ganacias</Text>

            <TextInput
              style={styles.input}
              placeholder="monto"
              value={monto}
              name="monto"
              onChangeText={text => setMonto(text)}
            />

            <SelectDropdown
              dropdownStyle={styles.dropdown1DropdownStyle}
              buttonStyle={styles.dropdown1BtnStyle}
              data={plazocat}
              defaultButtonText={'Selecciona un plazo'}
              onSelect={(selectedItem, index) => {
                //console.log(selectedItem, index);
                setPlazo(selectedItem);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item;
              }}
            />

            <Pressable style={styles.btnsim} onPress={calcular}>
              <Text style={styles.btn1txt}> Calcular </Text>
            </Pressable>

            <Text style={styles.txtresultado}>
              Tu inversi&oacute;n:{resultado}
            </Text>
          </LinearGradient>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default ProfilePage;
