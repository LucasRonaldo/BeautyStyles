import React, { useState } from 'react';
import { Animated, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';
import SignIn from '../SignIn/SignIn';

function Welcome(): JSX.Element {
    const navigation = useNavigation();

    


    

    

    return (


        <View style={styles.container}>
            <View
            style={styles.containerLogo}>< Animatable.Image
            animation="flipInY"
            source={require('../../assets/images/usuario.png')}
            style={{width:'100%'}}
            resizeMode="contain"
             /></View>

             <Animatable.View
             animation="fadeInUp" delay={600} style={styles.containerForm}>
                <Text style={styles.title}>Melhor aplicativo para monitorar sua empresa!</Text>
                <Text style={styles.text}>Faça o login para começar</Text>

                <TouchableOpacity style={styles.button}>
                    <Text onPress={() => navigation.navigate('SignIn')} style={styles.buttonText }>Acessar</Text>
                </TouchableOpacity>
             </Animatable.View>
        </View>
       
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#38a69d'
    },
    containerLogo:{
        flex:2,
        backgroundColor:'#38a69d',
        justifyContent:'center',
        alignItems:'center',


    },
    containerForm:{
        flex:1,
        backgroundColor:"#FFF",
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        paddingStart:'5%',
        paddingEnd:"5%"

    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,

    },
    text:{
        color:'#a1a1a1'
    }
    ,button:{
        position: 'absolute',
        backgroundColor:'#38a69d',
        borderRadius:50,
        paddingVertical:8,
        width:'60%',
        alignSelf:'center',
        bottom:'15%',
        alignItems: 'center',
        justifyContent:'center'

    },
    buttonText:{
        fontSize:18,
        color:'#FFF',
        fontWeight:'bold'

    }
})





export default Welcome;