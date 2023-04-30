import React, { useRef } from "react";
import { Flex, Box, Input, Button } from "@chakra-ui/react";

const AddItemComponent = ({ onChange }) => {
  const addItemInputRef = useRef(null);

  const addItemBtnClick = () => {
    onChange(addItemInputRef.current.value);
    addItemInputRef.current.value = "";
  };

  return (
    <Flex maxW="100%" justifyContent="center" flexWrap="wrap">
      <Box flex="80%">
        <Input w="100%" placeholder="Type Here" ref={addItemInputRef} />
      </Box>
      <Flex flex="20%" paddingLeft="10px" justifyContent="end">
        <Button
          borderWidth="1px"
          borderRadius="lg"
          borderColor="#dbdbdb"
          padding="2px 15px"
          h="100%"
          backgroundColor="white"
          onClick={addItemBtnClick}
        >
          Add Item
        </Button>
      </Flex>
    </Flex>
  );
};

export default AddItemComponent;
