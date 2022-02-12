import { Center } from "native-base";
import { Text } from "react-native";

function ActivityCard(props) {
  // props == a day
  return (
    <Center w="64" h="20" bg="indigo.300" rounded="md" shadow={3}>
      <Text>{props.dayName}</Text>
      {props.activities.map((activity, count) => (
          <Text key={count++}>{activity.name}, {activity.timeOfDay}, {activity.duration}</Text>
      ))}
    </Center>
  );
}

export default ActivityCard;
