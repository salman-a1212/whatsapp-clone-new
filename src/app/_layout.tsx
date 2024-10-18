import React, { useState } from 'react'
import { Redirect, Stack } from 'expo-router'
import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { ToastProvider } from 'react-native-toast-notifications'
import imagesPath from '../constants/imagesPath';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {

    const [isLogin, setIsLogin] = useState(false)

    const [loaded, error] = useFonts({
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold
    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }


    return (
        <>
            <Stack screenOptions={{ headerShown: false }} />
            {isLogin ? <Redirect href={"/(main)"} />
                : <Redirect href={"/(auth)"} />}
        </>
    )
}

export default RootLayout
