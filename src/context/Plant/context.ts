import { createContext, useContext } from 'react';
import { IPlants } from './interface';

export const PlantContext = createContext<IPlants>({} as IPlants);

export function usePlant(): IPlants {
    const context = useContext(PlantContext);
    
    if (!context)
        throw new Error('usePlant must be used within the Plant Provider');

    return context;
}