import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

export function Participant() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Marcelo Henrique</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  )
}
