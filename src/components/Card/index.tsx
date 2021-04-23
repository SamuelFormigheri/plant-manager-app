import React from 'react';
import { Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { styles } from './styles';
import { IComponentCard } from './interface';
import { SvgFromUri } from 'react-native-svg';

const Card: React.FC<IComponentCard> = ({
    data,
    ...rest
}) => {
  return (
      <RectButton
        style={styles.card}
        {...rest}
      >
          <SvgFromUri uri={data.photo} width={70} height={70}/>
          <Text style={styles.cardText}>
              {data.name}
          </Text>
      </RectButton>
  );
}

export default Card;