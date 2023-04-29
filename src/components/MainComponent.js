import React, { useState } from "react";
import { Flex, Box } from "@chakra-ui/react";
import SearchComponent from "./AddItemComponent";
import { ItemListComponent } from "./ItemListComponent";

const MainComponent = () => {
  const [itemList, setItemList] = useState([]);
  const addItemFunc = (value) => {
    if (value) {
      setItemList((prevData) => [...prevData, value]);
    }
  };

  return (
    <Flex
      maxW="80%"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      color="black"
      margin="auto"
      flexWrap="wrap"
    >
      <Box w="100%" borderWidth="1px" borderRadius="lg" p="20px">
        <SearchComponent onChange={addItemFunc} />
        <ItemListComponent itemList={itemList} />
      </Box>
    </Flex>
  );
};

export default MainComponent;
