import { StyleSheet, Platform } from 'react-native'; 
import { useBreakpointValue } from 'native-base';
import { theme } from './theme'



export const globalStyles = StyleSheet.create({
    title:{
        fontFamily: 'Regular',
        color: theme.colors.primary.white,
    },
    droidSafeArea: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === 'android' ? 40 : 0
    },
})