import React from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from './styles';
import ProfilePic from '../../assets/profilepic.jpg';
import { useAuth } from '../../context/Auth/context';

const Header: React.FC = () => {
  const {user} = useAuth();
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greetings}>Hello,</Text>
        <Text style={styles.userName}>{user.name}</Text>
      </View>
      <Image source={ProfilePic} style={styles.profilePic}/>
    </View>
  );
}

export default Header;