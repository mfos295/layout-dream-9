import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.appContainer}>
        <Text style={styles.title}>Dream AI App</Text>
        <Text style={styles.subtitle}>
          Welcome to our modern AI experience!
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  appContainer: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    padding: 20,
    borderRadius: 8,
    width: "80%",
    maxWidth: 400,
    textAlign: "center",
  },
  title: {
    color: "#333",
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#666",
    fontSize: 16,
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#3498db",
    borderRadius: 4,
    padding: 10,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});

export default App;
