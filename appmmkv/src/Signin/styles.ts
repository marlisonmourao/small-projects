import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121214",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    gap: 12
  },
  input: {
    width: "100%",
    backgroundColor: "#FFF",
    padding: 12,

    borderRadius: 5,
    borderColor: '#333',
    borderWidth: 1,

    color: "#000",
    fontSize: 18
  },
  button: {
    width: "100%",
    padding: 18,
    backgroundColor: "#22c55e",
    color: "white",
    borderRadius: 8,
  },

  textButton: {
    color: 'white',
    fontSize: 16,
    fontWeight: "bold",
    textAlign: 'center'
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
  }
});
