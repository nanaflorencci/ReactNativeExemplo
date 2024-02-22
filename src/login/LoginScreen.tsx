import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

function LoginScreen(): JSX.Element{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function login(){
        const dados = {
            email: email,
            pasword: password
        } 
        console.log(dados);

    }

    return(
        <View style={styles.container}>
            <Image style={styles.logo} resizeMode="contain"
            source={require('../assets/images/user.png')} />
            <Text style={styles.title}>Login</Text>
            <View style={styles.card}>

                <TextInput style={styles.input} placeholder="Email:" placeholderTextColor= "#000000"
                onChangeText={(textEmail) => setEmail(textEmail)} />

                <TextInput style={styles.input} placeholder="Senha:" placeholderTextColor= "#000000"
            onChangeText={(textPassword) => setPassword(textPassword)}
            secureTextEntry/>

                <TouchableOpacity style={styles.button}
                onPress={()=>{login()}}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.forgetPassword}>Esqueceu a senha?</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.forgetPassword}>Não possui conta? Cadastre-se!</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7251b5'
    },
    logo: {
        width: 80,
        height: 80,
        margin: 20,
        marginTop: -150
    },
    card: {
        backgroundColor: "#cbb2fe",
        width: 300,
        borderRadius: 10,
        padding: 20,
        elevation: 3,
        shadowColor: 'rgba(0,0,0,0.3)',
        textShadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 20,
        textAlign: 'center'
    },
    input: {
        backgroundColor: '#ffffff',
        height: 40,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#7251b5'
    },
    button: {
        backgroundColor: '#7251b5',
        height: 40,
        borderRadius: 8
    },
    buttonText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 40
    },
    forgetPassword: {
        color: '#000000',
        textAlign: 'center',
        marginTop: 10
    }
});
export default LoginScreen