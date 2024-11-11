import { BlurView } from 'expo-blur'
import { LinearGradient } from 'expo-linear-gradient'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import Animated from 'react-native-reanimated'

export default function TabTwoScreen() {
  return (
    <LinearGradient
      colors={['#a855f7', '#ffffff']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <BlurView intensity={40} style={styles.box}>
        <View style={styles.topPart}>
          <Input title='Email' />
          <Input title='Password' />
        </View>

        <TouchableOpacity>
          <LinearGradient
            colors={['#ffffff', '#2563eb']}
            start={{ x: 0.4, y: -2 }}
            end={{ x: 0.5, y: 1 }}
            style={styles.loginButton}
          >
            <Text style={styles.loginText}>Log in</Text>
          </LinearGradient>
        </TouchableOpacity>
      </BlurView>
    </LinearGradient>
  )
}

function Input({ title }) {
  const onFocus = () => {}

  const onBlur = () => {}

  return (
    <View style={styles.inputWrapper}>
      <TextInput style={styles.inputBox} onFocus={onFocus} onBlur={onBlur} />

      <Animated.View style={styles.titleWrapper}>
        <Text style={styles.inputTitle}>{title}</Text>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  box: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 16,
    overflow: 'hidden',
    gap: 32,
  },
  topPart: { gap: 12 },
  inputWrapper: { position: 'relative', marginTop: 16 },
  inputTitle: { marginLeft: 4, fontSize: 14, color: '#6b7280' },
  inputBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 99,
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 16,
    color: '#374151',
  },
  loginButton: {
    padding: 16,
    alignItems: 'center',
    borderRadius: 99,
  },
  loginText: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
  },
  titleWrapper: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 16,
    justifyContent: 'center',
  },
})
