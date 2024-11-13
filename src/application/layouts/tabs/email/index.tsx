import { Stack } from "expo-router";

export function EmailLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          title: "E-mail",
        }}
      />
    </Stack>
  );
}
