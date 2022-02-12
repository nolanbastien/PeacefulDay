import { Box, Button } from "native-base";
import ActivityList from "../components/ActivityList";
import { Text } from "react-native-svg";

function DayDetailsPage({ navigation, route }) {
  return (
    <>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Button onPress={() => console.log(route.params.name)}>
          {route.params.name}
        </Button>
      </Box>
    </>
  );
}

export default DayDetailsPage;
