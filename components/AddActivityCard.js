import { useNavigation } from "@react-navigation/native";
import { Box, Heading, Center, Select, CheckIcon } from "native-base";
import { Pressable, Text } from "react-native";
import { useState } from "react";

function AddActivityCard(props) {
    let [service, setService] = useState("");
  return (
    <Box p="4" w="80" bg="indigo.300" rounded="lg" shadow={3}>
      <Center>
        <Box w="3/4" maxW="300">
          <Select
            selectedValue={service}
            minWidth="200"
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
        </Box>
      </Center>
    </Box>
  );
}

export default AddActivityCard;