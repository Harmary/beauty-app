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
  border-radius: 8px;
`;

const ContentView = styled.View`
    display: flex;
    flex-direction: column;
`;

const PostTitle = styled.Text`
    font-size: 16px;
    font-weight: 600
`

export default function Post({ title, image, address }) {
  return (
    <PostView>
      <PostImage
        source={{
          uri: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/775.jpg",
        }}
      />
      <ContentView>
        <PostTitle>{title}</PostTitle>
        <Text>{address}</Text>
      </ContentView>
    </PostView>
  );
}
