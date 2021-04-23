import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { AuthContext } from './context';
import { IUser } from './interface';


const AuthProvider: React.FC = ({
    children
}) => {
  const [user, setUser] = useState<IUser>({} as IUser);

  function signUser(user: IUser) {
      if(!user || !user.name)
        return;
      
      AsyncStorage.setItem('@PlantManager:user', JSON.stringify(user));
      setUser(user);
  }

  useEffect(() => {
    async function getInitialUser() {
        const userStored = await AsyncStorage.getItem('@PlantManager:user');
        if(!userStored)
            return;
        const user = await JSON.parse(userStored);
        setUser(user);
      }
      getInitialUser();
  },[]);
  
  return (
      <AuthContext.Provider value={{
          user,
          signUser
      }}>
          {children}
      </AuthContext.Provider>
  );
}

export default AuthProvider;