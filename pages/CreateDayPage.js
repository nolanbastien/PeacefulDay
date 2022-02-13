import {
  Box,
  Button,
  Center,
  HStack,
  ScrollView,
  Text,
  VStack,
  IconButton,
  AddIcon,
  MinusIcon,
} from "native-base";
import { useState } from "react";
import { TextInput, StyleSheet } from "react-native";
import AddActivityCard from "../components/AddActivityCard";

function CreateDayPage({ navigation }) {
  const [numOfActivities, setNumOfActivities] = useState("0");
  const [activityCards, setActivityCards] = useState([<AddActivityCard />]);

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
      <ScrollView>
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


        <Box flex={1} bg="white">
          <VStack space={10} justifyContent="center">

            <TextInput
              style={styles.input}
              placeholder="Name your day"
              maxLength={20}
            />
            
              <VStack space={6} alignItems="center">
                {activityCards.map(() => (
                  <AddActivityCard />
                ))}
              </VStack>


            <HStack space={4} justifyContent="center">
              <Center>
                <IconButton
                  mb="4"
                  variant="solid"
                  bg="blue.500"
                  colorScheme="indigo"
                  borderRadius="full"
                  icon={<MinusIcon />}
                  onPress={() => setActivityCards(activityCards.splice(1,activityCards.length-1))}
                />
              </Center>

              <Center>
                <IconButton
                  mb="4"
                  variant="solid"
                  bg="blue.500"
                  colorScheme="indigo"
                  borderRadius="full"
                  icon={<AddIcon />}
                  onPress={() => setActivityCards(activityCards.concat(<AddActivityCard />))}
                />
              </Center>
            </HStack>

            <Center>
              <Button
                onPress={() => navigation.navigate("Home", {})}
                key="lg"
                size="lg"
                shadow={3}
              >
                Submit
              </Button>
            </Center>
          </VStack>
        </Box>
      </ScrollView>
    </Box>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default CreateDayPage;
