import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";

//screens
import Home from "./screens/Home";
import Pembatalan from "./screens/Pembatalan";
import Lainnya from "./screens/Lainnya";
import Daftar_Pesanan from "./screens/Daftar_Pesanan.js";
import Konfirmasi from "./screens/Konfirmasi";
import DetailPemesanan from "./screens/DetailPesanan";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({}) => {
            let rn = route.name;
            if (rn === "Home") {
              return <FontAwesome5 name="home" size={35} color="#00579C" />;
            } else if (rn === "Daftar Pesanan") {
              return <FontAwesome5 name="book" size={35} color="#00579C" />;
            } else if (rn === "Daftar Pembatalan") {
              return <FontAwesome5 name="ban" size={35} color="#00579C" />;
            } else if (rn === "Lainnya") {
              return <FontAwesome5 name="bars" size={35} color="#00579C" />;
            }
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={Navigasi_Beranda}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Riwayat Pesanan"
          component={Daftar_Pesanan}
          options={{
            headerTitle: "Daftar Pemesanan",
            headerStyle: { backgroundColor: "#024D88" },
            headerTitleAlign: "center",
            headerTitleStyle: { color: "#FFF" },
          }}
        />
        <Tab.Screen
          name="Daftar Pembatalan"
          component={Pembatalan}
          options={{
            headerTitle: "Daftar Pembatalan",
            headerStyle: { backgroundColor: "#024D88" },
            headerTitleAlign: "center",
            headerTitleStyle: { color: "#FFF" },
          }}
        />
        <Tab.Screen
          name="Lainnya"
          component={Lainnya}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
function Navigasi_Beranda() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Beranda"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Menu Konfirmasi Pesanan"
        component={Konfirmasi}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Menu Detail Pemesanan"
        component={DetailPemesanan}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
