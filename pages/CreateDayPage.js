import { Box, Button, Center, HStack, Text } from "native-base";
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
    <Box flex="1" direction="column">
      <HStack mt="1/4" ml="5">
        <Button
          key="lg"
          size="lg"
          shadow={3}
          onPress={() => navigation.navigate("Home", {})}
        >
          Back
        </Button>
      </HStack>

      <Center flex="1" p="5">
        <Text fontSize="2xl">{questions[currentQuestionIndex]}</Text>
      </Center>
      <Center>
        <Text>
          {parseInt(currentQuestionIndex) + 1} of {questions.length}
        </Text>
      </Center>

      <Box flexDirection="column" p="4">
        <HStack space={10} justifyContent="center">
          {parseInt(currentQuestionIndex) >= 1 && (
            <Center>
              <Button
                onPress={() => {
                  setCurrentQuestionIndex(parseInt(currentQuestionIndex) - 1);
                }}
                key="lg"
                size="lg"
                shadow={3}
              >
                Back
              </Button>
            </Center>
          )}
          {parseInt(currentQuestionIndex) < questions.length - 1 && (
            <Center>
              <Button
                key="lg"
                size="lg"
                shadow={3}
                onPress={() => {
                  setCurrentQuestionIndex(parseInt(currentQuestionIndex) + 1);
                }}
              >
                Next
              </Button>
            </Center>
          )}
        </HStack>
      </Box>
    </Box>
  );
}

export default CreateDayPage;
