// components/ForgotPassword.js
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity, Button, Alert, ActivityIndicator } from 'react-native';
import auth from '../database/firebase';
import { getAuth, sendPasswordResetEmail, } from 'firebase/auth'

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleResetPassword = async() => {
    if (email === '') {
      Alert.alert('Enter your email to reset password!');
    } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
        Alert.alert('You have entered an invalid email address!');
    } else {
        try {
            setIsLoading(true);
            const auth = getAuth();
            const res = await sendPasswordResetEmail(auth, email)
            Alert.alert('Password reset email sent. Please check your inbox.');
            navigation.navigate('login');
            setIsLoading(false);
            setUsername('');
            setPassword('');
            navigation.navigate('landingPage');
          } catch (error) {
            if (error.code === "auth/user-not-found"){
                Alert.alert('User not Found');
            }
            console.log("🚀 ~ file: register.js:33 ~ registerUser ~ error:", error)
            setIsLoading(false);
            setErrorMessage(error.message);
          }
        };
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
      <Text style={styles.title}>Forgot Password</Text>
      <Text style={styles.subtitle}>
        Enter your email address to receive a password reset link
      </Text>
      <View style={styles.items}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={val => setEmail(val)}
      />
      </View>
      <View style={styles.items}>
                <TouchableOpacity style={styles.loginBtn} onPress={handleResetPassword}>
                    <Text style={{fontSize:18, color:''}}>Reset Password</Text>
                </TouchableOpacity>
            </View>
      <Text
        style={styles.loginText}
        onPress={() => navigation.navigate('login')}>
        Remembered your password? Click here to login
      </Text>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 35,
    backgroundColor: '#fff'
  },
  input: {
    backgroundColor: "#FAAB78",
    width:'80%',
    height:40,
    marginBottom:10,
    borderRadius: 10,
    alignItems:'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
},
  title: {
    fontSize: 22,
    fontWeight: 600,
    marginBottom: 10,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 200,
    marginBottom: 20,
    textAlign: 'center'
  },
  loginText: {
    color: '#3740FE',
    marginTop: 25,
    textAlign: 'center'
  },
  preloader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  loginBtn: {
    backgroundColor: '#F97B22',
    borderRadius: 20,
    alignItems:'center',
    height:40,
    width:200,
    padding:10,
    },
    items: {
        alignItems:'center',
    }
});
