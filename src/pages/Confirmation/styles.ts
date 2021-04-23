import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const styles = StyleSheet.create({
   container: {
       flex: 1,
       width: '100%',
       alignItems: 'center',
       justifyContent: 'space-around'
   },
   content: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center',
       paddingHorizontal: 54
   },
   title: {
    fontSize: 24,
    textAlign: 'center',
    lineHeight: 32,
    color: colors.heading,
    fontFamily: fonts.heading,
    marginTop: 15
   },
   subtitle: {
    fontSize: 22,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.text,
    paddingVertical: 20
   },
   emoji: {
        fontSize: 32
   },
   footer: {
       paddingHorizontal: 70,
       width: '100%'
   }
})