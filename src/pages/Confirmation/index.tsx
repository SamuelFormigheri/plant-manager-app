import React, { useCallback } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, SafeAreaView, Text} from 'react-native';
import Button from '../../components/Button';
import { styles } from './styles';
import { IConfirmationParams } from './interface';

const emojis = {
    hug: '🤗',
    smile: '😃'
}

const Confirmation: React.FC = () => {
   const navigation = useNavigation();
   const route = useRoute();

   const {
        title,
        icon,
        buttonTitle,
        nextScreen,
        subtitle
    } = route.params as IConfirmationParams;

   const handleMove = useCallback((path: string) => {
       navigation.navigate(path);
   },[]);

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.content}>
            <Text style={styles.emoji}>
                {emojis[icon]}
            </Text>
            <Text style={styles.title}>
                {title}
            </Text>
            <Text style={styles.subtitle}>
                {subtitle}
            </Text>
            <View style={styles.footer}>
                <Button title={buttonTitle} onPress={() => handleMove(nextScreen)}/>
            </View>
        </View>
    </SafeAreaView>
  );
}

export default Confirmation;