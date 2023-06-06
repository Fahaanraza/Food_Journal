import React, { useState } from 'react';
import { View,StyleSheet, TextInput, Button, Alert,Image,ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import image from '../assets/images/food_bg.jpg'
import app from '../database/firebase';
import { getAuth, signInWithEmailAndPassword, } from 'firebase/auth'

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');


  const handleLogin = async() => {
    // Perform login logic here
    if (username === '' && password === '') {
        Alert.alert('Enter all details to Login!');
      } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(username))){
          Alert.alert('You have entered an invalid email address!');
      } else {
        setIsLoading(true);
        try {
          setIsLoading(true);
          const auth = getAuth();
          const res = await signInWithEmailAndPassword(auth, username, password)
          console.log("🚀 ~ file: login.js:26 ~ handleLogin ~ res:", res['_tokenResponse'])
          const username = res['_tokenResponse']['displayName']
          console.log('User Signed in successfully!');
          setIsLoading(false);
          setUsername('');
          setPassword('');
          navigation.navigate('landingPage', { username });
        } catch (error) {
          console.log("🚀 ~ file: register.js:33 ~ registerUser ~ error:", error)
          setIsLoading(false);
          setErrorMessage(error.message);
        }
      }
  };

  const forgotPassword = () => {
    navigation.navigate('forgotPassword');
  };


  if (isLoading) {
    return (
      <View style={styles.preloader}>
        <ActivityIndicator size="large" color="#9E9E9E" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
        <View style={styles.subContainer}>
            <Image style={styles.logo} source={image} />
        </View>

        <View style={styles.subContainer2}>
            <Text style={styles.welcomeText}>Welcome back</Text>
            <Text style={styles.logintext}>Login to your account</Text>
        </View>

        <View style={styles.subContainer3}>
            <TextInput style={styles.input}
            placeholder="Username"
            onChangeText={text => setUsername(text)}
            />
            <TextInput style={styles.input}
                placeholder="Password"
                secureTextEntry
                onChangeText={text => setPassword(text)}
            />
            <View style={styles.forgot}>
            <TouchableOpacity onPress={forgotPassword}>
                    <Text style={styles.buttonText}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
                    <Text style={{fontSize:18, color:''}}>Login</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.last}>
                <Text>Don't have an account? </Text>
                <TouchableOpacity onPress={()=>{navigation.navigate('register')}}>
                    <Text style={styles.buttonText}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  );
};

export default LoginScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
    subContainer2: {
        alignItems:'center',
        top:-200,
        flex: 1,
    },
    subContainer3: {
        alignItems:'center',
        top:-250,
        flex: 1,
    },
    input: {
        backgroundColor: "#FAAB78",
        width:'80%',
        height:'40%',
        marginBottom:10,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    welcomeText: {
        fontSize: 30,
        fontWeight:500,
        letterSpacing: 2,
    },
    logo: {
        top:-230,
        height:500,
        width:400,
        // transform: [{ scale: 2 }],
        borderBottomLeftRadius: 100,
    borderBottomRightRadius: 280,
    // flex: 1,
    },
    forgot: {
        alignSelf: 'flex-end',
        paddingRight:40,
        top:-8,
    },
    logintext: {
        paddingTop:5,
        fontSize:13,
        fontWeight:200,
    },
    loginBtn: {
        backgroundColor: '#F97B22',
        top:80,
        borderRadius: 20,
        alignItems:'center',
        minWidth: 300,
        height:40,
        padding:10,
        },
    last:{
        paddingTop:90,
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        textDecorationLine: 'underline',
        color: 'black',
      },
    });
