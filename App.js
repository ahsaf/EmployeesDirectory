
import React from 'react';
import { createStackNavigator,TransitionPresets } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import EmployeeListScreen from './src/screens/EmployeeListScreen'
import EmployeeDetailsScreen from './src/screens/EmployeeDetailsScreen'
import { Text}from "react-native"
const Stack = createStackNavigator();

const App =()=> {
  const backgroundStyle = {
    backgroundColor:Colors.lighter,
  };
  return (
      <NavigationContainer  >
            <Stack.Navigator
              screenOptions={{
                ...TransitionPresets.SlideFromRightIOS,
              }}
              >
              <Stack.Screen
                  name="EmployeeList"
                  options={{
                   title:"Employees List"
                  }}
                  component={EmployeeListScreen}
                />
               <Stack.Screen
               name="EmployeeDetails"
               options={{
                title:"Employee Details"
               }}
               component={EmployeeDetailsScreen}
             />
            </Stack.Navigator>
          </NavigationContainer>
  );
};

export default App;
