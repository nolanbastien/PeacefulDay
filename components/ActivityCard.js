import { useNavigation } from "@react-navigation/native";
import { Box, Heading } from "native-base";
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
      <Box p="4" w="80" bg="indigo.300" rounded="lg" shadow={3}>
        <Heading size="md">{props.dayName}</Heading>

        <Box ml="3" mt="2" numberOfLines={3}>
          {props.activities.map((activity, count) => {
            if (count < 3)
              return (
                <Text key={count++}>
                  {activity.name}, {activity.timeOfDay}, {activity.duration}
                </Text>
              );
            else if (count == 3) return <Text>...</Text>;
          })}
        </Box>
      </Box>
    </Pressable>
  );
}

export default ActivityCard;
