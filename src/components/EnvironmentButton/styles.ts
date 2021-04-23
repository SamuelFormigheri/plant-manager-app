import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const styles = StyleSheet.create({
   button: {
       backgroundColor: colors.shape,
       height: 40,
       minWidth: 100,
       justifyContent: 'center',
       alignItems: 'center',
       borderRadius: 12,
       paddingHorizontal: 20,
       marginHorizontal: 5
   },
   buttonActive: {
        backgroundColor: colors.green_light
   },
   buttonText: {
       color: colors.heading,
       fontSize: 16,
       fontFamily: fonts.text
   },
   buttonTextActive: {
        fontFamily: fonts.heading,
        color: colors.green_dark
   }
})