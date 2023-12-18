import { Alert, FlatList, RefreshControl, TouchableOpacity, ActivityIndicator, Text } from 'react-native';
import Post from '../shared/components/Post'
import axios from 'axios';
import React from 'react';
import { ScreenTitle } from '../shared/components/ScreenTitle';
import { BackgroundView } from '../shared/components/BackgroundView';
import { LoadView } from '../shared/components/LoadView';

export default function ServiceScreen({ navigation: { navigate }, route }) {
    const [isLoading, setisLoading] = React.useState(true)
    const [salons, setSalons] = React.useState([]);

    const fetchSalons = () => {
        setisLoading(true)
        axios.get(`https://657ad8b1394ca9e4af12d589.mockapi.io/api/1/Salon/1/Service`).then((res) => {
            setSalons(res.data);
        }).catch(() =>
            Alert.alert('No data', "don't have data for this search")
        ).finally(() => setisLoading(false));
    }

    React.useEffect(fetchSalons, []);

    if (isLoading) return (
        <LoadView>
            <ActivityIndicator size="large" />
            <Text>Загрузка...</Text>
        </LoadView>
    );

    return (
        <BackgroundView BackgroundView
            colors={["#DEDBD2", "#B0C4B1"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            locations={[0.1, 0.8]}
        >
            <ScreenTitle>Choose a service</ScreenTitle>
            <FlatList
                refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchSalons} />}
                data={salons}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigate('Salons', { id: item.id })}>
                        <Post
                            title={item.name}
                            image={item.avatar}
                        />
                    </TouchableOpacity>
                )
                }
            />
        </BackgroundView>
    );
}
