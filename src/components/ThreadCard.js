import { View, Text } from 'react-native';
import { useContext} from 'react';
import { NavigationContext } from '@react-navigation/core';

export default function Thread({ title,id }) {
    const navigation = useContext(NavigationContext);
    return (
        <View >
            <Text onPress={() => navigation.navigate('ThreadDetails',{id:id})}>{title}</Text>
        </View>
    )
}