import { Text, View } from "react-native";
import styled from "styled-components/native";

const PostView = styled.View`
  margin-left: 18px;
  margin-right: 18px;
  margin-bottom: 10px;
  padding: 28px;
  background: #dedbd2;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
`;

const PostImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 24px;
  margin-right: 8px;
`;

const ContentView = styled.View`
    display: flex;
    flex-direction: column;
`;

const PostTitle = styled.Text`
    font-size: 16px;
    font-weight: 600
`

export default function Post({ title, image, address = undefined }) {
  return (
    <PostView>
      <PostImage
        source={{
          uri: image,
        }}
      />
      <ContentView>
        <PostTitle>{title}</PostTitle>
        {address ? <Text>{address}</Text> : false}
      </ContentView>
    </PostView>
  );
}
