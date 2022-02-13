import { VStack, Center, HStack, Button } from "native-base";
import { Text } from "react-native";

function DayDetailsPage({ navigation, route }) {
  return (
    <Center flex={1}>
      <VStack space={6} alignItems="center">
        <Center w="64" h="20">
          <Button onPress={() => navigation.navigate("Home", {})}>Back</Button>
        </Center>
        <Center>
          {route.params.name} 
          {route.params.activities.map((activity, count) => (
            <Text key={count++}>
              {activity.name}, {activity.timeOfDay}, {activity.duration}
            </Text>
          ))}
        </Center>
        <Center>
          <HStack space={6} justifyContent="center">
            <Center>
              <Button
                onPress={() => {
                  console.log("Start");
                }}
              >
                Start
              </Button>
            </Center>
            <Center>
              <Button
                onPress={() => {
                  console.log("Edit");
                }}
              >
                Edit Activity
              </Button>
            </Center>
          </HStack>
        </Center>
      </VStack>
    </Center>
  );
}

export default DayDetailsPage;
