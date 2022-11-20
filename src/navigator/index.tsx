import React from 'react';
import {View, Text, Platform, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {
  HeaderStyleInterpolators,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import BottomTabs from './BottomTabs';
import Detail from '@/pages/Detail';

export type RootStackParamList = {
  BottomTabs: {
    screen?: string;
  };
  Detail: {
    id: number;
  };
};

export type RootStackNavigation = NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

// function HomeScreen() {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'left',
          // 以下属性为android设置
          headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          headerStyle: {
            ...Platform.select({
              android: {
                elevation: 0,
                borderBottomWidth: StyleSheet.hairlineWidth,
              },
            }),
          },
        }}>
        <Stack.Screen
          options={{
            headerTitleAlign: 'left',
          }}
          name="BottomTabs"
          component={BottomTabs}
        />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
