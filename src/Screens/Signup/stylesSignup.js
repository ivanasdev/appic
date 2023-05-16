import { StyleSheet } from "react-native";

const stylesS = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
     
    },
    Cardlog:{
      flex:1,
      marginTop:50,
      marginBottom:200,
      marginLeft:50,
      marginRight:100,
      justifyContent:"center",
      alignItems:"center",
      textAlign:"center"



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
        marginTop:20,
        marginBottom:10,


      },
      submitButton:{
        borderRadius:34,
      },
      submitButtonText:{
        color:"#ffff"
      },
      txtlog:{
        textAlign:"center",
        fontSize:20,
        fontWeight:"bold",
        color:"#fff",
        marginTop:40,
        marginBottom:10
        
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
        backgroundColor: '#009FF4',
        marginTop:30,
        fontSize:10

      },
      btnlogtxt:{
        color:"#7339AB",
        fontWeight:"bold",
        fontSize:10,

        
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
        backgroundColor: '#E75F0C',
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
        marginTop:20,
        marginBottom:20,
        alignSelf:"center",
        justifyContent:"center",
        marginRight:50
        

    },
    centeredview:{
      flex:1,
      justifyContent:"center",
      alignItems:"center",
      marginTop:22,

    },

    modalView:{
      margin:20,
      backgroundColor:'blue',
      borderRadius:20,
      width:"90%",
      padding:35,
      alignItems:"center",
      shadowColor:"#000",
      shadowOffset:{
        width:0,
        height:2,
      },
      shadowOpacity:0.25,
      shadowRadius:4,
      elevation:5,
    },

        

dropdown1DropdownStyle: {
flex: 0.5,
backgroundColor: '#00B1F4',
height: 50,


borderRadius: 8,
borderWidth: 1,
borderColor: '#444',

},
dropdown1BtnStyle: {
  flex: 0.2,
  flexDirection: 'row',
  height: 5,
  width:300,
  backgroundColor: '#00B1F4',
  borderRadius: 18,
  borderWidth: 2,
  borderColor: '#00B1F4',
  color:"#ffff"
},
 

})

export default stylesS