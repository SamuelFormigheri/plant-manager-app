import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const styles = StyleSheet.create({
   button: {
       backgroundColor: colors.green,
       justifyContent: 'center',
       alignItems: 'center',
       borderRadius: 16,
       marginBottom: 10,
       height: 56,
       paddingHorizontal: 20
   },
   buttonText: {
       color: colors.white,
       fontSize: 24,
       fontFamily: fonts.text
   }
})