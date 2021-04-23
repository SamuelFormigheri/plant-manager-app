import React, { useCallback } from 'react';
import { SafeAreaView, Text, Image} from 'react-native';
import {Feather} from '@expo/vector-icons';
import Watering from '../../assets/watering.png';
import Button from '../../components/Button';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../context/Auth/context';

const Landing: React.FC = () => {
  const {user} = useAuth();
  const navigation = useNavigation();
  
  const handleStart = useCallback(() => {
    if(user && user.name){
      navigation.navigate('Dashboard');
      return;
    }
       
    navigation.navigate('UserEntry');   
  },[user]);

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>
            Manage {'\n'} 
            your plants  {'\n'} 
            easily
        </Text>

        <Image 
          source={Watering} 
          resizeMode="contain"
        />

        <Text style={styles.subtitle}>
            Don't forget to water your plants anymore. {'\n'} 
            We take care to remember you {'\n'} 
            whenever you need.
        </Text>

        <Button onPress={handleStart}>
          <Feather name="chevron-right" size={22} />
        </Button>
        
    </SafeAreaView>
  );
}

export default Landing;