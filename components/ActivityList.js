import { VStack } from "native-base";
import ActivityCard from "./ActivityCard";

const DummyData = [
  (Day = {
    dayName: "Peaceful1",
    activities: [
      {
        name: "Respiration",
        timeOfDay: "14:00",
        duration: "5 min",
      },
      {
        name: "Stretch",
        timeOfDay: "16:00",
        duration: "5 min",
      },
      {
        name: "Take a Walk",
        timeOfDay: "20:00",
        duration: "5 min",
      },
    ],
  }),
  (Day = {
    dayName: "Peaceful1",
    activities: [
      {
        name: "Respiration",
        timeOfDay: "14:00",
        duration: "5 min",
      },
      {
        name: "Stretch",
        timeOfDay: "16:00",
        duration: "5 min",
      },
      {
        name: "Take a Walk",
        timeOfDay: "20:00",
        duration: "5 min",
      },
    ],
  }),
  (Day = {
    dayName: "Peaceful1",
    activities: [
      {
        name: "Respiration",
        timeOfDay: "14:00",
        duration: "5 min",
      },
      {
        name: "Stretch",
        timeOfDay: "16:00",
        duration: "5 min",
      },
      {
        name: "Take a Walk",
        timeOfDay: "20:00",
        duration: "5 min",
      },
    ],
  }),
];

function ActivityList(props) {
  return (
    <VStack space={4} alignItems="center">
      {DummyData.map((day, count) => (
        <ActivityCard
          key={count++}
          dayName={day.dayName}
          activities={day.activities}
          nav={props.navigations}
        />
      ))}
    </VStack>
  );
}

export default ActivityList;
