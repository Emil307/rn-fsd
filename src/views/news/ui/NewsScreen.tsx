import { useTranslation } from "react-i18next";
import { View, Text } from "react-native";
import { styles } from "../styles";

export default function NewsScreen() {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text>{t("news.title")}</Text>
    </View>
  );
}
