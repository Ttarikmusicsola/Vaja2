import { Text, View, StyleSheet } from 'react-native';
import ImageViewer from '@/components/image-viewer';

const PlaceholderImage = require('@/assets/images/Tarik.jpg');

export default function AboutScreen() {
  return (
      <View style={styles.container}>
        <Text style={{ fontSize: 28, color: "red", paddingVertical: 20}}>
          Zdravo!
        </Text>
        <View style={styles.imageContainer}>
          <ImageViewer imgSource={PlaceholderImage} style={styles.roundImage} />
        </View>
        <Text style={{ fontSize: 22, color: "white", paddingVertical: 225, paddingHorizontal: 15}}>
          Moje ime je Tarik in hodim v 3. letink tehinka racunalnistva.
        </Text>
          <Text style={{ fontSize: 5, color: "white", paddingVertical: 15, paddingHorizontal: 15}}>
              HxH the besst
          </Text>
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
  roundImage: {
    width: 280,
    height: 280,
    borderRadius: 140,
  },
});
