import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useRef, useEffect } from 'react';
import Video from 'react-native-video';
import bg from '../assets/images/background_video.mp4';

const Welcome = ({ navigation }) => {

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
            <Text style={styles.text1}>Embark on a Mouthwatering Journey</Text>
            <Text style={styles.text2}>~Welcome to Foodie's Paradise!</Text>
        </View>

        <View style={styles.containerbotttom}>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText} onPress={()=>{navigation.navigate('login')}}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signup}>
          <Text style={styles.loginText} onPress={()=>{navigation.navigate('register')}}>Sign up</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.containerbotttom2}>

        </View>
    </View>
  );
};

export default Welcome;

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
