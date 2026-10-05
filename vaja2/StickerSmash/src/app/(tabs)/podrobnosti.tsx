import { ScrollView, StyleSheet, Text, View } from 'react-native';

import ImageViewer from '@/components/image-viewer';

const MuscleImage = require('@/assets/images/pc1.jpg');
const ResistanceImage = require('@/assets/images/pc2.jpg');
const MistakesImage = require('@/assets/images/pc3.jpg');

export default function Podrobnosti() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <View style={styles.textContent}>
          <Text style={{ fontSize: 28, color: "white"}}>
            Katere mišice dela?
          </Text>
          <Text style={styles.text}>
            Pec deck najbolj obremeni veliko prsno mišico, predvsem njen srednji del. Pri pravilni izvedbi pomagata tudi sprednji del rame in mišica serratus anterior.
          </Text>
        </View>
        <ImageViewer imgSource={MuscleImage} style={styles.cardImage} />
      </View>

      <View style={styles.section}>
        <ImageViewer imgSource={ResistanceImage} style={styles.cardImage} />
        <View style={styles.textContent}>
          <Text style={{ fontSize: 28, color: "white"}}>
            Vrsta naprave
          </Text>
          <Text style={styles.text}>
            Za prsne mišice je praviloma najboljši pec deck s padajočim profilom upora. Najtežji je v raztegnjenem položaju, proti stisku pa upor postopoma pade, zato lahko gib izvedeš nadzorovano in brez izgube položaja ramen.
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.textContent}>
          <Text style={{ fontSize: 28, color: "white"}}>
            Pogoste napake
          </Text>
          <Text style={styles.text}>1. dvigovanje ramen proti ušesom</Text>
          <Text style={styles.text}>2. prevelika teža in sunkoviti gibi</Text>
          <Text style={styles.text}>3. popolnoma iztegnjeni komolci</Text>
          <Text style={styles.text}>4. dvigovanje hrbta s sedeža</Text>
          <Text style={styles.text}>5. predolg razteg in izguba nadzora</Text>
        </View>
        <ImageViewer imgSource={MistakesImage} style={styles.cardImage} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
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
    color: '#ffd33d',
    fontSize: 19,
    fontWeight: '700',
  },
  text: {
    color: '#fff',
    fontSize: 15,
    lineHeight: 22,
  },
  cardImage: {
    width: 132,
    height: 132,
    borderRadius: 24,
  },
});
