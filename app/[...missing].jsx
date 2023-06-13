import { Link, Stack } from 'expo-router';

import { Text, View } from '../components/Themed';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View className="flex-1 items-center justify-center p-5">
        <Text className="text-xl">This screen doesn't exist.</Text>

        <Link href="/" className="mt-4">
          <Text className="text-sm text-blue-600">Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}