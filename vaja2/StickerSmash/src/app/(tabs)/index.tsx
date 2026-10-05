import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router';
import { Text, Pressable, StyleSheet, View } from 'react-native';

import ImageViewer from '@/components/image-viewer';

const PlaceholderImage = require('@/assets/images/pecdeck.jpg');

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 28, color: "white", paddingVertical: 20}}>
        Naprava za metuljčka
      </Text>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <Text style={{ fontSize: 22, color: "white", paddingVertical: 20z}}>
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
