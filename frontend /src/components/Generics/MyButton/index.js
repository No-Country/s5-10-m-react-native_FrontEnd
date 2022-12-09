import React from "react";
import { TouchableOpacity, Text } from "react-native";
import PropTypes from "prop-types";

const MyButton = ({ text, color, bgcolor, width, onPress, padding,style,icon, height }) => {
  return (
    <TouchableOpacity
    
      style={{
        backgroundColor: bgcolor ? bgcolor : "#fff",
        borderWidth: bgcolor ? 0 : 1,
        borderColor: !bgcolor && color,
        width: width ? width : "100%",
        borderRadius: 5,
        padding: padding ? padding : 8,
        elevation: 5,
        style:style,
         height:height
      }}
      onPress={onPress}
      icon={icon}
    >
    <Text style={{ color: color, textAlign: "center" }}> {icon} {text}</Text>
    </TouchableOpacity>
  );
};

MyButton.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  bgcolor: PropTypes.string,
  width: PropTypes.string,
  onPress: PropTypes.func.isRequired,
};

export default MyButton;