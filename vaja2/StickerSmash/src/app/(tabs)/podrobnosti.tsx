import { ScrollView, StyleSheet, Text, View, Animated } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';

import ImageViewer from '@/components/image-viewer';

const MuscleImage = require('@/assets/images/pc1.jpg');
const ResistanceImage = require('@/assets/images/pc2.jpg');
const MistakesImage = require('@/assets/images/pc3.jpg');

export default function Podrobnosti() {
  const [f] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(f, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: false
    }).start();
  });

  return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.safeArea} edges={['top']}>
          <ScrollView contentContainerStyle={styles.container}>

            <View style={styles.section}>
              <View style={styles.textContent}>
                <Text style={styles.heading}>
                  Katere mišice dela?
                </Text>

                <Text style={styles.text}>
                  Pec deck najbolj obremeni veliko prsno mišico, predvsem njen
                  srednji del. Pri pravilni izvedbi pomagata tudi sprednji del
                  rame in mišica serratus anterior.
                </Text>
              </View>

              <View style={styles.imageContainer}>
                <Animated.View style={{ opacity: f }}>
                  <ImageViewer imgSource={MuscleImage} />
                </Animated.View>
              </View>
            </View>

            <View style={styles.section}>
              <View style={styles.imageContainer}>
                <Animated.View style={{ opacity: f }}>
                  <ImageViewer imgSource={ResistanceImage} />
                </Animated.View>
              </View>

              <View style={styles.textContent}>
                <Text style={styles.heading}>
                  Vrsta naprave
                </Text>

                <Text style={styles.text}>
                  Za prsne mišice je praviloma najboljši pec deck s padajočim
                  profilom upora. Najtežji je v raztegnjenem položaju, proti
                  stisku pa upor postopoma pade, zato lahko gib izvedeš
                  nadzorovano in brez izgube položaja ramen.
                </Text>
              </View>
            </View>

            <View style={styles.section}>
              <View style={styles.textContent}>
                <Text style={styles.heading}>
                  Pogoste napake
                </Text>

                <Text style={styles.text}>
                  1. dvigovanje ramen proti ušesom
                </Text>

                <Text style={styles.text}>
                  2. prevelika teža in sunkoviti gibi
                </Text>

                <Text style={styles.text}>
                  3. popolnoma iztegnjeni komolci
                </Text>

                <Text style={styles.text}>
                  4. dvigovanje hrbta s sedeža
                </Text>

                <Text style={styles.text}>
                  5. predolg razteg in izguba nadzora
                </Text>
              </View>

              <View style={styles.imageContainer}>
                <Animated.View style={{ opacity: f }}>
                  <ImageViewer imgSource={MistakesImage} />
                </Animated.View>
              </View>
            </View>

          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#25292e',
  },
  container: {
    flexGrow: 1,
    gap: 20,
    padding: 16,
    backgroundColor: '#25292e',
  },
  section: {
    minHeight: 190,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    padding: 16,
    borderRadius: 24,
    backgroundColor: '#343a40',
  },
  textContent: {
    flex: 1,
    gap: 8,
  },
  heading: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '700',
  },
  text: {
    color: '#ffffff',
    fontSize: 15,
    lineHeight: 22,
  },
  imageContainer: {
    flex: 1,
  },
  cardImage: {
    width: 132,
    height: 132,
    borderRadius: 24,
  },
});