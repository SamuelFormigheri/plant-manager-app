import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const styles = StyleSheet.create({
   container: {
       flex: 1,
       width: '100%',
       alignItems: 'center',
       justifyContent: 'space-around'
   },
   form: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center',
       paddingHorizontal: 40,
       width: Dimensions.get('window').width * 0.9 
   },
   title: {
    fontSize: 24,
    textAlign: 'center',
    lineHeight: 32,
    color: colors.heading,
    fontFamily: fonts.heading,
    marginTop: 20
   },
   emoji: {
        fontSize: 44
   },
   footer: {
       marginTop: 40,
       width: '100%'
   }
})