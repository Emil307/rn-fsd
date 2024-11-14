import { View, Text, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { styles } from "../styles";

export default function ChatScreen() {
  const { i18n, t } = useTranslation();

  const currentLanguage = i18n.language;

  useEffect(() => {
    const loadLanguage = async () => {
      const savedLanguage = await AsyncStorage.getItem("language");
      if (savedLanguage) {
        i18n.changeLanguage(savedLanguage);
      }
    };
    loadLanguage();
  }, [i18n]);

  const changeLanguage = async (lang: string) => {
    await AsyncStorage.setItem("language", lang);
    i18n.changeLanguage(lang);
  };

  return (
    <View style={styles.container}>
      <Text>{t("chat.title")}</Text>

      <TouchableOpacity onPress={() => changeLanguage("ru-RU")}>
        <Text>Русский</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => changeLanguage("en-US")}>
        <Text>English</Text>
      </TouchableOpacity>
    </View>
  );
}
