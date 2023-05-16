import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  ToastAndroid
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import navigationStrings from '../../constants/navigationStrings';
import stylesS from './stylesSignup';
import styles from '../Home/styles';
import DateField from 'react-native-datefield';
import axios from 'axios';
import SelectDropdown from 'react-native-select-dropdown';

const CompleteSignup = ({navigation, route}) => {


  const goToScreenProfile = (username,apellidop,apellidom) => {
    navigation.navigate(navigationStrings.PROFILE, {username:username,ap:apellidop,am:apellidom});
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

  
  const ToastShow = () => {
    ToastAndroid.showWithGravityAndOffset(
      'Registro Exitoso!',
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      50,
      50,
    );
  };
  const username = route.params.username;
  const apellidop = route.params.ap;
  const apellidom = route.params.am;
  const idUser=route.params.id_User;
  console.log(idUser)

  const URI = 'http://45.80.153.150:5001';
  const [data, setData] = useState([]);
  const [flagregistro,setFlagregistro]=useState(0);
  const [fn, setFn] = useState('');
  const [telfijo, setTelfijo] = useState('');
  const [teltrabajo, setTeltrabajo] = useState('');
  const [celular, setCelular] = useState('');
  const [banco, setBanco] = useState('');
  const [clabe, setClabe] = useState('');
  const [rfc, setRfc] = useState('');
  const [nacion, setNacion] = useState('');
  const [curp, setCurp] = useState('');
  const [tipop, setTipop] = useState('');

  const bankdata = [
    'American Express Bank México)',
    'Banca Afirme',
    'Banca Mifel',
    'BBVA México',
    'Banco Actinver',
    'Banco Azteca',
    'Banco Compartamos',
    'Banco de Inversión Afirme',
    'Banco Inbursa',
    'Banco Inmobiliario Mexicano',
    'Banco Invex',
    'Banco Regional de Monterrey',
    'Banco Santander',
    'BanCoppel',
    'Bank of America Mexico',
    'Banorte',
    'Citibanamex',
    'Consubanco',
    'HSBC México',
    'Scotiabank',
  ];
  const tipopersona = ['Fisica', 'Moral'];

  const rendimientos = ['Mensual', 'Semanal'];

  const [rendimiento, setRendimiento] = useState('');
  
  const goback=()=>{
    goToScreenProfile()
    
  }

  const submitData = () => {

    if(!tipop || !fn || !rfc || !nacion ||!curp ||!telfijo ||!celular ||!banco ||!clabe || !rendimiento){

      ToastShowFail();

    }
    else{
/*console.log(
  idUser,
  username,
  apellidop,
  apellidom,
  tipop,
  fn,
  rfc,
  nacion,
  curp,
  telfijo,
  teltrabajo,
  celular,
  banco,
  clabe,
  rendimiento)*/
      axios 
      .post(`${URI}/completereg `,{
        idUser,
        username,
        apellidop,
        apellidom,
        tipop,
        fn,
        rfc,
        nacion,
        curp,
        telfijo,
        teltrabajo,
        celular,
        banco,
        clabe,
        rendimiento

      })
      .then(response => {
        console.log(response);

        console.log(response.data.length);
        if (response.data.length == 0) {
          console.log('Error al registrar');
          ToastShowFail();
        } else {
          console.log('Registro completo');
          ToastShow();
          goback();
    
          
      
        }
      });


    }

  };


  return (
    <LinearGradient
      colors={['#0D5C75', '#199FB1', '#04323A']}
      style={styles.linearGradient}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.welcomeprofiletxt}>
            Completa el resgistro y comienza a invertir
          </Text>

          <LinearGradient
            colors={['#199FB1', '#0D5C75']}
            style={styles.linearGradientcardComplete}>
            <Image
              style={styles.imgintro}
              source={require('../../../assets/inmo.png')}
            />

            <Text style={styles.txtlog}>Datos generales</Text>

            <TextInput
              style={styles.input}
              placeholder="Nombre"
              value={username}
              name="nombre"
            />

            <TextInput
              style={styles.input}
              placeholder="Apellido paterno"
              value={apellidop}
              name="ap"
            />

            <TextInput
              style={styles.input}
              placeholder="Apellido materno"
              value={apellidom}
              name="am"
            />

            <SelectDropdown
              dropdownStyle={styles.dropdown1DropdownStyle}
              buttonStyle={styles.dropdown1BtnStyle}
              defaultButtonText={'Tipo de Persona'}
              data={tipopersona}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
                setTipop(selectedItem);
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

            <Text style={styles.txtfn}>Fecha de nacimiento</Text>
            <DateField
              style={styles.Dateinput}
              labelDate="Dia"
              labelMonth="Mes"
              labelYear="Año"
              value={fn}
              name="fn"
              onSubmit={text => setFn(text)}
            />

            <TextInput
              style={styles.input}
              placeholder="RFC (CON HOMOCLAVE)"
              value={rfc}
              name="rfc"
              onChangeText={text => setRfc(text)}
            />

            <TextInput
              style={styles.input}
              placeholder="Nacionalidad"
              value={nacion}
              name="nacion"
              onChangeText={text => setNacion(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="CURP"
              value={curp}
              name="curp"
              onChangeText={text => setCurp(text)}
            />

            <Text style={styles.txtlog}>Datos de contacto</Text>
            <TextInput
              style={styles.input}
              placeholder="Telefono fijo"
              value={telfijo}
              name="telfijo"
              onChangeText={text => setTelfijo(text)}
            />

            <TextInput
              style={styles.input}
              placeholder="telefono de trabajo "
              value={teltrabajo}
              name="teltrabajo"
              onChangeText={text => setTeltrabajo(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Celular"
              value={celular}
              name="celular"
              onChangeText={text => setCelular(text)}
            />

            <Text style={styles.txtlog}>Datos Bancarios</Text>

            <SelectDropdown
              dropdownStyle={styles.dropdown1DropdownStyle}
              buttonStyle={styles.dropdown1BtnStyle}
              data={bankdata}
              defaultButtonText={'Selecciona un banco'}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
                setBanco(selectedItem);
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

            <TextInput
              style={styles.inputclabe}
              placeholder="CLABE"
              value={clabe}
              name="clabe"
              onChangeText={text => setClabe(text)}
            />
            <Text style={styles.txtlog}>Forma de pago de rendimientos</Text>
            <SelectDropdown
              dropdownStyle={styles.dropdown1DropdownStyle}
              buttonStyle={styles.dropdown1BtnStyle}
              defaultButtonText={'Forma de pago de rendimientos'}
              data={rendimientos}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
                setRendimiento(selectedItem);
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

            <View>
              <TouchableOpacity style={styles.btn112} onPress={submitData}>
                <Text style={stylesS.txtlogsubmit}>Guardar Datos</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default CompleteSignup;
