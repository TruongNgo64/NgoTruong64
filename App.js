import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';

export default function App() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <StatusBar style="auto" />

      {/* Title */}
      <Text style={styles.title}>Đăng nhập</Text>

      {/* Phone input section */}
      <View style={styles.form}>
        <Text style={styles.label}>Nhập số điện thoại</Text>
        <Text style={styles.desc}>
          Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Nhập số điện thoại của bạn"
          keyboardType="phone-pad"
        />
      </View>

      {/* Button */}
      <TouchableOpacity style={styles.button} disabled>
        <Text style={styles.buttonText}>Tiếp tục</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingTop: 80,
  },

  title: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 40,
  },

  form: {
    marginBottom: 30,
  },

  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },

  desc: {
    fontSize: 13,
    color: '#666',
    marginBottom: 16,
  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
    fontSize: 16,
  },

  button: {
    marginTop: 20,
    backgroundColor: '#e5e5e5',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },

  buttonText: {
    color: '#999',
    fontSize: 16,
    fontWeight: '600',
  },
});
