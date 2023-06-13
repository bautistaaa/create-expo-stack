import { View, StyleSheet, Text } from "react-native";
import { Stack, useRouter, useLocalSearchParams } from "expo-router";
import { Feather } from "@expo/vector-icons"

export default function Details() {
  const router = useRouter();
  const { name } = useLocalSearchParams();

  const BackButton = () => (
    <View style={styles.backButton}>
      <Feather name="chevron-left" size={16} color="#007AFF" />
      <Text style={styles.backButtonText} onPress={router.back}>Back</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Details", headerLeft: () =>  <BackButton /> }} />
      <View style={styles.main}>
        <Text style={styles.title}>Details</Text>
        <Text style={styles.subtitle}>Showing details for user {name}.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backButton: {
    flexDirection: "row"
  },
  backButtonText: {
    color: "#007AFF",
    marginLeft: 4
  },
  container: {
    flex: 1,
    padding: 24,
  },
  main: {
    flex: 1,
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});