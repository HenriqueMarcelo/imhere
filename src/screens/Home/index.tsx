import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { useState } from 'react'
import { Participant } from '../../components/Participant'

export default function Home() {
  const [inputText, setInputText] = useState('')
  const [participants, setParticipants] = useState<string[]>([])

  function handleParticipantAdd() {
    setParticipants([...participants, inputText])
  }

  function handleParticipantRemove(name: string) {
    setParticipants(participants.filter((p) => p !== name))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de novembro de 2022.</Text>
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

      {participants.map((participant) => (
        <Participant
          key={participant}
          name={participant}
          onRemove={handleParticipantRemove}
        />
      ))}
    </View>
  )
}
