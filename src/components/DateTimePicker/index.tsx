import React from 'react';
import RNCDateTimePicker from '@react-native-community/datetimepicker';
import { IDateTimePicker } from './interface';

const DateTimePicker: React.FC<IDateTimePicker> = ({
    ...rest
}) => {
  return (
    <RNCDateTimePicker mode="time" display="spinner" {...rest}/>
  );
}

export default DateTimePicker;