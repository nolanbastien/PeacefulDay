import { Box, Button } from "native-base";
import ActivityList from "../components/ActivityList";

function HomePage() {
  return (
    <>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <ActivityList />
      </Box>
      <Box alignItems="center">
        <Button onPress={() => console.log("hello world")}>+</Button>
      </Box>
    </>
  );
}

export default HomePage;
