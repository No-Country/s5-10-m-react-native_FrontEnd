import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./src/navigation/mainStack";
import { useFonts } from "expo-font";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import colors from "./src/utils/colors";
export default function App() {
  const [loaded, error] = useFonts({
    Bold: require("./assets/fonts/SourceSansPro-Bold.ttf"),
    Regular: require("./assets/fonts/SourceSansPro-Regular.ttf"),
    Light: require("./assets/fonts/SourceSansPro-Light.ttf"),
  });

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
    },
    horizontal: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 10,
    },
  });
  return (
    <NavigationContainer>
      {loaded ? (
        <MainStack />
      ) : (
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color={colors.primary400} />
        </View>
      )}
    </NavigationContainer>
  );
}
