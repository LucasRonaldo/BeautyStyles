import React, { useState } from 'react';
import { Animated, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as Animatable from 'react-native-animatable'

function SignIn(): JSX.Element {








    return (


        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft"
                delay={500} style={styles.containerHeader} >

                <Text style={styles.message}>Bem-Vindo(a)</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp"
                style={styles.containerForm} >
                <Text style={Styles.title}>E-mail</Text>
                <TextInput
                    placeholder="Digite um email..."
                    style={styles.input}></TextInput>

                <Text style={Styles.title}>Senha</Text>
                <TextInput
                    placeholder="Digite uma senha..."
                    style={styles.input}></TextInput>




            </Animatable.View>
        </View>

    );
}

const styles = StyleSheet.create({







});





export default SignIn;