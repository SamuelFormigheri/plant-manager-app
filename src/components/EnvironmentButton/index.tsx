import React from 'react';
import { Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { styles } from './styles';
import { IEnvironmentButtonProps } from './interface';


const EnvironmentButton: React.FC<IEnvironmentButtonProps> = ({
    title,
    active,
    ...rest
}) => {
  return (
      <RectButton
        style={[styles.button,
            active && styles.buttonActive
        ]}
        {...rest}
      >
          <Text style={[styles.buttonText,
            active && styles.buttonTextActive
          ]}>
              {title}
          </Text>
      </RectButton>
  );
}

export default EnvironmentButton;