import styled from "styled-components/native";
import { BackgroundView } from "../shared/components/BackgroundView";
import Post from "../shared/components/Post";
import clock from "../assets/icons/clock.png"
import master from "../assets/icons/master.png"
import { TouchableOpacity } from "react-native";

const SalonContent = styled.View`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 32px;
`;

const SalonAvatar = styled.Image`
    width: 96px;
    height: 96px;
    border-radius: 50px;
    margin-bottom: 16px;
    background-color: rgba(74, 87, 89, 1);
`;

const SalonTitle = styled.Text`
    font-size: 20px;
    margin-bottom: 8px;
`;
const SalonAddress = styled.Text`
    font-size: 12px;
    color: #404040;
`;



export function SalonInfoScreen ({navigation, route}) {
    return (
        <BackgroundView
            colors={["#DEDBD2", "#B0C4B1"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            locations={[0.1, 0.8]}
        >
            <SalonContent>
                <SalonAvatar source={{uri: route.avatar}}/>
                <SalonTitle>Julia Puchkova Salon</SalonTitle>
                <SalonAddress>4152 Kutch Fork</SalonAddress>
            </SalonContent>
            <TouchableOpacity
                // onPress={() => navigate('SalonInfo', { id: item.id })}
            >
                <Post title={'Выбрать мастера'} image={master} />
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate('Timetable')}
            >
                <Post title={'Выбрать время'} image={clock} />
            </TouchableOpacity>
        </BackgroundView>
    )
}