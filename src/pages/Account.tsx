import React from 'react';
import {View, Text, Button} from 'react-native';
import {RootStackNavigation} from '@/navigator/index';

interface IProps {
  navigation: RootStackNavigation;
}

const Account: React.FC<IProps> = props => {
  const onPress = () => {
    const {navigation} = props;
    navigation.navigate('Detail', {
      id: 100,
    });
  };

  return (
    <View>
      <Text>Account1111</Text>
      <Button title="to Detail" onPress={onPress} />
    </View>
  );
};

export default Account;
