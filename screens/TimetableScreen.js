import styled from "styled-components";
import { BackgroundView } from "../shared/components/BackgroundView";
import { ScreenTitle } from "../shared/components/ScreenTitle";
import { TouchableHighlight } from "react-native";

const DayView = styled.View`
    margin: 0 45px;
`;

const DayTitle = styled.Text`
    color: black;
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 12px;
`;

const TimeslotView = styled.View`
    display: flex; 
    flex-direction: row;
    column-gap: 12px;
`

const Timeslot = styled.View`
    background: #F7E1D7; 
    border-radius: 8px;
    padding: 8px 13px;
`;

const TimeslotText = styled.Text`
    color: black;
    font-size: 16px;
    font-weight: 400;
`;

export function TimetableScreen() {
    return (
        <BackgroundView
            colors={["#DEDBD2", "#B0C4B1"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            locations={[0.1, 0.8]}
        >
            <ScreenTitle>Choose the timeslot</ScreenTitle>
            <DayView>
                <DayTitle>Tuesday 14.12</DayTitle>
                <TimeslotView>
                    {["10:00", "12:00", "14:00"].map((time) => (
                        <TouchableHighlight>
                            <Timeslot>
                                <TimeslotText>{time}</TimeslotText>
                            </Timeslot>
                        </TouchableHighlight>
                    ))}
                </TimeslotView>
            </DayView>
        </BackgroundView>
    );
}