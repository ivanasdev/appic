import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  TextInput,
} from 'react-native';
//import navigationStrings from '../../constants/navigationStrings';
import styles from '../Home/styles';
import LinearGradient from 'react-native-linear-gradient';
//import LinearGradient from 'react-native-linear-gradient';


const Simulator1 = () => {
 


  return (
    <LinearGradient
      colors={['#0D5C75', '#199FB1', '#04323A']}
      style={styles.linearGradientSimulator}>
      <ScrollView>
        <View style={styles.container}>

  
        <Text style={styles.welcomeprofiletxt}>Clacula tus ganacias</Text>

        <TextInput
          style={styles.input}
          placeholder="monto"
          //value={am}
          name="am"
          onChangeText={text => setAm(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="plazo"
          //value={option}
          name="plazo"
          onChangeText={text => setSelectOption(text)}
        />

        <Pressable
          style={styles.btn1} /*</LinearGradient>onPress={goToScreenUS}*/
        >
          <Text style={styles.btn1txt}>$ Simulador </Text>
        </Pressable>

        </View>
      </ScrollView>
    </LinearGradient>

  );
};

export default Simulator1;
