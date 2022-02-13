import { useNavigation } from "@react-navigation/native";
import { AddIcon, Box, Center, IconButton, ScrollView } from "native-base";
import ActivityList from "../components/ActivityList";

function HomePage() {
  const navigation = useNavigation();
  return (
    <Box flex={1} bg="white">
      <Box
        bg="white"
        alignSelf="center"
        alignItems="center"
        mt="20"
        p="10"
        width="100%"
        borderColor="blue.500"
        _text={{
          fontSize: "5xl",
        }}
      >
        Your Peaceful Days
      </Box>

      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <ScrollView>
          <ActivityList />
        </ScrollView>
      </Box>
      <Center>
        <IconButton
          mb="4"
          variant="solid"
          bg="blue.500"
          colorScheme="indigo"
          borderRadius="full"
          icon={<AddIcon />}
          onPress={() => navigation.navigate("Create", {})}
        />
      </Center>
    </Box>
  );
}

export default HomePage;
