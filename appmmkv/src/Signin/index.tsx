import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { MMKV, useMMKVObject, useMMKV } from "react-native-mmkv";
import { useEffect, useState } from "react";

//const storage = new MMKV({ id: 'appmmkv' })

type User = {
  name: string;
  email: string
}

export default function Signin() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [user, setUser] = useMMKVObject<User>('user');

  const storage = useMMKV({ id: "appmmkv" });

  function handleSave() {
    // storage.set('user', JSON.stringify({ name, email }))
    setUser({ name, email })
  }

  function fetchUser() {
    const data = storage.getString('user')
    setUser(data ? JSON.parse(data): {})
  }

  useEffect(() => {
    const listenet = storage.addOnValueChangedListener((changedKey) => {
      const newValue = storage.getString(changedKey)

      console.log('Chave =>', changedKey)
      console.log('Novo valor =>', newValue)
    })

    return () => listenet.remove()
  }, [])

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        onChangeText={setEmail}
      />

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.textButton}>Salvar</Text>
      </TouchableOpacity>
      
      <Text style={styles.text}>
        {user?.name} - {user?.email}
      </Text>
    </View>
  );
}