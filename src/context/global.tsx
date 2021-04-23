import React from 'react';
import AuthProvider from './Auth/provider';
import PlantProvider from './Plant/provider';

const SharedProvider: React.FC = ({children}) => {
  return (
      <AuthProvider>
        <PlantProvider>
          {children}
        </PlantProvider>
      </AuthProvider>
  );
}

export default SharedProvider;