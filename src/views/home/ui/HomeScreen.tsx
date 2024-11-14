import { Link } from "expo-router";
import { useTranslation } from "react-i18next";
import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text>{t("home.title")}</Text>
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
