import React from 'react';
import LottieView from 'lottie-react-native';
import LoadAnimation from '../../assets/load.json';
import { View } from 'react-native';
import { styles } from './styles';

const Loading: React.FC = () => {
  return (
      <View style={styles.container}>
          <LottieView 
            source={LoadAnimation}
            autoPlay
            loop
            style={styles.animation}
          />
      </View>
  );
}

export default Loading;