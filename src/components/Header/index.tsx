import React from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from './styles';
import User from '../../assets/user.png';
import { useAuth } from '../../context/Auth/context';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';

const Header: React.FC = () => {
  const { user, updatePhoto, profilePic } = useAuth();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greetings}>Hello,</Text>
        <RectButton onPress={() => navigation.navigate('UserEntry')}>
          <Text style={styles.userName}>{user.name}</Text>
        </RectButton>
      </View>
      <RectButton onPress={updatePhoto}>
        <Image source={profilePic ? { uri: profilePic } : User} style={styles.profilePic}/>
      </RectButton>
    </View>
  );
}

export default Header;