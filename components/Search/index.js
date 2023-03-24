import React, {useState} from 'react';
import {Card} from 'react-native-elements';
import styled from 'styled-components/native';
import axios from 'axios';

// API URL and key
const API_URL =
  'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';
const API_KEY = '7TACGF6DYJ2YQBNDDSQTG27JM';

const WeatherSearch = () => {
  const [query, setQuery] = useState('');
  const [weatherData, setWeatherData] = useState([]);

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
    <Container>
      <Title>Search Weather</Title>
      <Input
        onChangeText={setQuery}
        value={query}
        placeholder="Enter a city name"
      />
      <Button onPress={searchWeather}>
        <ButtonText>Search</ButtonText>
      </Button>
      {weatherData.length > 0 ? (
        <Card>
          <Card.Title>{weatherData[0].name}</Card.Title>
          <Temperature>{weatherData[0].temperature}&deg;C</Temperature>
          <Description>{weatherData[0].description}</Description>
        </Card>
      ) : (
        <NoResults>No results</NoResults>
      )}
    </Container>
  );
};

// Style
const Container = styled.ScrollView`
  margin: 20px;
`;

const Title = styled.Text`
  font-size: 24px;
  text-align: center;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const Input = styled.TextInput`
  height: 40px;
  border-color: gray;
  border-width: 1px;
  margin-bottom: 10px;
  padding-horizontal: 10px;
`;

const Button = styled.TouchableOpacity`
  background-color: lightblue;
  padding-vertical: 10px;
  padding-horizontal: 20px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

const Temperature = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Description = styled.Text`
  margin-bottom: 10px;
`;

const NoResults = styled.Text`
  margin-top: 20px;
  text-align: center;
`;

export default WeatherSearch;
