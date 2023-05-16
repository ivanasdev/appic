import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  ToastAndroid,
} from 'react-native';
import navigationStrings from '../../constants/navigationStrings';
import LinearGradient from 'react-native-linear-gradient';
import imagePath from '../../constants/imagePath';
import stylesS from './stylesSignup';
import axios from 'axios';
import styles from '../Home/styles';

const SignupPage = ({navigation}) => {

  const URI="http://45.80.153.150:5001"
  const [email, setEmail] = useState('');
  const [nombre, setNombre] = useState('');
  const [ap,setAp]=useState("");
  const [am,setAm]=useState("");

  const [password, setPassword] = useState('');
  const [seePassword, setSeePassword] = useState(true);
  const [checkEmail, setCheckEmail] = useState(false);

  const ToastShow = () => {
    ToastAndroid.showWithGravityAndOffset(
      'Inicio Exitoso!!',
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      50,
      50,
    );
  };
  const ToastShowFail = () => {
    ToastAndroid.showWithGravityAndOffset(
      'Clave de acceso o email incorrectos ',
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      50,
      50,
    );
  };


  const handleCheckEmail = text => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    setEmail(text);

    if (re.test(text) || regex.test(text)) {
      setCheckEmail(false);
    } else {
      setCheckEmail(true);
    }
  };

  const checkPasswordValidity = value => {
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(value)) {
      return 'La clave de acceso no debe tener espacios en blanco.';
    }
    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    if (!isContainsUppercase.test(value)) {
      return 'La clave de acceso debe tener al menos una mayuscula.';
    }

    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    if (!isContainsLowercase.test(value)) {
      return 'La clave de acceso debe tener al menos una minuscula .';
    }

    const isContainsNumber = /^(?=.*[0-9]).*$/;
    if (!isContainsNumber.test(value)) {
      return 'La clave de acceso debe tener un digito por lo menos .';
    }

    const isValidLength = /^.{6,16}$/;
    if (!isValidLength.test(value)) {
      return 'La clave de acceso debe tener de 6 a 10 caracteres.';
    }

    return null;
  };

  const gotoLogin = () => {
    navigation.navigate(navigationStrings.LOGIN, {title: 'Inicia Sesion'});
  };

  const HandleSignupTmp = () => {
    const checkPassword = checkPasswordValidity(password);
    if (!checkPassword) {
      //goToScreenProfile()
      const flagregistro=0
      console.log(nombre,ap,am, email, password,flagregistro);
      axios
        .post(`${URI}/registrotmp`, {
          nombre,
          ap,
          am,
          email,
          password,
          flagregistro  
        })
        .then(response => {
          console.log(response.data);

          //console.log(email, password);
          //console.log(response.data.length);
          if (response.data.length == 0) {
            console.log('Error al registrar');
            ToastShowFail();
          } else {
            console.log('Usuario Registrado');
            console.log(response);
            ToastShow();
            gotoLogin();
          }
        });
    } else {
      alert(checkPassword);
    }
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
            colors={['#04323A', '#199FB1', '#fff']}
            style={styles.linearGradientcardSignup}>
            <Text style={styles.txtlog}>Registrarse</Text>

            <View>
              <TextInput
                style={styles.input}
                placeholder="Nombre"
                value={nombre}
                name="nombre"
                onChangeText={text => setNombre(text)}
              />
            </View>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Apellido Paterno"
                value={ap}
                name="ap"
                onChangeText={text => setAp(text)}
              />
            </View>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Apellido Materno"
                value={am}
                name="am"
                onChangeText={text => setAm(text)}
              />
            </View>
            <View>
              <TextInput
                style={stylesS.input}
                placeholder="Correo electronico"
                value={email}
                onChangeText={text => handleCheckEmail(text)}
              />
            </View>
            {checkEmail ? <Text style={styles.Wrongemail}>
                <Image
                  style={styles.logocheckw}
                  source={require('../../../assets/icons/cancelar.png')} />Email incorrecto</Text> : <Text>Correcto</Text>}
            <View>
              <TextInput
                style={stylesS.input}
                placeholder="Contrasena"
                value={password}
                secureTextEntry={seePassword}
                onChangeText={text => setPassword(text)}
              />
              <TouchableOpacity
                style={stylesS.wrapperIcon}
                onPress={() => setSeePassword(!seePassword)}>
                <Image
                  source={seePassword ? imagePath.icEyeOff : imagePath.icEye}
                  style={stylesS.icon}
                />
              </TouchableOpacity>
            </View>

            {email == '' || password == '' || checkEmail == true ? (
              <TouchableOpacity
                disabled
                style={stylesS.buttonDisable}
                onPress={HandleSignupTmp}>
                <Text style={stylesS.txtlogsubmit}>Acceder</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={stylesS.button}
                onPress={HandleSignupTmp}>
                <Text style={stylesS.txtlogsubmit}>Acceder</Text>
              </TouchableOpacity>
            )}
          </LinearGradient>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default SignupPage;
