import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { useState } from 'react'
import { Participant } from '../../components/Participant'

export default function Home() {
  const [inputText, setInputText] = useState('')

  function handleParticipantAdd() {
    console.log('Você clicou no botão de Adicionar!')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de novembro de 2022.</Text>
      <Text style={styles.eventDate}>{inputText}</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          onChangeText={(newText) => setInputText(newText)}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Participant name="Marcelo Henrique" />
      <Participant name="Viniccius 13" />
      <Participant name="Leandro Twin" />
    </View>
  )
}
