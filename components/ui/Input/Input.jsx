import React from "react";

import { InputGroup, InputRightElement, Input, Stack } from "@chakra-ui/react";

import Image from "next/image";

import search from "../../../assets/search.png";

import classes from "./Input.module.css";

const CustomInput = ({ type, placeholder, image, widthImage }) => {
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
          children={image && <Image src={search} width={widthImage} />}
        />
      </InputGroup>
    </Stack>
  );
};

export default CustomInput;
