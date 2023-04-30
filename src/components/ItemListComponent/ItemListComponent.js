import React, { useRef, useState } from "react";
import { Alert, AlertIcon, Box, Input } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import ModalComponent from "../Modal/Modal";

const ItemListComponent = ({ itemList, updatedArray }) => {
  const editModalRef = useRef(null);
  const deleteModalRef = useRef(null);
  const editInputRef = useRef(null);
  const [selectedRowData, setSelectedRowData] = useState({});
  const editItem = (data) => {
    editModalRef.current.isOpenModal();
    setSelectedRowData(data);
  };
  const [error, setError] = useState(false);

  const editModalData = {
    title: "Edit Item",
    button1: "Edit Item",
  };

  const deleteModalData = {
    title: "Delete Item",
    button1: "Delete Item",
  };

  const editInputOnChange = (field) => {
    setSelectedRowData((prevData) => ({
      ...prevData,
      item: field.target.value,
    }));
  };

  const editButtonClick = () => {
    if (selectedRowData.item) {
      setError(false);
      const updatedItemList = itemList.map((item, index) => {
        if (index === selectedRowData.index) {
          return selectedRowData.item;
        } else {
          return item;
        }
      });
      updatedArray(updatedItemList);
      editModalRef.current.isCloseModal();
    } else {
      setError(true);
    }
  };

  const deleteItem = (data) => {
    deleteModalRef.current.isOpenModal();
    setSelectedRowData(data);
  };

  const deleteButtonClick = () => {
    const updatedItemList = itemList.filter(
      (_, index) => index !== selectedRowData.index
    );

    updatedArray(updatedItemList);
    deleteModalRef.current.isCloseModal();
  };

  return (
    <>
      {itemList.map((item, index) => (
        <Box
          key={index}
          w="100%"
          borderWidth="1px"
          borderRadius="lg"
          p="5px 10px"
          margin="10px 0px"
          marginTop={index === 0 ? "30px" : "0px"}
          display="flex"
          justifyContent="space-between"
        >
          <div>{item}</div>
          <Box display="flex" alignItems="center">
            <Box
              display="flex"
              alignItems="center"
              borderLeft="1px solid #dbdbdb"
              padding="0px 10px"
            >
              <EditIcon
                cursor="pointer"
                color="#7e7e7e"
                onClick={() => editItem({ index, item })}
              />
            </Box>
            <Box
              display="flex"
              alignItems="center"
              borderLeft="1px solid #dbdbdb"
              padding="0px 0px 0px 10px"
            >
              <DeleteIcon
                cursor="pointer"
                color="#7e7e7e"
                onClick={() => deleteItem({ index, item })}
              />
            </Box>
          </Box>
        </Box>
      ))}
      <ModalComponent
        ref={editModalRef}
        data={editModalData}
        button1Click={editButtonClick}
      >
        <Input
          ref={editInputRef}
          value={selectedRowData.item}
          onChange={editInputOnChange}
        />
        {error ? (
          <Alert status="error" marginTop="10px" borderRadius="lg">
            <AlertIcon />
            This field can't be empty.
          </Alert>
        ) : null}
      </ModalComponent>
      <ModalComponent
        ref={deleteModalRef}
        data={deleteModalData}
        button1Click={deleteButtonClick}
      >
        Do you ant to delete this Item?
      </ModalComponent>
    </>
  );
};

export default ItemListComponent;
