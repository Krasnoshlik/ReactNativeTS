import { COLORS } from '@/constants/constants';
import React from 'react';
import { Text, View } from 'react-native';

const liked = () => {
  return (
    <View
			style={{
				padding: 24,
				paddingTop: 55,
				paddingBottom: 75,
				backgroundColor: COLORS.black,
				height: '100%',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center'
			}}
		>
			<View>
			<Text style={{color: 'white',fontSize: 25}}>Liked in development</Text>
			</View>
		</View>
  )
}

export default liked;