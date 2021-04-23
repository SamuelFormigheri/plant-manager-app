import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { Alert, Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, Text, TextInput, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useAuth } from '../../context/Auth/context';
import { styles } from './styles';

const UserEntry: React.FC = () => {
  const [name, setName] = useState<string>("");
  const navigation = useNavigation();
  const { signUser } = useAuth();

  const handleSubmit = useCallback(() => {
      if(!name)
          return Alert.alert('Please, tell me your name. 😉');

      signUser({ name });
    navigation.navigate('Confirmation', {
        title: 'Okay',
        subtitle: "Now let's take care of your plants carefully",
        icon: 'smile',
        buttonTitle: 'Confirm',
        nextScreen: 'Dashboard'
    });   
  },[name]);
  
  return (
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView 
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                <View style={styles.form}>
                    <Text style={styles.emoji}>
                        {!!name ? '😊' : '😁'}
                    </Text>
                    <Text style={styles.title}>
                        How can we {'\n'} 
                        call you?
                    </Text>
                    <Input
                        state={name}
                        setState={setName}
                        placeholder="Type your Full Name"
                    />

                    <View style={styles.footer}>
                        <Button title="Start" onPress={handleSubmit}/>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
  );
}

export default UserEntry;