import {
    Box, Center, CheckIcon,
    HStack, Select
} from "native-base";
import { useMemo, useState } from "react";
import { StyleSheet, Text } from "react-native";
import TimePicker from "react-native-wheel-time-picker";

const MILLISECONDS_PER_MINUTE = 60 * 1000;
const MILLISECONDS_PER_HOUR = 60 * 60 * 1000;
const MILLISECONDS_PER_DAY = 24 * MILLISECONDS_PER_HOUR;

function AddActivityCard(props) {
  let [service, setService] = useState("");
  const [timeValue, setTimeValue] = useState(Date.now() % MILLISECONDS_PER_DAY);
  const [hour, min] = useMemo(() => {
    return [
      Math.floor(timeValue / MILLISECONDS_PER_HOUR),
      Math.floor((timeValue % MILLISECONDS_PER_HOUR) / MILLISECONDS_PER_MINUTE),
      Math.floor((timeValue % MILLISECONDS_PER_MINUTE) / 1000),
    ];
  }, [timeValue]);
  return (
    <Center
      p="3"
      w="80"
      bg="indigo.300"
      rounded="lg"
      shadow={3}
      alignItems="center"
    >
      <Select
        selectedValue={service}
        minWidth="200"
        w="3/4"
        maxW="300"
        bg="white"
        accessibilityLabel="Choose Activity"
        placeholder="Choose Activity"
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />,
        }}
        mt={1}
        onValueChange={(itemValue) => setService(itemValue)}
      >
        <Select.Item label="Breathe" value="Breathe" />
        <Select.Item label="Walk" value="Walk" />
        <Select.Item label="Stretch" value="Stretch" />
        <Select.Item label="Exercise" value="Exercise" />
      </Select>

      <HStack mt="3" space={7}>
        <Center>
          <Text style={styles.timeValue}>{`${hour < 10 ? "0" : ""}${hour}:${
            min < 10 ? "0" : ""
          }${min}`}</Text>
        </Center>
        <Center p={1}>
          <Box bg="white" rounded="lg" shadow={3}>
            <TimePicker
              value={timeValue}
              wheelProps={{
                wheelHeight: 70,
                itemHeight: 15,
              }}
              onChange={(newValue) => setTimeValue(newValue)}
            />
          </Box>
        </Center>
      </HStack>
    </Center>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  timeValue: {
    fontSize: 24,
    justifyContent: "center",
  },
});

export default AddActivityCard;
