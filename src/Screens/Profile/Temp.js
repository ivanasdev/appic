import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  TextInput,
} from 'react-native';
import navigationStrings from '../../constants/navigationStrings';
import styles from '../Home/styles';

import LinearGradient from 'react-native-linear-gradient';

const TempProfile = ({navigation}) => {
  const goToScreen = () => {
    navigation.navigate(navigationStrings.LOGIN, {title: 'INICIO'});
  };
  const goToScreenregister = () => {
    navigation.navigate(navigationStrings.SIGNUP, {title: 'SIGNUP'});
  };
  const goToScreenUS = () => {
    navigation.navigate(navigationStrings.ABOUT, {title: 'NOSOTROS'});
  };

  return (
    <LinearGradient
      colors={['#0D5C75', '#199FB1', '#04323A']}
      style={styles.linearGradient}>
      <ScrollView>
        <View style={styles.container}>
          <Image
            style={styles.imgintro}
            source={require('../../../assets/inmo.png')}
          />

          <LinearGradient
            colors={['#E2DAD7', '#E2DAD7']}
            style={styles.linearGradientcardtemp}>
            <Text style={styles.card1}>
              Si tienes una cuenta inicia sesi&oacute;n
            </Text>

            <Image
              style={styles.iconslogin}
              source={require('../../../assets/icons/login.png')}
            />

            <Pressable onPress={goToScreen} style={styles.btn11}>
              <Text style={styles.btn1txt}>Iniciar Sesion</Text>
            </Pressable>
          </LinearGradient>

          <LinearGradient
            colors={['#E2DAD7', '#E2DAD7']}
            style={styles.linearGradientcardtemp2}>
            <Text style={styles.card1}>Registrate ya!</Text>
            <Image
              style={styles.iconslogin}
              source={require('../../../assets/icons/add-user.png')}
            />
            <Pressable onPress={goToScreenregister} style={styles.btn11}>
              <Text style={styles.btn1txt}>Registrarse</Text>
            </Pressable>
          </LinearGradient>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default TempProfile;
