import React from "react";

import { InputGroup, InputRightElement, Input, Stack } from "@chakra-ui/react";

import Image from "next/image";

import classes from "./Input.module.css";

const CustomInput = ({ type, placeholder, image, widthImage, clickIcon }) => {
  return (
    <Stack>
      <InputGroup>
        <Input
          className={classes.inputStyle}
          type={type}
          placeholder={placeholder}
        />
        <InputRightElement
          top='50%'
          left='90%'
          transform='translateY(-50%)'
          children={
            image && (
              <Image onClick={clickIcon} src={image} width={widthImage} />
            )
          }
        />
      </InputGroup>
    </Stack>
  );
};

export default CustomInput;
