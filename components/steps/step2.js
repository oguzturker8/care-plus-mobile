import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView, FlatList } from "react-native-gesture-handler";
import Input from "../input";
import Next from "./next";
import Back from "./back";
import Exercise from "./exercise";
import CustomError from "../customerror";

const Step2 = ({
  gender,
  height,
  weight,
  age,
  setAge,
  setIndicate,
  bmr,
  setBmr,
}) => {
  const [index, setIndex] = useState(0);
  const [error, setError] = useState(false);
  const excersice = [
    {
      id: "0",
      title: "Little/no exercise",
      const: 1.2,
    },
    {
      id: "1",
      title: "Light exercise",
      const: 1.375,
    },
    {
      id: "2",
      title: "Moderate exercise (3-5 days/week)",
      const: 1.55,
    },
    {
      id: "3",
      title: "Very active (6-7 days/week)",
      const: 1.725,
    },
    {
      id: "4",
      title: "Extra active (very active & physical job)",
      const: 1.9,
    },
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>basal metabolic rate</Text>
        <View style={styles.inputWrapper}>
          <Input
            label="Height"
            value={height}
            placeholder="Height (cm)   "
            editable={false}
          />
          <Input
            label="Weight"
            value={weight}
            placeholder="Weight (cm)   "
            editable={false}
          />
          <Input
            label="Age"
            value={age}
            placeholder="Age  "
            setValue={setAge}
            type="numeric"
            length={3}
          />
        </View>
        {error ? <CustomError text={error} /> : null}
        <View style={styles.pickerWrapper}>
          <Text style={styles.pickerTitle}>
            pick your weekly exercise level
          </Text>
          <FlatList
            data={excersice}
            renderItem={({ item }) => (
              <Exercise
                desc={item.title}
                type={item.id}
                index={index}
                setIndex={setIndex}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
        <TouchableWithoutFeedback
          onPress={() => {
            //BMR for Men = 66.47 + (13.75 * weight [kg]) + (5.003 * size [cm]) − (6.755 * age [years])
            //BMR for Women = 655.1 + (9.563 * weight [kg]) + (1.85 * size [cm]) − (4.676 * age [years])
            if (age !== 0) {
              setBmr(
                gender === "m"
                  ? (
                      (66.47 + 13.75 * weight + 5.003 * height - 6.755 * age) *
                      excersice[index].const
                    ).toFixed(0)
                  : (
                      (655.1 + 9.563 * weight + 1.85 * height - 4.676 * age) *
                      excersice[index].const
                    ).toFixed(0)
              );
              setError("");
            } else setError("Wrong age");
          }}
        >
          <View style={styles.calculateWrapper}>
            <AntDesign name="rightcircleo" size={18} color="#fff" />
            <Text style={styles.calculate}>calculate</Text>
          </View>
        </TouchableWithoutFeedback>

        <Text style={styles.result}>bmr : {bmr}</Text>
        <View style={styles.navigationWrapper}>
          <Back indicate={1} setIndicate={setIndicate} />
          <Next indicate={3} setIndicate={setIndicate} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Step2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 24,
  },
  title: {
    fontSize: 16,
    fontFamily: "Jost-Bold",
    textAlign: "center",
    color: "#3DCC85",
    margin: 10,
  },
  inputWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  ageWrapper: {
    width: "50%",
    marginLeft: "25%",
  },
  pickerWrapper: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  pickerTitle: {
    fontSize: 14,
    fontFamily: "Jost-Medium",
    color: "#3DCC85",
    marginTop: 5,
  },
  calculateWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    width: "50%",
    marginLeft: "25%",
    backgroundColor: "#3DCC85",
    marginTop: 20,
    elevation: 5,
    padding: 10,
    borderRadius: 8,
  },
  calculate: {
    fontSize: 14,
    textAlign: "center",
    color: "#fff",
    fontFamily: "Jost-Regular",
    marginLeft: 5,
  },
  result: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
    fontFamily: "Jost-Bold",
    textAlign: "center",
    textAlignVertical: "center",
    color: "#3DCC85",
  },
  navigationWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
