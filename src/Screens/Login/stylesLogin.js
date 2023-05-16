import { StyleSheet } from "react-native";

const styleslogin = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
     
    },
    Cardlog:{
      flex:1,
      marginTop:50,
      marginBottom:300,
      marginLeft:50,
      marginRight:100,
      justifyContent:"center",
      alignItems:"center",


    },
    introtxt:{
        fontSize:28,
        textAlign:"center",
        fontWeight: 'bold',
        color: 'black'

    },
    cardtxt:{
        fontSize:18,
        textAlign:"center",
        fontWeight: 'bold',
        color: 'black'

    },
    btninvest:{
        borderRadius: 32,
         marginLeft: 0,
          marginRight: 0,
           marginBottom: 0,
            marginTop:10,
            backgroundColor:"orange"
    },
    cursitxt:{
        textAlign:"center",
        fontSize:16,
        color:"black",
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    input: {
        height: 40,
        width:300,
        borderWidth: 1,
        padding: 6,
        fontWeight:"bold",
        color:"#fff",
        fontSize:20,
        borderRadius:32,
        textAlign:"center",
        marginTop:10,
        marginBottom:10,


      },
      submitButton:{
        borderRadius:32
      },
      submitButtonText:{
        color:"#ffff"
      },

      txtinputs:{
        textAlign:"center",
        fontSize:30,
        fontWeight:"bold",
        color:"#fff",
        marginTop:20,
        marginBottom:20
        
      },
      btnlogin:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 28,
        elevation: 3,
        backgroundColor: '#DA38CD',
        marginTop:30

      },
      btnlogtxt:{
        color:"#7339AB",
        fontWeight:"bold",
        fontSize:18,

        
      },
      wrapperIcon: {
        position: 'absolute',
        right: 0,
        padding: 10,
      },
      icon: {
        width: 30,
        height: 30,
        marginTop:5,

      },
      button:{
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DA38CD',
        borderRadius: 5,
        marginTop: 25,
      },
      buttonDisable:{
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey',
        borderRadius: 5,
        marginTop: 25,
      },
      linearGradient1: {
        flex: 1,
       
      },
      imgtitle1:{
        alignSelf:"center",
        marginRight:55,
        marginTop:20
      }
})

export default styleslogin