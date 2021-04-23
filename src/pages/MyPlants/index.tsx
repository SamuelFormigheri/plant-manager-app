import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import Header from '../../components/Header';
import WaterDrop from '../../assets/waterdrop.png';
import { FlatList } from 'react-native-gesture-handler';
import { IPlantLoad } from '../../context/Plant/interface';
import { usePlant } from '../../context/Plant/context';
import { formatDistance } from 'date-fns';
import { enUS } from 'date-fns/locale';
import CardSecondary from '../../components/CardSecondary';
import Loading from '../../components/Loading';

const MyPlants: React.FC = () => {
  const { loadPlants, removePlant } = usePlant();
  const [myPlants, setMyPlants] = useState<IPlantLoad[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [nextWatered, setNextWatered] = useState<string>('');

  useEffect(() => {
    async function loadPlantsStored(){
      const plantsStored = await loadPlants();

      if(!plantsStored || plantsStored.length === 0){
        setIsLoading(false);
        return;
      }

      setMyPlants(plantsStored);
      setIsLoading(false);
    }
    loadPlantsStored();
  },[]);

  useEffect(() => {
    if(!myPlants || myPlants.length === 0){
      setNextWatered('');
      return;
    }
    const nextTime = formatDistance(
      new Date(myPlants[0].dateTimeNotification).getTime(),
      new Date().getTime(),
      {locale: enUS}
    );
    setNextWatered(`Don't forget to water the ${myPlants[0].name} at ${nextTime}`);
  },[myPlants]);

  if(isLoading)
    return <Loading />

  return (
      <View style={styles.container}>
          <Header />
          <View style={styles.content}>
            <View style={styles.spotlight}>
              <Image 
                source={WaterDrop} 
                style={styles.spotlightImage}
              />
              <Text style={styles.spotlightText}>
                {nextWatered}
              </Text>
            </View>
            <View style={styles.plants}>
              <Text style={styles.plantsTitle}>
                Next Watered
              </Text>

              <FlatList 
                data={myPlants}
                keyExtractor={(item) => String(item.id)}
                renderItem={({item}) => (
                  <CardSecondary 
                    data={item}
                    handleRemove={() => {
                      removePlant(item, () => setMyPlants(oldState => oldState.filter((olds) => olds.id !== item.id)));
                    }}
                  />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flex: 1 }}
              />

            </View>
          </View>
      </View>
  );
}

export default MyPlants;