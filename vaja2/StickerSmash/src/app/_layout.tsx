import { Stack } from 'expo-router';
import { Animated } from 'react-native';
import { useState, useEffect } from 'react';

export default function RootLayout() {
    const [f] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(f, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: false
        }).start();
    });

    return (
        <Animated.View style={{ flex: 1, opacity: f }}>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
        </Animated.View>
    );
}
