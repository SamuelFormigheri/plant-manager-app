import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { IComponentButton } from './interface';
import { styles } from './styles';

const Button: React.FC<IComponentButton> = ({
    title,
    children,
    ...rest
}) => {
  return (
    <TouchableOpacity 
      style={styles.button}
      {...rest}
    >
        <Text style={styles.buttonText}>
            {title ? 
              (
                title
              ): 
              (
                children
              )
            }
        </Text>
    </TouchableOpacity>
  );
}

export default Button;