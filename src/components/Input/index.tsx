import React, { useCallback, useState } from 'react';
import { NativeSyntheticEvent, TextInput, TextInputChangeEventData, TextInputFocusEventData } from 'react-native';
import { IComponentInput } from './interface';
import { styles } from './styles';

const Input: React.FC<IComponentInput> = ({
    state,
    setState,
    onBlur,
    onFocus,
    onChangeText,
    ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputBlur = useCallback((e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(false);
    setIsFilled(!!state);

    if(onBlur)
        onBlur(e);
  }, []);

  const handleInputChange = useCallback((e: string) => {
    setState(e);
    if(onChangeText)
        onChangeText(e);
  },[]);

  const handleInputFocus = useCallback((e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(true);
    if(onFocus)
        onFocus(e);
  }, []);

  return (
    <TextInput 
        style={[styles.input,
            (isFocused || isFilled) && styles.borderGreen
        ]} 
        onBlur={handleInputBlur}
        onChangeText={handleInputChange}
        onFocus={handleInputFocus}
        {...rest}
    />
  );
}

export default Input;