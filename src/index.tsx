import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {test} from '@/utils/index';

const Index = () => {
  useEffect(() => {
    test();
  }, []);

  return (
    <View>
      <Text>das1d11</Text>
    </View>
  );
};

export default Index;
