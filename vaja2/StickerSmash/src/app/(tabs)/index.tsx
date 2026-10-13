import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router';
import { Text, Pressable, StyleSheet, View, Animated } from 'react-native';
import { useState, useEffect } from 'react';

import ImageViewer from '@/components/image-viewer';

const PlaceholderImage = require('@/assets/images/pecdeck.jpg');

export default function Index() {
  const [f] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(f, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: false
    }).start();
  });

  return (
      <View style={styles.container}>
        <Text style={{ fontSize: 28, color: "white", paddingVertical: 20}}>
          Naprava za metuljčka
        </Text>

        <View style={styles.imageContainer}>
          <Animated.View style={{ opacity: f }}>
            <ImageViewer imgSource={PlaceholderImage} />
          </Animated.View>
        </View>

        <Text style={{ fontSize: 22, color: "white", paddingVertical: 20, paddingHorizontal: 15}}>
          Naprava za metuljčka je fitnes naprava in
          izolacijska vaja, namenjena krepitvi prsnih mišic.
        </Text>

        <Link href="/podrobnosti" asChild>
          <Pressable style={styles.button}>
            <Ionicons name="search-outline" size={22} color="#25292e" />
            <Text style={styles.buttonText}>Podrobnosti</Text>
          </Pressable>
        </Link>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#ffd33d',
    borderRadius: 12,
    paddingHorizontal: 18,
    paddingVertical: 12,
    marginBottom: 24,
  },
  buttonText: {
    color: '#25292e',
    fontSize: 16,
    fontWeight: '600',
  },
});