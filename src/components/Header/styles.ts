import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import fonts from '../../styles/fonts';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
        marginTop: getStatusBarHeight()
    },
    greetings: {
        fontSize: 22,
        color: colors.heading,
        fontFamily: fonts.text
    },
    userName: {
        fontSize: 28,
        color: colors.heading,
        fontFamily: fonts.heading 
    },
    profilePic: {
        width: 68,
        height: 68,
        borderRadius: 34
    }
})