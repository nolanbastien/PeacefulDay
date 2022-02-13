import { useNavigation } from "@react-navigation/native";
import { Center } from "native-base";
import { Pressable, Text } from "react-native";

function ActivityCard(props) {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() =>
        navigation.navigate("Day", {
          name: props.dayName,
          activities: props.activities,
        })
      }
    >
      <Center w="80" h="20" bg="indigo.300" rounded="lg" shadow={3}>
        <Text>{props.dayName}</Text>
        {props.activities.map((activity, count) => (
          <Text key={count++}>
            {activity.name}, {activity.timeOfDay}, {activity.duration}
          </Text>
        ))}
      </Center>
    </Pressable>
  );
}

export default ActivityCard;
