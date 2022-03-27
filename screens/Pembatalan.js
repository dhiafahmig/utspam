import React, { useState, Component } from "react";
import { Text, SafeAreaView, Image } from "react-native";
import styles from "../style/Daftar_Pembatalan_Style.js";

export default function Daftar_Pembatalan({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../assets/tiket.png")}
        style={{
          width: 100,
          height: 100,
          alignSelf: "center",
          marginBottom: 10,
        }}
      />
      <Text
        style={[
          {
            fontSize: 19,
            fontWeight: "bold",
            color: "#00579C",
            textAlign: "center",
          },
        ]}
      >
        Tidak ada Aktivitas Pembatalan Tiket
      </Text>
    </SafeAreaView>
  );
}
