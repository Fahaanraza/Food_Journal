import React from 'react';
import { StyleSheet, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack'; // Update this import
import FlashMessage from 'react-native-flash-message';

import LoginScreen from './screens/login';
import Register from './screens/register';
import Welcome from './screens/welcome';
import LandingPage from './screens/landingPage';
import TermsAndConditions from './screens/TermsAndConditions';
import ForgotPassword from './screens/forgotPassword';
require('./dbInitialization/db');

// const forFade = ({ current, next }) => {
//   const opacity = Animated.add(
//     current.progress,
//     next ? next.progress : 0
//   ).interpolate({
//     inputRange: [0, 1, 2],
//     outputRange: [0, 1, 0],
//   });

//   return {
//     headerLeftStyle: { opacity },
//     headerRightStyle: { opacity },
//     headerTitleStyle: { opacity },
//     headerBackgroundStyle: { opacity },
//   };
// };

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <FlashMessage position="top" />

      <Stack.Navigator>
        <Stack.Screen
          name="welcome"
          component={Welcome}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="login" component={LoginScreen}
         options={{
          headerShown: false,
        }}
          // options={
          //   {
          //     headerStyleInterpolator: forFade,
          //     headerTintColor: 'white',
          //     headerStyle: { backgroundColor: '#F97B22' },
          //   }
          // }
        />
         <Stack.Screen name="register" component={Register}
          options={{
            headerShown: false,
          }}
          // options={
          //   {
          //     headerStyleInterpolator: forFade,
          //     headerTintColor: 'white',
          //     headerStyle: { backgroundColor: '#F97B22' },
          //   }
          // }
        />
        <Stack.Screen name="landingPage" component={LandingPage}
         options={{
          headerShown: false,
        }}
          // options={
          //   {
          //     headerStyleInterpolator: forFade,
          //     headerTintColor: 'white',
          //     headerStyle: { backgroundColor: '#F97B22' },
          //   }
          // }
        />
         <Stack.Screen name="TermsAndConditions" component={TermsAndConditions}
          options={{
            headerShown: false,
          }}
          // options={
          //   {
          //     headerStyleInterpolator: forFade,
          //     headerTintColor: 'white',
          //     headerStyle: { backgroundColor: '#F97B22' },
          //   }
          // }
        />
        <Stack.Screen name="forgotPassword" component={ForgotPassword}
         options={{
          headerShown: false,
        }}
          // options={
          //   {
          //     headerStyleInterpolator: forFade,
          //     headerTintColor: 'white',
          //     headerStyle: { backgroundColor: '#F97B22' },
          //   }
          // }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
