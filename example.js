// Cities:

// import React, {useState, useEffect} from 'react';
// import {View, Text, ScrollView} from 'react-native';
// import {Card, Button} from 'react-native-elements';
// import styled from 'styled-components/native';
// import axios from 'axios';

// // API URL and key
// const API_URL =
//   'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';
// const API_KEY = '7TACGF6DYJ2YQBNDDSQTG27JM';

// // List of cities to display weather data for
// const CITIES = [
//   {
//     name: 'Paris',
//     lat: '48.8567',
//     lon: '2.3510',
//   },
//   {
//     name: 'Lisbonne',
//     lat: '38.7264',
//     lon: '-9.14949',
//   },
//   {
//     name: 'Berlin',
//     lat: '52.5200',
//     lon: '13.4050',
//   },
//   {
//     name: 'Madrid',
//     lat: '40.4168',
//     lon: '-3.7038',
//   },
//   {
//     name: 'Rome',
//     lat: '41.9028',
//     lon: '12.4964',
//   },
//   {
//     name: 'Athens',
//     lat: '37.9838',
//     lon: '23.7275',
//   },
//   {
//     name: 'Amsterdam',
//     lat: '52.3702',
//     lon: '4.8952',
//   },
//   {
//     name: 'Brussels',
//     lat: '50.8503',
//     lon: '4.3517',
//   },
//   {
//     name: 'Vienna',
//     lat: '48.2082',
//     lon: '16.3738',
//   },
//   {
//     name: 'Stockholm',
//     lat: '59.3293',
//     lon: '18.0686',
//   },
//   {
//     name: 'Helsinki',
//     lat: '60.1699',
//     lon: '24.9384',
//   },
// ];

// const App = () => {
//   const [weatherData, setWeatherData] = useState([]);

//   // Fetch weather data for all cities on mount
//   useEffect(() => {
//     const fetchData = async () => {
//       const promises = CITIES.map(city =>
//         axios.get(`${API_URL}${city.lat},${city.lon}?key=${API_KEY}`),
//       );
//       const responses = await Promise.all(promises);
//       const data = responses.map((response, index) => ({
//         name: CITIES[index].name,
//         temperature: response.data.days[0].temp,
//         description: response.data.days[0].conditions,
//       }));
//       setWeatherData(data);
//     };
//     fetchData();
//   }, []);

//   return (
//     <ScrollView>
//       <Title>Weather in Europe</Title>
//       <Container>
//         {weatherData.map((city, index) => (
//           <CardContainer key={index}>
//             <Card>
//               <Card.Title>{city.name}</Card.Title>
//               <Temperature>{city.temperature}&deg;C</Temperature>
//               <Text>{city.description}</Text>
//             </Card>
//           </CardContainer>
//         ))}
//       </Container>
//     </ScrollView>
//   );
// };

// // Styled components
// const Title = styled.Text`
//   font-size: 24px;
//   text-align: center;
//   font-weight: bold;
//   margin-top: 20px;
//   margin-bottom: 10px;
// `;

// const Temperature = styled.Text`
//   font-size: 20px;
//   font-weight: bold;
//   margin-bottom: 10px;
// `;

// const Container = styled.View`
//   margin: 20px;
// `;

// const CardContainer = styled.View`
//   margin-bottom: 20px;
// `;

// export default App;

// Search:
// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
// } from 'react-native';
// import {Card, Button} from 'react-native-elements';
// import styled from 'styled-components/native';
// import axios from 'axios';

// // API URL and key
// const API_URL =
//   'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';
// const API_KEY = '7TACGF6DYJ2YQBNDDSQTG27JM';

// const WeatherSearch = () => {
//   const [query, setQuery] = useState('');
//   const [weatherData, setWeatherData] = useState([]);

//   // Function to fetch weather data for the given city
//   const searchWeather = async () => {
//     try {
//       const response = await axios.get(`${API_URL}${query}?key=${API_KEY}`);
//       const data = {
//         name: response.data.resolvedAddress,
//         temperature: response.data.days[0].temp,
//         description: response.data.days[0].conditions,
//       };
//       setWeatherData([data]);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <ScrollView>
//       {/* <Title>Search Weather</Title> */}
//       <Container>
//         <TextInput
//           style={styles.input}
//           onChangeText={setQuery}
//           value={query}
//           placeholder="Enter a city name"
//         />
//         <TouchableOpacity style={styles.button} onPress={searchWeather}>
//           <Text style={styles.buttonText}>Search</Text>
//         </TouchableOpacity>
//         {weatherData.length > 0 ? (
//           <CardContainer>
//             <Card>
//               <Card.Title>{weatherData[0].name}</Card.Title>
//               <Temperature>{weatherData[0].temperature}&deg;C</Temperature>
//               <Text>{weatherData[0].description}</Text>
//             </Card>
//           </CardContainer>
//         ) : (
//           <Text>No results</Text>
//         )}
//       </Container>
//     </ScrollView>
//   );
// };

// // Styled components
// const Title = styled.Text`
//   font-size: 24px;
//   text-align: center;
//   font-weight: bold;
//   margin-top: 20px;
//   margin-bottom: 10px;
// `;

// const Temperature = styled.Text`
//   font-size: 20px;
//   font-weight: bold;
//   margin-bottom: 10px;
// `;

// const Container = styled.View`
//   height: 250px;
//   margin: 20px;
// `;

// const CardContainer = styled.View`
//   margin-bottom: 20px;
// `;

// // Styles
// const styles = {
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
//   button: {
//     backgroundColor: 'lightblue',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//     marginBottom: 10,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// };

// export default WeatherSearch;
