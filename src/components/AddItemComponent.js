import React, { useRef } from "react";
import { Flex, Box, Input, Button } from "@chakra-ui/react";

const AddItemComponent = ({ onChange }) => {
  const addItemInputRef = useRef(null);

  const addItemBtnClick = () => {
    onChange(addItemInputRef.current.value);
  };

  return (
    <Flex maxW="100%" justifyContent="center" flexWrap="wrap">
      <Box flex="80%">
        <Input
          w="100%"
          placeholder="Type Here"
          borderWidth="1px"
          borderRadius="lg"
          p="5px 10px"
          ref={addItemInputRef}
        />
      </Box>
      <Flex flex="20%" paddingLeft="10px" justifyContent="end">
        <Button
          bgColor="gray"
          borderWidth="1px"
          borderRadius="lg"
          p="2px 10px"
          h="100%"
          color="white"
          onClick={addItemBtnClick}
        >
          Add Item
        </Button>
      </Flex>
    </Flex>
  );
};

export default AddItemComponent;
