import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export const styles = StyleSheet.create({
   input: {
       borderBottomWidth: 1,
       borderColor: colors.gray,
       color: colors.heading,
       width: '100%',
       fontSize: 18,
       marginTop: 50,
       padding: 10,
       textAlign: 'center'
   },
   borderGreen: {
       borderColor: colors.green
   }
})