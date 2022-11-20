import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text} from 'react-native';
import Navigator from '@/navigator/index';
import Home from './pages/Home';
import Detail from '@/pages/Detail';

export default Navigator;

// const Stack = createNativeStackNavigator();

// const Index = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={Home} />
//         <Stack.Screen name="Detail" component={Detail} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default Index;
