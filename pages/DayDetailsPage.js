import { Box, Button } from "native-base";
import ActivityList from "../components/ActivityList";
import { Text } from "react-native-svg";

function DayDetailsPage(props) {
  return (
    <>
      <Text alignItems="center" justifyContent="center">
        YeeHaw {props.name}
      </Text>
    </>
  );
}

export default DayDetailsPage;
