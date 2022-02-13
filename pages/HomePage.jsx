import { useNavigation } from "@react-navigation/native";
import { Box, Button } from "native-base";
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
        <ActivityList />
        <Button
          mt="6"
          borderRadius="full"
          onPress={() => navigation.navigate("Create", {})}
        >
          +
        </Button>
      </Box>
    </Box>
  );
}

export default HomePage;
