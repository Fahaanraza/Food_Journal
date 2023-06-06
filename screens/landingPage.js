import { StyleSheet, Text, View, TouchableOpacity,Alert,ActivityIndicator, } from 'react-native';
import React, { useRef, useEffect,useState } from 'react';
import Video from 'react-native-video';
import bg from '../assets/images/background_video.mp4';
import auth from '../database/firebase';
import { getAuth, signOut, } from 'firebase/auth'


const LandingPage = ({ navigation , route}) => {
  route.params;
  console.log("🚀 ~ file: landingPage.js:11 ~ LandingPage ~ route.params:", route.params)
  console.log("🚀 ~ file: landingPage.js:11 ~ LandingPage ~ route:", route)
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const signOut = async() => {
    try {
      setIsLoading(true);
      const auth = getAuth();
      const res = await signOut(auth)
      console.log('User Signed out successfully!');
      setIsLoading(false);
      navigation.navigate('welcome');
    } catch (error) {
      console.log("🚀 ~ file: register.js:33 ~ registerUser ~ error:", error)
      setIsLoading(false);
      setErrorMessage(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Video
        source={bg} // Path to your video file
        style={[styles.backgroundVideo, styles.zoomVideo]}
        muted={true}
        repeat={true}
        playInBackground={false}
        playWhenInactive={false}
      />

        <View style={styles.containerSub}>
            <Text style={styles.text1}>LandingPage</Text>
            <Text style={styles.text2}>~Welcome to Foodie's Paradise!</Text>
        </View>

        <View style={styles.containerbotttom}>
        <TouchableOpacity style={styles.loginBtn} onPress={signOut}>
          <Text style={styles.loginText} >Sign Out</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.containerbotttom2}>

        </View>
    </View>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
    backgroundVideo: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    },
    zoomVideo: {
        transform: [{ scale: 1.3 }], // Adjust the scale value as needed
      },
    text1: {
    fontSize:40,
    fontWeight:700,
    },

    text2: {
        paddingTop:'10%',
        alignItems:'flex-end',
        paddingLeft:'25%',
    fontSize:18,
    fontWeight:400,
    },
    
    loginBtn: {
        width:'10%',
        backgroundColor: '#F97B22',
        color: '#fff',
        padding: 10,
        borderRadius: 20,
        alignItems:'center',
        fontSize: 50,
        minWidth: 150,
        },
    signup: {
        width:'10%',
        backgroundColor: 'white',
        color: '#fff',
        padding: 10,
        borderRadius: 20,
        alignItems:'center',
        fontSize: 50,
        minWidth: 150,
        },
    
    containerSub: {
    flex: 1,
    paddingTop:'30%',
    paddingLeft:'5%',
    },

    containerbotttom: {
        flexDirection: "row",
        justifyContent: 'space-evenly',
        // paddingBottom:'30%',
        // paddingLeft:'5%',
        
        },

    containerbotttom2: {
        flexDirection: "row",
        justifyContent: 'space-evenly',
        paddingBottom:'30%',
        paddingLeft:'5%',
        
        },
})
