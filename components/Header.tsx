import React from 'react';
import { Image, TouchableHighlight, TouchableOpacity, View, Text } from 'react-native';

const Header = () => {
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
                    <Text style={{fontSize: 45, fontStyle: 'italic', fontWeight: 'bold',color: '#3C2F2F'}}>Foodgo</Text>
                </TouchableHighlight>
                <Text style={{fontSize: 18, fontWeight: 'medium', color:'#6A6A6A'}}>Order your favourite food!</Text>
            </View>
            <TouchableOpacity>
                <View style={{ alignItems: 'center',display: 'flex' }}>
                    <Image
                        source={require('../assets/user.png')}
                        style={{
                            width: 60,
                            height: 60,
                        }}
                    />
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default Header;

