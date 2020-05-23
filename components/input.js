import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const Input = ({
  value,
  placeholder,
  setValue,
  type,
  length,
  secureTextEntry,
  label,
  editable,
}) => {
  return (
    <View>
      <View style={styles.label}>
        <Text style={styles.labelText}>{label}</Text>
      </View>
      <TextInput
        style={styles.profileName}
        onChangeText={(text) => setValue(text)}
        value={value}
        placeholder={placeholder}
        keyboardType={type}
        maxLength={length}
        secureTextEntry={secureTextEntry}
        editable={editable}
        autoCapitalize="none"
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: {
    position: "absolute",
    zIndex: 3, // works on ios
    elevation: 6,
    paddingHorizontal: 5,
    top: 0,
    left: 10,
    backgroundColor: "#3DCC85",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  labelText: {
    fontSize: 10,
    color: "#fff",
    fontFamily: "Jost-Medium",
  },
  profileName: {
    flex: 1,
    zIndex: 0,
    fontSize: 14,
    color: "#424242",
    fontFamily: "Jost-Regular",
    backgroundColor: "#fff",
    elevation: 5,
    margin: 5,
    padding: 10,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4,
    letterSpacing: 1,
  },
});
