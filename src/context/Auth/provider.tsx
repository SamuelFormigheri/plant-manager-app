import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import React, { useEffect, useState } from 'react';
import { AuthContext } from './context';
import { IUser } from './interface';


const AuthProvider: React.FC = ({
    children
}) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [profilePic, setProfilePic] = useState<string>('');

  function signUser(user: IUser) {
      if(!user || !user.name)
        return;
      
      AsyncStorage.setItem('@PlantManager:user', JSON.stringify(user));
      setUser(user);
  }

  async function updatePhoto(){
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
    });
  
    if (!result.cancelled) {
      AsyncStorage.setItem('@PlantManager:profilePic', result.uri);
      setProfilePic(result.uri);
    }
  }

  useEffect(() => {
    async function getInitialUser() {
        const userStored = await AsyncStorage.getItem('@PlantManager:user');
        if(!userStored)
            return;
        const user = await JSON.parse(userStored);
        setUser(user);
    }
    async function getInitialProfilePic() {
        const profilePicSored = await AsyncStorage.getItem('@PlantManager:profilePic');
        if(!profilePicSored)
            return;
        setProfilePic(profilePic);
    }
      getInitialUser();
      getInitialProfilePic();
  },[]);
  
  return (
      <AuthContext.Provider value={{
          user,
          profilePic,
          signUser,
          updatePhoto
      }}>
          {children}
      </AuthContext.Provider>
  );
}

export default AuthProvider;