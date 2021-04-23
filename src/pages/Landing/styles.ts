import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const styles = StyleSheet.create({
   container: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'space-around'
   },
   title: {
       fontSize: 32,
       fontWeight: 'bold',
       textAlign: 'center',
       color: colors.heading,
       marginTop: 38,
       fontFamily: fonts.heading
   },
   subtitle: {
       textAlign: 'center',
       fontSize: 18,
       paddingHorizontal: 20 ,
       color: colors.heading,
       fontFamily: fonts.text
   },
   image: {
       width: Dimensions.get('window').width * 0.9 
   }
})