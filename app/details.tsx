import { View, Text, TouchableOpacity } from "react-native";
import { Stack, useRouter, useLocalSearchParams } from "expo-router";
import { Feather } from "@expo/vector-icons";

export default function Details() {
  const router = useRouter();
  const { name } = useLocalSearchParams();

  const BackButton = () => (
    <TouchableOpacity onPress={router.back}>
      <View className={styles.backButton}>
      <Feather name="chevron-left" size={16} color="#007AFF" />
      <Text className={styles.backButtonText}>Back</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View className={styles.container}>
      <Stack.Screen options={{ title: "Details", headerLeft: () =>  <BackButton /> }} />
      <View className={styles.main}>
        <Text className={styles.title}>Details</Text>
        <Text className={styles.subtitle}>Showing details for user {name}.</Text>
      </View>
    </View>
  );
}

const styles = {
  backButton: "flex-row",
  backButtonText: "text-blue-500 ml-1",
  container: "flex-1 p-6",
  main: "flex-1 max-w-[960]",
  title: "text-[64px] font-bold",
  subtitle: "text-4xl text-gray-700",
};