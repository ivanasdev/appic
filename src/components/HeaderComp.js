import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const HeaderComp = ({
    goBack,
    text,
}) =>{
    const navigation =useNavigation()
    return (
        <View style={{flexDirection:"row",justifyContent:"space-between",height:10}}>
            {!!goBack ? <TouchableOpacity
            onPress={!!goBack?goBack:()=>navigation.goBack()}
            >

            </TouchableOpacity>:<Text />}

          <Text>HeaderComp</Text>
          <Text>{text}</Text>
        </View>
      )
}
export default HeaderComp