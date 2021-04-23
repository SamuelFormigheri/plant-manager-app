import { useNavigation, useRoute } from '@react-navigation/core';
import { format, isBefore } from 'date-fns';
import React, { useCallback, useMemo, useState } from 'react';
import { 
    View, 
    Alert, 
    Text, 
    Image, 
    ScrollView,
    Platform,
    TouchableOpacity 
} from 'react-native';
import { SvgFromUri } from 'react-native-svg';
import WaterDrop from '../../assets/waterdrop.png';
import Button from '../../components/Button';
import DateTimePicker from '../../components/DateTimePicker';
import { usePlant } from '../../context/Plant/context';
import { IPlantDetailsParams } from './interface';
import { styles } from './styles';

const PlantDetails: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {savePlant} = usePlant();
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios');
  const [dateTime, setDateTime] = useState(new Date());
  const {plant} = route.params as IPlantDetailsParams;

  const handleChangeTime = useCallback((event: any, date: Date | undefined) => {
    if(Platform.OS === 'android')
        setShowDatePicker(oldState => !oldState);

    if(date && isBefore(date, new Date())){
        setDateTime(new Date());  
        return Alert.alert('You cannot choose a date in the past. 😪');
    }

    if(date)
        setDateTime(date);    
  },[]);

  const handleSavePlant = useCallback(() => {
    savePlant({...plant, dateTimeNotification: dateTime });
    navigation.navigate('Confirmation', {
        title: 'All right',
        subtitle: "Don't worry, we will allways remember you to take care of your plants.",
        icon: 'hug',
        buttonTitle: 'Thanks :D',
        nextScreen: 'MyPlants'
    }); 
  },[plant, dateTime]);

  const dateTimeFormatted = useMemo(() => {
    return <Text style={[styles.dateTimePickerText, { textAlign: 'center' }]}>{format(dateTime, 'HH:mm')}</Text>
  }, [dateTime])

  return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        <View style={styles.container}>
            <View style={styles.plantInfo}>
                <SvgFromUri 
                    uri={plant.photo}
                    height={150}
                    width={150}
                />
                <Text style={styles.plantName}>
                    {plant.name}
                </Text>
                <Text style={styles.plantAbout}>
                    {plant.about}
                </Text>
            </View>
            <View style={styles.controller}>
                <View style={styles.tipContainer}>
                    <Image 
                        source={WaterDrop}
                        style={styles.tipImage}
                    />
                    <Text style={styles.tipText}>
                        {plant.water_tips}
                    </Text>
                </View>

                <Text style={styles.alertLabel}>
                    Choose the best time to be remembered
                </Text>

                {showDatePicker ? (
                    <DateTimePicker 
                    value={dateTime}                
                    onChange={handleChangeTime}
                    />
                ): (
                    <>
                        {dateTimeFormatted}
                        <TouchableOpacity 
                            style={styles.dateTimePickerButton}
                            onPress={() => setShowDatePicker(true)}
                        >
                            <Text style={styles.dateTimePickerText}>Change time</Text>
                        </TouchableOpacity>
                    </>
                )}

                <Button 
                    title="Confirm reminder"
                    onPress={handleSavePlant}
                />
            </View>
        </View>
      </ScrollView>
  );
}

export default PlantDetails;