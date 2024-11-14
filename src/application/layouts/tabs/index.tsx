import React from "react";
import { Tabs } from "expo-router";
import { useTranslation } from "react-i18next";

export function TabsLayout() {
  const { t } = useTranslation();

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          height: 94,
          backgroundColor: "#fff",
        },
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          title: t("home.title"),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="(news)"
        options={{
          title: t("news.title"),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="(chat)"
        options={{
          title: t("chat.title"),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="(email)"
        options={{
          title: t("email.title"),
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
