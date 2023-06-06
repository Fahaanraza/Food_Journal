import React, { useState } from 'react';
import { View,StyleSheet, TextInput, Button, Alert,ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import app from '../database/firebase';
import { getAuth, createUserWithEmailAndPassword, } from 'firebase/auth'
import { showMessage, hideMessage } from "react-native-flash-message";
import { getFirestore } from "firebase/firestore";

const Register = ({ navigation }) => {
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cnfPassword, setCnfPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const db = getFirestore(app);

    const createUser = async (uid, username, email) => {
    console.log("🚀 ~ file: register.js:19 ~ createUser ~ uid:", uid)
    console.log("🚀 ~ file: register.js:19 ~ createUser ~ username:", username)
    await db.collection('users').doc(uid).set({
        Name: username,
        Email: email,
    });
    };

    const registerUser = async() => {
        if (email === '' && password === '' && displayName === '' && cnfPassword === '') {
          Alert.alert('Enter all details to signup!');
        } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
            Alert.alert('You have entered an invalid email address!');
        }  else if (password!==cnfPassword){
            Alert.alert('Password and confirm password must be same');
        }  else if (password.length < 6){
            Alert.alert('Password should be greater than 6 letters');
        } else {
          setIsLoading(true);
          try {
            setIsLoading(true);
            const auth = getAuth();
            const res = await createUserWithEmailAndPassword(auth, email, password)
            createUser(res.user.uid, displayName, email);
            console.log('User registered successfully!');
            setIsLoading(false);
            setDisplayName('');
            setEmail('');
            setPassword('');
            navigation.navigate('login');
          } catch (error) {
            if (error.code === "auth/email-already-in-use"){
                Alert.alert('Email already in use');
            }
            console.log("🚀 ~ file: register.js:33 ~ registerUser ~ error:", error)
            setIsLoading(false);
            setErrorMessage(error.message);
          }
        }
      };
    
      if (isLoading) {
        return (
          <View style={styles.preloader}>
            <ActivityIndicator size="large" color="#9E9E9E" />
          </View>
        );
      }
      
      const navigateToTerms = () => {
        navigation.navigate('TermsAndConditions');
      };

  return (
    <View style={styles.container}>

        <View style={styles.subContainer2}>
            <Text style={styles.register}>Sign Up</Text>
            <Text style={styles.registertext}>Create your new account</Text>
        </View>

        <View style={styles.subContainer3}>
            <TextInput
            style={styles.input}
            placeholder="Name"
            value={displayName}
            onChangeText={val => setDisplayName(val)}
        />
        <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={val => setEmail(val)}
        />
        <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={val => setPassword(val)}
            maxLength={15}
            secureTextEntry={true}
        />
        <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            value={cnfPassword}
            onChangeText={val => setCnfPassword(val)}
            maxLength={15}
            secureTextEntry={true}
        />
            <View style={styles.last1}>
                <Text style={styles.logintext}>By signing up you've agree to </Text>
                <TouchableOpacity onPress={navigateToTerms}>
                    <Text style={styles.buttonText}>Our Terms of Use And Privacy Notice</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.loginBtn} onPress={registerUser}>
                    <Text style={{fontSize:18, color:''}}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.last}>
                <Text style={styles.logintext}>Already have an account? </Text>
                <TouchableOpacity onPress={()=>{navigation.navigate('login')}} >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  );
};

export default Register;


const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
    subContainer2: {
        alignItems:'center',
        top:100,
        flex: 1,
    },
    subContainer3: {
        top:-170,
        alignItems:'center',
        flex: 1,
    },
    input: {
        backgroundColor: "#FAAB78",
        width:'80%',
        height:'15%',
        marginBottom:20,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    register: {
        fontSize: 30,
        fontWeight:500,
        letterSpacing: 2,
    },
    registertext: {
        paddingTop:5,
        fontSize:13,
        fontWeight:200,
    },
    forgot: {
        alignSelf: 'flex-end',
        paddingRight:40,
        top:-8,
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
    last1:{
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        alignItems: 'center',
        textDecorationLine: 'underline',
        padding:5,
        color: '#000',
      },
    });
