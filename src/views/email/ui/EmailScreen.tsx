import { View, Text, StyleSheet } from "react-native";

export default function EmailScreen() {
  return (
    <View style={styles.container}>
      <Text>E-mail</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
