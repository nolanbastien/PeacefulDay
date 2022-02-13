import { Box, Button, Center, HStack, ScrollView, Text } from "native-base";
import { useState } from "react";
import {} from "react-native";

const questions = [
  "How many breathing breaks do you want to take?",
  "How many walks do you want to take?",
  "How many exercise breaks do you want?",
  "How many stretching breaks to do you want?",
];

function CreateDayPage({ navigation }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState("0");

  return (
    <Box flex="1" direction="column" bg="white">
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
        Create your day
      </Box>

      <ScrollView>
        <Box flex={1} bg="white">
          <HStack space={10} justifyContent="center">
            <Center>
              <Button
                onPress={() => navigation.navigate("Home", {})}
                key="lg"
                size="lg"
                shadow={3}
              >
                Back
              </Button>
            </Center>
          </HStack>
        </Box>
      </ScrollView>
    </Box>
  );
}

export default CreateDayPage;
