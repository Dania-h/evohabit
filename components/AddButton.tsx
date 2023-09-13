import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Svg, { Path } from "react-native-svg";

const AddButton = () => {
  return (
    <TouchableOpacity style={styles.container} accessible={true} accessibilityLabel="Add a habit">
      <Svg width={30} height={30} viewBox="0 0 30 30">
        <Path
          d="M22.5 16.2475H16.25V22.4975C16.25 22.829 16.1183 23.147 15.8839 23.3814C15.6495 23.6158 15.3315 23.7475 15 23.7475C14.6685 23.7475 14.3505 23.6158 14.1161 23.3814C13.8817 23.147 13.75 22.829 13.75 22.4975V16.2475H7.5C7.16848 16.2475 6.85054 16.1158 6.61612 15.8814C6.3817 15.647 6.25 15.329 6.25 14.9975C6.25 14.666 6.3817 14.348 6.61612 14.1136C6.85054 13.8792 7.16848 13.7475 7.5 13.7475H13.75V7.4975C13.75 7.16598 13.8817 6.84803 14.1161 6.61361C14.3505 6.37919 14.6685 6.2475 15 6.2475C15.3315 6.2475 15.6495 6.37919 15.8839 6.61361C16.1183 6.84803 16.25 7.16598 16.25 7.4975V13.7475H22.5C22.8315 13.7475 23.1495 13.8792 23.3839 14.1136C23.6183 14.348 23.75 14.666 23.75 14.9975C23.75 15.329 23.6183 15.647 23.3839 15.8814C23.1495 16.1158 22.8315 16.2475 22.5 16.2475Z"
          fill="white"
        />
      </Svg>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 16,
    right: 16,
    zIndex: 1,
    backgroundColor: "#081C15",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
  },
});

export default AddButton;
