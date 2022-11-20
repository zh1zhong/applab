import React from 'react';
import {View, Text, Button} from 'react-native';
import {RootStackNavigation} from '@/navigator/index';

interface IProps {
  navigation: RootStackNavigation;
}

const Found: React.FC<IProps> = props => {
  const onPress = () => {
    const {navigation} = props;
    navigation.navigate('Detail', {
      id: 100,
    });
  };

  return (
    <View>
      <Text>Found1111</Text>
      <Button title="to Detail" onPress={onPress} />
    </View>
  );
};

export default Found;
