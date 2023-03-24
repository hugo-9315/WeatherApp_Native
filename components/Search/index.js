import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Card, Button} from 'react-native-elements';
import styled from 'styled-components/native';
import axios from 'axios';

// API URL and key
const API_URL =
  'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';
const API_KEY = '7TACGF6DYJ2YQBNDDSQTG27JM';

const WeatherSearch = () => {
  const [query, setQuery] = useState('');
  const [weatherData, setWeatherData] = useState([]);

  // Function to fetch weather data for the given city
  const searchWeather = async () => {
    try {
      const response = await axios.get(`${API_URL}${query}?key=${API_KEY}`);
      const data = {
        name: response.data.resolvedAddress,
        temperature: response.data.days[0].temp,
        description: response.data.days[0].conditions,
      };
      setWeatherData([data]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView>
      {/* <Title>Search Weather</Title> */}
      <Container>
        <TextInput
          style={styles.input}
          onChangeText={setQuery}
          value={query}
          placeholder="Enter a city name"
        />
        <TouchableOpacity style={styles.button} onPress={searchWeather}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
        {weatherData.length > 0 ? (
          <CardContainer>
            <Card>
              <Card.Title>{weatherData[0].name}</Card.Title>
              <Temperature>{weatherData[0].temperature}&deg;C</Temperature>
              <Text>{weatherData[0].description}</Text>
            </Card>
          </CardContainer>
        ) : (
          <Text>No results</Text>
        )}
      </Container>
    </ScrollView>
  );
};

// Styled components
const Title = styled.Text`
  font-size: 24px;
  text-align: center;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const Temperature = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Container = styled.View`
  height: 250px;
  margin: 20px;
`;

const CardContainer = styled.View`
  margin-bottom: 20px;
`;

const styles = {
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'lightblue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
};

export default WeatherSearch;
