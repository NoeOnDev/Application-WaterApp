import React, {useRef} from 'react';
import {TouchableOpacity, Text, Animated} from 'react-native';
import {styles} from './StylesButtonAuth';

interface ButtonAuthProps {
  title: string;
  onPress: () => void;
}

export const ButtonAuth: React.FC<ButtonAuthProps> = ({title, onPress}) => {
  const scaleValue = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.98,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={{transform: [{scale: scaleValue}]}}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};
