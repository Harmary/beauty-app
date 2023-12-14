import { StatusBar } from 'expo-status-bar';
import { Alert,  Text, FlatList, ActivityIndicator, RefreshControl, TouchableOpacity } from 'react-native';
import Post from '../components/Post'
import axios from 'axios';
import React from 'react';
import styled from 'styled-components';

const LoadView = styled.View`
  display: flex;
  justify-content: 'center';
  align-items:'center';
`;

export default function HomeScreen() {
    const [isLoading, setisLoading] = React.useState(true)
    const [salons, setSalons] = React.useState([]);

    const fetchSalons = () => {
        setisLoading(true)
        axios.get('https://657ad8b1394ca9e4af12d589.mockapi.io/api/1/Salon').then((res) => {
            setSalons(res.data);
        }).catch(() =>
            Alert.alert('No data', "don't have data for this search")
        ).finally(() => setisLoading(false));
    }

    React.useEffect(fetchSalons, []);

    if (isLoading) return (
        <LoadView
        >
            <ActivityIndicator size="large" />
            <Text>Загрузка...</Text>
        </LoadView>
    )

    return (
            <FlatList
                refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchSalons} />}
                data={salons}
                renderItem={({ item }) => (
                    <TouchableOpacity>
                        <Post title={item.name} imge={item.avatar} address={item.adress} />
                    </TouchableOpacity>
                )
                }
            />
    );
}
