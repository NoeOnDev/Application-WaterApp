import {TextInput} from 'react-native'
import {styles} from './StylesInputStyles'

interface InputProps {
  value: string
  onChangeText: (text: string) => void
  placeholder?: string
}

export const Input: React.FC<InputProps> = ({
  value,
  onChangeText,
  placeholder,
}) => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
    />
  )
}
