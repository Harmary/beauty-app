import { Text, Image } from "react-native";
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

const ImageWrapper = styled.View`
  background-color: rgba(196, 196, 196, 1);
  width: 50px;
  height: 50px;
  border-radius: 24px;
  margin-right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const RemotePostImage = styled.Image`
  background-color: rgba(196, 196, 196, 1);
  width: 50px;
  height: 50px;
  border-radius: 24px;
  margin-right: 8px;
`;

const LocalPostImage = styled.Image`
  background-color: rgba(196, 196, 196, 1);
  width: 24px;
`;

const ContentView = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const PostTitle = styled.Text`
    font-size: 16px;
    font-weight: 600
`

export default function Post({ title, image, address = undefined }) {
  return (
    <PostView>
      {typeof image === 'string' ?
          <RemotePostImage
          source={{
            uri: image,
          }}
          />
         :
        <ImageWrapper>
          <LocalPostImage
            source={image}
          />
        </ImageWrapper>
      }
      <ContentView>
        <PostTitle>{title}</PostTitle>
        {address ? <Text>{address}</Text> : false}
      </ContentView>
    </PostView>
  );
}
