import { createContext, useContext } from 'react';
import { IAuthContext } from './interface';

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export function useAuth(): IAuthContext {
    const context = useContext(AuthContext);
    
    if (!context)
        throw new Error('useAuth must be used within the Auth Provider');

    return context;
}