import React, {useEffect} from 'react';
import {RouteProp, TabNavigationState} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootStackNavigation, RootStackParamList} from '.';
// import {RouteProp, TabNavigationState} from '@react-navigation/native';

import Home from '@/pages/Home';
import Listen from '@/pages/Listen';
import Found from '@/pages/Found';
import Account from '@/pages/Account';

export type BottomTabParamList = {
  Home: undefined;
  Listen: undefined;
  Found: undefined;
  Account: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

type Route = RouteProp<RootStackParamList, 'BottomTabs'> & {
  state?: TabNavigationState;
};

interface IProps {
  navigation: RootStackNavigation;
  route: Route;
}

function getHeaderTitle(route: Route) {
  // console.log(route);
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : route.params?.screen || 'Home';

  switch (routeName) {
    case 'Home':
      return '首页';
    case 'Listen':
      return '我听';
    case 'Found':
      return '发现';
    case 'Account':
      return '我的';
    default:
      return '首页';
  }
}

const BottomTabs: React.FC<IProps> = props => {
  const {navigation, route} = props;

  useEffect(() => {
    console.log(route);
    navigation.setOptions({
      headerTitle: getHeaderTitle(route),
    });
  }, [navigation, route]);

  return (
    <Tab.Navigator
    // tabBarOptions={{activeTintColor: '#f86442'}}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{tabBarLabel: '首页'}}
      />
      <Tab.Screen
        name="Listen"
        component={Listen}
        options={{tabBarLabel: '我听'}}
      />
      <Tab.Screen
        name="Found"
        component={Found}
        options={{tabBarLabel: '发现'}}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{tabBarLabel: '我的'}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
