import { Box } from "@chakra-ui/react";
import React from "react";

export const ItemListComponent = ({ itemList }) => {
  return itemList.map((item, index) => (
    <Box
      key={index}
      w="100%"
      borderWidth="1px"
      borderRadius="lg"
      p="5px 10px"
      margin="10px 0px"
      marginTop={index === 0 ? "30px" : "0px"}
      backgroundColor="aliceblue"
    >
      {item}
    </Box>
  ));
};
