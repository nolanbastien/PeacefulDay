import { Button, Center, Text, Box } from "native-base";
import React, { useState } from "react";

function Dick() {
  const [dickSize, setDick] = useState("=");

  return (
    <Center flex={1} alignItems="center">
        <Text fontSize={18}>8={dickSize}D</Text>
        <Button key="lg" size="lg" onPress={() => setDick(dickSize + "=")}>Allonge</Button>
    </Center>
  );
}

export default Dick;
