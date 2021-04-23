import React from 'react';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { styles } from './styles';
import { IComponentCardSecondary } from './interface';
import { SvgFromUri } from 'react-native-svg';
import Animated from 'react-native-reanimated';
import { Feather } from '@expo/vector-icons';
import colors from '../../styles/colors';

const CardSecondary: React.FC<IComponentCardSecondary> = ({
    data,
    handleRemove,
    ...rest
}) => {
  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <View>
            <RectButton 
              style={styles.buttonRemove}
              onPress={handleRemove}
            >
              <Feather name="trash" size={32} color={colors.white} />
            </RectButton>
          </View>
        </Animated.View>
      )}
    >
      <RectButton
        style={styles.container}
        {...rest}
      >
          <SvgFromUri uri={data.photo} width={50} height={50}/>
          <Text style={styles.title}>
              {data.name}
          </Text>
          <View style={styles.details}> 
            <Text style={styles.timeLabel}>
              Water at
            </Text>
            <Text style={styles.time}>
              {data.hour}
            </Text>
            
          </View>
      </RectButton>
    </Swipeable>
  );
}

export default CardSecondary;