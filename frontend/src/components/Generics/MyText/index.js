import React, { useState } from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";

const MyText = ({ value, color, size, weight, type, align, maxWidth }) => {
  return (
    <>
      <Text
        style={{
          color: color,
          fontFamily: weight,
          fontSize: size,
          textDecorationLine: type ? type : "none",
          textAlign: align,
          maxWidth: maxWidth,
        }}
      >
        {value}
      </Text>
    </>
  );
};

MyText.propTypes = {};

export default MyText;
