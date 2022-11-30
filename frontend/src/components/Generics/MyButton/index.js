import React from "react";
import { TouchableOpacity, Text } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons"; 
import colors from '../../../utils/colors'   

const MyButton = ({ text, color, bgcolor, width, onPress, padding, icons, styled }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: bgcolor ? bgcolor : "#fff",
        borderWidth: bgcolor ? 0 : 1,
        borderColor: !bgcolor && color,
        width: width ? width : "90%",
        borderRadius: 5,
        padding: padding ? padding : 8,
        elevation: 5,
        display: 'flex',
        ...styled
      }}
      onPress={onPress}
    >
      { icons != false ? 
        <Icon
          name="checkbox-marked-circle"
          size={20}
          color={colors.primary500}
          style={{
            left: 58,
            top: '50%',
            position: "absolute",
            color: color
            }}
        /> : null
      }
      <Text style={{ color: color, textAlign: "center" }}>{text}</Text>
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
