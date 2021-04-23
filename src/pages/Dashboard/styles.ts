import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const styles = StyleSheet.create({
   container: {
       flex: 1,
       backgroundColor: colors.background
   },
   content: {
      paddingHorizontal: 30
   },
   title: {
      fontSize: 17,
      color: colors.heading,
      fontFamily: fonts.heading,
      lineHeight: 20,
      marginTop: 15
   },
   subtitle: {
      fontFamily: fonts.text,
      fontSize: 17,
      lineHeight: 20,
      color: colors.heading
   },
   environmentList: {
      height: 50,
      justifyContent: 'center',
      marginVertical: 25
   },
   plantList: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 30
   }
})