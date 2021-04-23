import AsyncStorage from '@react-native-async-storage/async-storage';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { createNotification, removeNotification } from '../Notification';
import { PlantContext } from './context';
import { IPlant, IPlantContext, IPlantLoad } from './interface';


const PlantProvider: React.FC = ({
    children
}) => {
  const [plants, setPlants] = useState<IPlantContext>({} as IPlantContext);

  async function savePlant(plant: IPlant) {
    try{
        if(!plant)
          return;

          const notificationId = await createNotification(plant);
  
          const data = await AsyncStorage.getItem('@PlantManager:plants');
          const oldPlants = data ? await JSON.parse(data) as IPlantContext : {} as IPlantContext;
          const newPlant = {
              [plant.id]: {
                  data: plant,
                  notificationId
              }
          }
        
        AsyncStorage.setItem('@PlantManager:plants', JSON.stringify({...newPlant, ...oldPlants}));
        setPlants({...newPlant, ...oldPlants});

    }catch{
        Alert.alert('Unable to Register Plant.😭')
    }
  }

  async function loadPlants(): Promise<IPlantLoad[] | undefined> {
    try{
          const arrayPlants = Object.keys(plants).map((plant) => {
              return {
                  ...plants[plant].data,
                  hour: format(new Date(plants[plant].data.dateTimeNotification), 'HH:mm')
              }
          }).sort((a, b) => Math.floor(
              new Date(a.dateTimeNotification).getTime() / 1000 - 
              Math.floor(new Date(b.dateTimeNotification).getTime() / 1000)
            ))
          
          return arrayPlants;
    }catch{
        Alert.alert('Unable to Load Plants.😭');
    }
  }

  function removePlant(plant: IPlant, callbackOnYes?: () => void){
    Alert.alert('Remove', `Are you sure that you want to remove ${plant.name}?`, [
        {
            text: 'No',
            style: 'cancel'
        },
        {
            text: 'Yes',
            onPress: async () => {
                try
                {
                    const arrayPlants = plants;

                    removeNotification(arrayPlants[plant.id].notificationId);

                    delete arrayPlants[plant.id];
                    
                    await AsyncStorage.setItem('@PlantManager:plants', JSON.stringify(arrayPlants));
                    setPlants(arrayPlants);

                    if(callbackOnYes)
                        callbackOnYes();
                }
                catch (error)
                {
                    Alert.alert('Unable to Remove Plants.😭')
                }
            }
        }
    ]);
  }

  useEffect(() => {
    async function getInitialPlants() {
        const plantStored = await AsyncStorage.getItem('@PlantManager:plants');
        if(!plantStored)
            return;
        const plant: IPlantContext = await JSON.parse(plantStored);
        setPlants(plant);
      }
      getInitialPlants();
  },[]);
  
  return (
      <PlantContext.Provider value={{
          plants,
          savePlant,
          loadPlants,
          removePlant
      }}>
          {children}
      </PlantContext.Provider>
  );
}

export default PlantProvider;