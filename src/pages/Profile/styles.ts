import { Platform } from 'react-native';
import styled from 'styled-components/native';


export const BackButton = styled.TouchableOpacity`
  margin-top: 145px;
  align-self: flex-start;
`;
export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 180 : 40}px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 24px 0;
  margin-right: 175px;
`

export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 32px;

`

export const UserAvatar = styled.Image`
  width: 145px;
  height: 145px;
  border-radius: 72px;
  align-self: center;
`;
