import { Box, Button } from "native-base";
import ActivityList from "../components/ActivityList";

function HomePage(props) {
  return (
    <>
      <Box
        bg="white"
        alignSelf="center"
        alignItems="center"
        p="3"
        width="100%"
        borderColor="blue.500"
        _text={{
          fontSize: "5xl",
        }}
      >
        Peaceful Days
      </Box>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <ActivityList navigations={props.navigations} />
        <Button
          mt="4"
          borderRadius="full"
          onPress={() => console.log("hello world")}
        >
          +
        </Button>
      </Box>
    </>
  );
}

export default HomePage;
