import React from "react";
import { Tabs } from "expo-router";

export function TabsLayout() {
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
          title: "Home",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="(news)"
        options={{
          title: "News",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="(chat)"
        options={{
          title: "Chat",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="(email)"
        options={{
          title: "E-mail",
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
