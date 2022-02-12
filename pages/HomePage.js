import { Box, Button } from "native-base";
import ActivityList from "../components/ActivityList";

function HomePage(props) {
  return (
    <>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <ActivityList navigations={props.navigations} />
      </Box>
      <Box alignItems="center">
        <Button onPress={() => console.log("hello world")}>+</Button>
      </Box>
    </>
  );
}

export default HomePage;
