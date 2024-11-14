import { useTranslation } from "react-i18next";
import { View, Text } from "react-native";
import { styles } from "../styles";

export default function HomeScreen() {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text>{t("home.title")}</Text>
    </View>
  );
}
