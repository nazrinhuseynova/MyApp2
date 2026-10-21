import { useState } from "react";
import {
  Alert,
  Button,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

// export default function TabLayout() {
//   return (
//     <View style={{ paddingTop: StatusBar.currentHeight }}>
//       <View style={styles.container}>
//         <View style={styles.box1}>
//           <Text >React Native</Text>
//         </View>

//         <View style={styles.box2}>
//           <Text >NextJs</Text>
//         </View>

//         <View style={styles.box3}>
//           <Text >React</Text>
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     alignItems: "flex-start",
//   },
//   box1: {
//     backgroundColor: "tomato",
//     padding: 10,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   box2: {
//     backgroundColor: "orange",
//     padding: 10,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   box3: {
//     backgroundColor: "skyblue",
//     padding: 10,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   text: {
//     fontSize: 20,
//     color: "black",
//   },
// });

// export default function TabLayout() {
//   return (
//     <View style={{ paddingTop: StatusBar.currentHeight }}>
//       <View style={styles.container}>
//         <View style={[styles.box, { backgroundColor: "tomato" }]}>
//           <Text>React Native</Text>
//         </View>

//         <View style={[styles.box, { backgroundColor: "orange" }]}>
//           <Text>NextJs</Text>
//         </View>

//         <View style={[styles.box, { backgroundColor: "skyblue" }]}>
//           <Text>React</Text>
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     alignItems: "flex-end",
//   },
//   box: {
//     padding: 10,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   text: {
//     fontSize: 20,
//     color: "black",
//   },
// });

// export default function HomeScreen() {
//   return (
//     <View style={styles.container}>

//       <View style={styles.box1}>
//         <Text style={styles.text}>
//           FLEX 1 - BLUE
//         </Text>
//       </View>

//       <View style={styles.box2}>
//         <Text style={styles.text}>
//           FLEX 2 - GREEN
//         </Text>
//       </View>

//       <View style={styles.box3}>
//         <Text style={styles.text}>
//           FLEX 1 - RED
//         </Text>
//       </View>

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     backgroundColor: 'white',
//   },

//   box1: {
//     flex: 1,
//     backgroundColor: 'blue',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   box2: {
//     flex: 2,
//     backgroundColor: 'green',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   box3: {
//     flex: 1,
//     backgroundColor: 'red',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   text: {
//     color: 'white',
//     fontSize: 22,
//     fontWeight: 'bold',
//   },
// });

// export default function HomeScreen() {
//   const [name, setName] = useState<string>("");

//   const [savedName, setSavedName] = useState<string>("");

//   const handleSave = () => {
//     if (name.trim() !== "") {
//       setSavedName(name);
//       setName("");
//     }
//   };

//   return (
//     <View style={[styles.safe, { paddingTop: StatusBar.currentHeight }]}>
//       <ScrollView contentContainerStyle={styles.container}>
//         <Text style={styles.title}>Hello My App</Text>
//         <Text style={styles.label}>Enter your name:</Text>
//         <TextInput
//           style={styles.input}
//           value={name}
//           onChangeText={setName}
//           placeholder="Exp : Tural"
//           onSubmitEditing={handleSave}
//         />

//         <View style={styles.buttonContainer}>
//           <Button
//             title="Save name"
//             onPress={handleSave}
//             color="deepskyblue"
//           ></Button>
//         </View>

//         {savedName != "" && (
//           <Text style={styles.result}>Hello , {savedName}</Text>
//         )}
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   safe: {
//     flex: 1,
//   },
//   container: {
//     padding: 20,
//     alignItems: "center",
//   },
//   title: {
//     fontSize: 26,
//     fontWeight: "bold",
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 16,
//     marginBottom: 8,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     padding: 10,
//     width: "100%",
//     borderRadius: 6,
//     marginBottom: 10,
//   },
//   buttonContainer: {
//     width: "100%",
//     marginBottom: 20,
//   },
//   result: {
//     fontSize: 22,
//     color: "green",
//     marginTop: 20,
//   },
// });

const forecasts = [
  {
    cityStatus: "Sunny",
    temperature: "32 C",
    icon: "weather-sunny",
    color: "yellow",
  },
  {
    cityStatus: "Cloudy",
    temperature: "22 C",
    icon: "weather-cloudy",
    color: "deepskyblue",
  },
  {
    cityStatus: "Rainy",
    temperature: "18 C",
    icon: "weather-rainy",
    color: "#333",
  },
  {
    cityStatus: "Snowy",
    temperature: "-2 C",
    icon: "weather-snowy",
    color: "lightblue",
  },
  {
    cityStatus: "Windy",
    temperature: "16 C",
    icon: "weather-windy",
    color: "#333",
  },
];

import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function HomeScreen() {
  const [city, setCity] = useState<string>("");

  const [forecastResult, setForecastResult] = useState<null | {
    cityStatus: string;
    temperature: string;
    icon: string | any;
    color: string;
  }>(null);

  const handleForecast = () => {
    if (!city.trim()) {
      Alert.alert("Error", "Please enter city name!");
      return;
    }

    const randomForecast =
      forecasts[Math.floor(Math.random() * forecasts.length)];

    Alert.alert(
      `Weather for ${city}`,
      `${randomForecast.cityStatus}   ${randomForecast.temperature}`,
    );

    setForecastResult(randomForecast);
    setCity("");
  };

  return (
    <View style={[styles.container, { paddingTop: StatusBar.currentHeight }]}>
      <Text style={styles.title}>Get Weather Forecast</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter city name"
        value={city}
        onChangeText={setCity}
      />

      <View style={styles.button}>
        <Button title="Show Forecast" onPress={handleForecast}></Button>
      </View>

      {forecastResult && (
        <View style={styles.resultContainer}>
          <MaterialCommunityIcons
            name={forecastResult.icon}
            size={64}
            color={forecastResult.color}
          />

          <Text style={styles.resultText}>
            {forecastResult.cityStatus}   {forecastResult.temperature}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#f2f2f2",
  },
  title: {
    letterSpacing: 7,
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#333",
    borderRadius: 6,
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 15,
    color:'white'
  },
  button: {
    marginTop: 10,
  },
  resultContainer: {
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  resultText: {
    fontSize: 20,
    marginTop: 10,
  },
});
