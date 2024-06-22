import React from 'react';
import { Image, TouchableHighlight, TouchableOpacity, View, Text } from 'react-native';

const Header = ({counter}) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 10,
            }}
        >
            <View>
                <TouchableHighlight
                    underlayColor="rgba(0,0,0,0.1)" 
                >
                    <Image
                        source={{
                            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/2339px-McDonald%27s_Golden_Arches.svg.png',
                        }}
                        style={{
                            width: 51,
                            height: 45,
                        }}
                    />
                </TouchableHighlight>
            </View>
            <TouchableOpacity>
                <View style={{ alignItems: 'center',display: 'flex' }}>
                    <Image
                        source={{
                            uri: 'https://findicons.com/files/icons/1700/2d/512/cart.png',
                        }}
                        style={{
                            width: 45,
                            height: 45,
                        }}
                    />
                    <Text style={{ color: 'white', fontSize: 18 }}>{counter}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default Header;

