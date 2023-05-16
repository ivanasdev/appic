import { StyleSheet } from "react-native";

const stylesP = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
     
    },
    Cardlog:{
      flex:1,
      marginTop:70,
      marginBottom:400,
      marginLeft:80,
      marginRight:100,
      justifyContent:"center",
      alignItems:"center",


    },
    introtxt:{
        fontSize:28,
        textAlign:"center",
        fontWeight: 'bold',
        color: '#fff'

    },

    introtxt1:{
      fontSize:28,
      textAlign:"center",
      fontWeight: 'bold',
      color: '#192f6a'

  },
    cardtxt:{
        fontSize:18,
        textAlign:"center",
        fontWeight: 'bold',
        color: '#fff'

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
      txtlog:{
        textAlign:"center",
        fontSize:30,
        fontWeight:"bold",
        color:"#fff",
        marginTop:20,
        marginBottom:20
        
      },
      txtlogsubmit:{
        textAlign:"center",
        fontSize:20,
        fontWeight:"bold",
        color:"#fff",
    
        
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
      btn1txt:{
        color:"#FFF",
        fontWeight:"bold",
        fontSize:18,
      },
      btninvest:{
        borderRadius: 32,
         marginLeft: 0,
          marginRight: 0,
           marginBottom: 0,
            marginTop:10,
            backgroundColor:"orange",
            color:"white",
            height:100,
            width:200,
            textAlign:"center"
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
        backgroundColor: '#192f6a',
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
        marginLeft:50,
        marginTop:20
      }
})

export default stylesP