import { useNavigation } from '@react-navigation/core';
import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import Card from '../../components/Card';
import EnvironmentButton from '../../components/EnvironmentButton';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import api from '../../services/api';
import colors from '../../styles/colors';
import { IEnvironmentsProps, IPlantsProps } from './interface';
import { styles } from './styles';

const Dashboard: React.FC = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [loadMore, setLoadMore] = useState(true);
  // const [loadedAll, setLoadedAll] = useState(false);

  const [environments, setEnvironments] = useState<IEnvironmentsProps[]>([]);
  const [plants, setPlants] = useState<IPlantsProps[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<IPlantsProps[]>([]);
  const [environmentSelected, setEnvironmentSelected] = useState('all');


  const handleSelectEnvironment = useCallback((environment: string) => {
    setEnvironmentSelected(environment);

    if(environment === 'all')
      return setFilteredPlants(plants);

    const filtered = plants.filter(plant => plant.environments.includes(environment));

    setFilteredPlants(filtered);
  }, [plants]);

  const handleSelectPlant = useCallback((plant: IPlantsProps) => {
    navigation.navigate('PlantDetails', {plant});
  }, []);

  const handleFetchMore = useCallback((distance: number) => {
    if(distance < 1)
      return;

    setLoadMore(true);
    setPage(oldState => { return oldState + 1});
  },[]);

  function fetchPlants() {
    api.get(`plants?_sort=name&_order=asc&_page=${page}&_limit=8`).then((response) => {
      const { data } = response;
      if(page > 1){
        setPlants(oldState => [...oldState, ...data]);
        setFilteredPlants(oldState => [...oldState, ...data]);
      }else{
        setPlants(data);
        setFilteredPlants(data);
      }

      setIsLoading(false);
      setLoadMore(false);
    });
  };

  useEffect(() => {
    fetchPlants();
  },[page]);

  useEffect(() => {
    api.get('plants_environments?_sort=title&_order=asc').then((response) => {
      const { data } = response;
      setEnvironments([{ key: 'all', title: 'All' }, ...data]);
    });
  },[]);

  if(isLoading)
    return <Loading />

  return (
      <View style={styles.container}>
          <Header />
          <View style={styles.content}>

            <Text style={styles.title}>
              In which environment 
            </Text>
            <Text style={styles.subtitle}>
              do you want to place your plant?
            </Text>

            <View>
              <FlatList 
                data={environments}
                keyExtractor={(item) => item.key}
                renderItem={({item}) => (
                  <EnvironmentButton 
                    title={item.title} 
                    active={item.key === environmentSelected}
                    onPress={() => handleSelectEnvironment(item.key)}
                  />       
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.environmentList}
              />
            </View>


          </View>
            <View style={styles.plantList}>
              <FlatList 
                data={filteredPlants}
                keyExtractor={(item) => String(item.id)}
                renderItem={({item}) => (
                  <Card 
                    data={item} 
                    onPress={() => handleSelectPlant(item)}  
                  />
                )}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                onEndReachedThreshold={0.1}
                onEndReached={({distanceFromEnd}) => handleFetchMore(distanceFromEnd)}
                ListFooterComponent={
                  <>
                    {loadMore && (
                      <ActivityIndicator color={colors.green} />
                    )}
                  </>
                }
              />
            </View>
      </View>
  );
}

export default Dashboard;