import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  HStack,
  ScrollView,
} from "native-base";
import { Text } from "react-native";

function DayDetailsPage({ navigation, route }) {
  return (
    <>
      <Box flex={1} bg="white">
        <HStack mt="1/4" ml="5">
          <Button
            key="lg"
            size="lg"
            colorScheme="secondary"
            shadow={3}
            onPress={() => navigation.navigate("Home", {})}
          >
            Back
          </Button>
        </HStack>

        <Box
          alignSelf="center"
          alignItems="center"
          mt="15"
          p="5"
          width="100%"
          borderColor="blue.500"
          _text={{
            fontSize: "5xl",
          }}
        >
          {route.params.name}
        </Box>
        <ScrollView>
          <Box flex={1} bg="#fff" alignItems="center">
            {route.params.activities.map((activity, count) => (
              <Box key={count++} alignItems="center">
                <Flex direction="row" h="58" p="4">
                  <Text>{activity.timeOfDay}</Text>
                  <Divider
                    bg="emerald.500"
                    thickness="2"
                    mx="2"
                    orientation="vertical"
                  />
                  <Text>{activity.name}</Text>
                  <Divider
                    bg="indigo.500"
                    thickness="2"
                    mx="2"
                    orientation="vertical"
                  />
                  <Text>{activity.duration}</Text>
                </Flex>
              </Box>
            ))}
          </Box>
        </ScrollView>
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
      </Box>
    </>
  );
}

export default DayDetailsPage;
