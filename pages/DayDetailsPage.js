import { Box, Button } from "native-base";
import { Text } from "react-native";

function DayDetailsPage({ navigation, route }) {
  return (
    <>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">

        <Button onPress={() =>
        navigation.navigate("Home",{})}>
          Back
          </Button>

        <Text>
          {route.params.name}
        </Text>

        {route.params.activities.map((activity, count) => (
          <Text key={count++}>
            {activity.name}, {activity.timeOfDay}, {activity.duration}
          </Text>))
          }

<Button onPress={() => {console.log("Start")}}>Start</Button>

<Button onPress={() => {console.log("Edit")}}>Edit Activity</Button>
      </Box>
    </>
  );
}

export default DayDetailsPage;
