import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';
import { VideoView, useVideoPlayer } from 'expo-video';

export default function App() {
  const player = useVideoPlayer(
    require('./assets/YTDown.com_YouTube_Media_LMaG_uOa440_Hey-Ya-Low-quality_001_360p.mp4')
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PlayGIF</Text>
      <ScrollView style={styles.srcst}>
        <Text>"Do momento em que entendi a fraqueza da minha carne, ela me ennojou. Eu ansiava pela força e certeza do aço. Aspirei à pureza da Máquina Abençoada.
Sua espécie se apega à sua carne, como se ela não fosse apodrecer e falhar com vocês. Um dia, a biomassa crua que vocês chamam de templo vai murchar, e vocês vão implorar para a minha espécie salvá-los.
Mas eu já estou salvo. Pois a Máquina é imortal... Mesmo na morte, eu sirvo ao Omnissiah.""Do momento em que entendi a fraqueza da minha carne, ela me ennojou. Eu ansiava pela força e certeza do aço. Aspirei à pureza da Máquina Abençoada.
Sua espécie se apega à sua carne, como se ela não fosse apodrecer e falhar com vocês. Um dia, a biomassa crua que vocês chamam de templo vai murchar, e vocês vão implorar para a minha espécie salvá-los.
Mas eu já estou salvo. Pois a Máquina é imortal... Mesmo na morte, eu sirvo ao Omnissiah.""Do momento em que entendi a fraqueza da minha carne, ela me ennojou. Eu ansiava pela força e certeza do aço. Aspirei à pureza da Máquina Abençoada.
Sua espécie se apega à sua carne, como se ela não fosse apodrecer e falhar com vocês. Um dia, a biomassa crua que vocês chamam de templo vai murchar, e vocês vão implorar para a minha espécie salvá-los.
Mas eu já estou salvo. Pois a Máquina é imortal... Mesmo na morte, eu sirvo ao Omnissiah.""Do momento em que entendi a fraqueza da minha carne, ela me ennojou. Eu ansiava pela força e certeza do aço. Aspirei à pureza da Máquina Abençoada.
Sua espécie se apega à sua carne, como se ela não fosse apodrecer e falhar com vocês. Um dia, a biomassa crua que vocês chamam de templo vai murchar, e vocês vão implorar para a minha espécie salvá-los.
Mas eu já estou salvo. Pois a Máquina é imortal... Mesmo na morte, eu sirvo ao Omnissiah.""Do momento em que entendi a fraqueza da minha carne, ela me ennojou. Eu ansiava pela força e certeza do aço. Aspirei à pureza da Máquina Abençoada.
Sua espécie se apega à sua carne, como se ela não fosse apodrecer e falhar com vocês. Um dia, a biomassa crua que vocês chamam de templo vai murchar, e vocês vão implorar para a minha espécie salvá-los.
Mas eu já estou salvo. Pois a Máquina é imortal... Mesmo na morte, eu sirvo ao Omnissiah.""Do momento em que entendi a fraqueza da minha carne, ela me ennojou. Eu ansiava pela força e certeza do aço. Aspirei à pureza da Máquina Abençoada.
Sua espécie se apega à sua carne, como se ela não fosse apodrecer e falhar com vocês. Um dia, a biomassa crua que vocês chamam de templo vai murchar, e vocês vão implorar para a minha espécie salvá-los.
Mas eu já estou salvo. Pois a Máquina é imortal... Mesmo na morte, eu sirvo ao Omnissiah.""Do momento em que entendi a fraqueza da minha carne, ela me ennojou. Eu ansiava pela força e certeza do aço. Aspirei à pureza da Máquina Abençoada.
Sua espécie se apega à sua carne, como se ela não fosse apodrecer e falhar com vocês. Um dia, a biomassa crua que vocês chamam de templo vai murchar, e vocês vão implorar para a minha espécie salvá-los.
Mas eu já estou salvo. Pois a Máquina é imortal... Mesmo na morte, eu sirvo ao Omnissiah.""Do momento em que entendi a fraqueza da minha carne, ela me ennojou. Eu ansiava pela força e certeza do aço. Aspirei à pureza da Máquina Abençoada.
Sua espécie se apega à sua carne, como se ela não fosse apodrecer e falhar com vocês. Um dia, a biomassa crua que vocês chamam de templo vai murchar, e vocês vão implorar para a minha espécie salvá-los.
Mas eu já estou salvo. Pois a Máquina é imortal... Mesmo na morte, eu sirvo ao Omnissiah.""Do momento em que entendi a fraqueza da minha carne, ela me ennojou. Eu ansiava pela força e certeza do aço. Aspirei à pureza da Máquina Abençoada.
Sua espécie se apega à sua carne, como se ela não fosse apodrecer e falhar com vocês. Um dia, a biomassa crua que vocês chamam de templo vai murchar, e vocês vão implorar para a minha espécie salvá-los.
Mas eu já estou salvo. Pois a Máquina é imortal... Mesmo na morte, eu sirvo ao Omnissiah.""Do momento em que entendi a fraqueza da minha carne, ela me ennojou. Eu ansiava pela força e certeza do aço. Aspirei à pureza da Máquina Abençoada.
Sua espécie se apega à sua carne, como se ela não fosse apodrecer e falhar com vocês. Um dia, a biomassa crua que vocês chamam de templo vai murchar, e vocês vão implorar para a minha espécie salvá-los.
Mas eu já estou salvo. Pois a Máquina é imortal... Mesmo na morte, eu sirvo ao Omnissiah.""Do momento em que entendi a fraqueza da minha carne, ela me ennojou. Eu ansiava pela força e certeza do aço. Aspirei à pureza da Máquina Abençoada.
Sua espécie se apega à sua carne, como se ela não fosse apodrecer e falhar com vocês. Um dia, a biomassa crua que vocês chamam de templo vai murchar, e vocês vão implorar para a minha espécie salvá-los.
Mas eu já estou salvo. Pois a Máquina é imortal... Mesmo na morte, eu sirvo ao Omnissiah.""Do momento em que entendi a fraqueza da minha carne, ela me ennojou. Eu ansiava pela força e certeza do aço. Aspirei à pureza da Máquina Abençoada.
Sua espécie se apega à sua carne, como se ela não fosse apodrecer e falhar com vocês. Um dia, a biomassa crua que vocês chamam de templo vai murchar, e vocês vão implorar para a minha espécie salvá-los.
Mas eu já estou salvo. Pois a Máquina é imortal... Mesmo na morte, eu sirvo ao Omnissiah.""Do momento em que entendi a fraqueza da minha carne, ela me ennojou. Eu ansiava pela força e certeza do aço. Aspirei à pureza da Máquina Abençoada.
Sua espécie se apega à sua carne, como se ela não fosse apodrecer e falhar com vocês. Um dia, a biomassa crua que vocês chamam de templo vai murchar, e vocês vão implorar para a minha espécie salvá-los.
Mas eu já estou salvo. Pois a Máquina é imortal... Mesmo na morte, eu sirvo ao Omnissiah.""Do momento em que entendi a fraqueza da minha carne, ela me ennojou. Eu ansiava pela força e certeza do aço. Aspirei à pureza da Máquina Abençoada.
Sua espécie se apega à sua carne, como se ela não fosse apodrecer e falhar com vocês. Um dia, a biomassa crua que vocês chamam de templo vai murchar, e vocês vão implorar para a minha espécie salvá-los.
Mas eu já estou salvo. Pois a Máquina é imortal... Mesmo na morte, eu sirvo ao Omnissiah.""Do momento em que entendi a fraqueza da minha carne, ela me ennojou. Eu ansiava pela força e certeza do aço. Aspirei à pureza da Máquina Abençoada.
Sua espécie se apega à sua carne, como se ela não fosse apodrecer e falhar com vocês. Um dia, a biomassa crua que vocês chamam de templo vai murchar, e vocês vão implorar para a minha espécie salvá-los.
Mas eu já estou salvo. Pois a Máquina é imortal... Mesmo na morte, eu sirvo ao Omnissiah.""Do momento em que entendi a fraqueza da minha carne, ela me ennojou. Eu ansiava pela força e certeza do aço. Aspirei à pureza da Máquina Abençoada.
Sua espécie se apega à sua carne, como se ela não fosse apodrecer e falhar com vocês. Um dia, a biomassa crua que vocês chamam de templo vai murchar, e vocês vão implorar para a minha espécie salvá-los.
Mas eu já estou salvo. Pois a Máquina é imortal... Mesmo na morte, eu sirvo ao Omnissiah.""Do momento em que entendi a fraqueza da minha carne, ela me ennojou. Eu ansiava pela força e certeza do aço. Aspirei à pureza da Máquina Abençoada.
Sua espécie se apega à sua carne, como se ela não fosse apodrecer e falhar com vocês. Um dia, a biomassa crua que vocês chamam de templo vai murchar, e vocês vão implorar para a minha espécie salvá-los.
Mas eu já estou salvo. Pois a Máquina é imortal... Mesmo na morte, eu sirvo ao Omnissiah.""Do momento em que entendi a fraqueza da minha carne, ela me ennojou. Eu ansiava pela força e certeza do aço. Aspirei à pureza da Máquina Abençoada.
Sua espécie se apega à sua carne, como se ela não fosse apodrecer e falhar com vocês. Um dia, a biomassa crua que vocês chamam de templo vai murchar, e vocês vão implorar para a minha espécie salvá-los.
Mas eu já estou salvo. Pois a Máquina é imortal... Mesmo na morte, eu sirvo ao Omnissiah.""Do momento em que entendi a fraqueza da minha carne, ela me ennojou. Eu ansiava pela força e certeza do aço. Aspirei à pureza da Máquina Abençoada.
Sua espécie se apega à sua carne, como se ela não fosse apodrecer e falhar com vocês. Um dia, a biomassa crua que vocês chamam de templo vai murchar, e vocês vão implorar para a minha espécie salvá-los.
Mas eu já estou salvo. Pois a Máquina é imortal... Mesmo na morte, eu sirvo ao Omnissiah.""Do momento em que entendi a fraqueza da minha carne, ela me ennojou. Eu ansiava pela força e certeza do aço. Aspirei à pureza da Máquina Abençoada.
Sua espécie se apega à sua carne, como se ela não fosse apodrecer e falhar com vocês. Um dia, a biomassa crua que vocês chamam de templo vai murchar, e vocês vão implorar para a minha espécie salvá-los.
Mas eu já estou salvo. Pois a Máquina é imortal... Mesmo na morte, eu sirvo ao Omnissiah.""Do momento em que entendi a fraqueza da minha carne, ela me ennojou. Eu ansiava pela força e certeza do aço. Aspirei à pureza da Máquina Abençoada.
Sua espécie se apega à sua carne, como se ela não fosse apodrecer e falhar com vocês. Um dia, a biomassa crua que vocês chamam de templo vai murchar, e vocês vão implorar para a minha espécie salvá-los.
Mas eu já estou salvo. Pois a Máquina é imortal... Mesmo na morte, eu sirvo ao Omnissiah.""Do momento em que entendi a fraqueza da minha carne, ela me ennojou. Eu ansiava pela força e certeza do aço. Aspirei à pureza da Máquina Abençoada.
Sua espécie se apega à sua carne, como se ela não fosse apodrecer e falhar com vocês. Um dia, a biomassa crua que vocês chamam de templo vai murchar, e vocês vão implorar para a minha espécie salvá-los.
Mas eu já estou salvo. Pois a Máquina é imortal... Mesmo na morte, eu sirvo ao Omnissiah.""Do momento em que entendi a fraqueza da minha carne, ela me ennojou. Eu ansiava pela força e certeza do aço. Aspirei à pureza da Máquina Abençoada.
Sua espécie se apega à sua carne, como se ela não fosse apodrecer e falhar com vocês. Um dia, a biomassa crua que vocês chamam de templo vai murchar, e vocês vão implorar para a minha espécie salvá-los.
Mas eu já estou salvo. Pois a Máquina é imortal... Mesmo na morte, eu sirvo ao Omnissiah.""Do momento em que entendi a fraqueza da minha carne, ela me ennojou. Eu ansiava pela força e certeza do aço. Aspirei à pureza da Máquina Abençoada.
Sua espécie se apega à sua carne, como se ela não fosse apodrecer e falhar com vocês. Um dia, a biomassa crua que vocês chamam de templo vai murchar, e vocês vão implorar para a minha espécie salvá-los.
Mas eu já estou salvo. Pois a Máquina é imortal... Mesmo na morte, eu sirvo ao Omnissiah.""Do momento em que entendi a fraqueza da minha carne, ela me ennojou. Eu ansiava pela força e certeza do aço. Aspirei à pureza da Máquina Abençoada.
Sua espécie se apega à sua carne, como se ela não fosse apodrecer e falhar com vocês. Um dia, a biomassa crua que vocês chamam de templo vai murchar, e vocês vão implorar para a minha espécie salvá-los.
Mas eu já estou salvo. Pois a Máquina é imortal... Mesmo na morte, eu sirvo ao Omnissiah.""Do momento em que entendi a fraqueza da minha carne, ela me ennojou. Eu ansiava pela força e certeza do aço. Aspirei à pureza da Máquina Abençoada.
Sua espécie se apega à sua carne, como se ela não fosse apodrecer e falhar com vocês. Um dia, a biomassa crua que vocês chamam de templo vai murchar, e vocês vão implorar para a minha espécie salvá-los.
Mas eu já estou salvo. Pois a Máquina é imortal... Mesmo na morte, eu sirvo ao Omnissiah.""Do momento em que entendi a fraqueza da minha carne, ela me ennojou. Eu ansiava pela força e certeza do aço. Aspirei à pureza da Máquina Abençoada.
Sua espécie se apega à sua carne, como se ela não fosse apodrecer e falhar com vocês. Um dia, a biomassa crua que vocês chamam de templo vai murchar, e vocês vão implorar para a minha espécie salvá-los.
Mas eu já estou salvo. Pois a Máquina é imortal... Mesmo na morte, eu sirvo ao Omnissiah.""Do momento em que entendi a fraqueza da minha carne, ela me ennojou. Eu ansiava pela força e certeza do aço. Aspirei à pureza da Máquina Abençoada.
Sua espécie se apega à sua carne, como se ela não fosse apodrecer e falhar com vocês. Um dia, a biomassa crua que vocês chamam de templo vai murchar, e vocês vão implorar para a minha espécie salvá-los.
Mas eu já estou salvo. Pois a Máquina é imortal... Mesmo na morte, eu sirvo ao Omnissiah."
        </Text>
      </ScrollView>
      <VideoView player={player} style={styles.video} />
      <TextInput placeholder="teste"></TextInput>
      <Button
        onPress={() => player.play()}
        title="Tocar vídeo"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  srcst : {
      backgroundColor: '#ddd9d9',
      maxHeight: 200,
    },
  video: {
    width: '100%',
    height: 220,
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 80,
    padding: 40
  }
});
