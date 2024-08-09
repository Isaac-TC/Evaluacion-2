import { Dimensions, StyleSheet } from "react-native";
import { IMPUT_COLOR, PRIMARY_COLOR, SECUNDARY_COLOR } from "../common/constantsColor";

export const styles= StyleSheet.create({
    container:{
        flex: 1, // Ocupa toda la pantalla
        justifyContent: 'center', // Centra verticalmente
        alignItems: 'center', // Centra horizontalmente

       
    },
    image: {
       
        width: Dimensions.get('window').width * 0.9, // Ajusta el tamaño de la imagen
        height: Dimensions.get('window').width * 0.9 * 0.90, // Mantiene una relación de aspecto, ajusta según sea necesario
        resizeMode: 'contain', // Ajusta la imagen dentro del contenedor sin distorsionarla
      },
      input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 8,
    },

    globalTitle:{
        color: SECUNDARY_COLOR,
        fontSize:27,
        paddingHorizontal:30,
        paddingVertical:30,
        fontWeight:'bold',
        textAlign:'center'
    },
    contenBody:{
        backgroundColor: SECUNDARY_COLOR,
        //height:300
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingHorizontal:40,
        paddingTop:40
    },
    titleBody:{
        fontSize:17,
        fontWeight:'bold',
        color:'black'
    },
    descriptionBody:{
    fontSize:16 
    },
    imputText:{
       backgroundColor:IMPUT_COLOR,
       paddingHorizontal:20,
       paddingVertical:10,
       borderRadius:10 
    },
    
    contentInput:{
        backgroundColor: PRIMARY_COLOR,
        marginTop:30,
        gap:10,
        width:200,
        height:50,
        borderRadius:20,

    },
    button:{
        backgroundColor:PRIMARY_COLOR,
        paddingVertical:15,
        borderRadius:10,
        marginTop:30
    },
    buttonText:{
        color:'black',
        fontSize:15,
        fontWeight:'bold',
        textAlign:'center'
    },

    iconPassword:{
        position:'absolute',
        right:20,
        zIndex:1,
        marginTop:13
    },
    textRedirect:{
        marginTop:30,
        fontSize:16,
        color: 'white',
        fontWeight: 'bold',
        textAlign:'center',
        alignContent:'center'
    }
})