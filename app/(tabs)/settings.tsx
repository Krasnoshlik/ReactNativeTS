import React from 'react'
import { View,Text } from 'react-native'
import { COLORS } from '../../constants/constants'

export default function Settings() {
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
			<Text style={{color: 'white',fontSize: 25}}>Settings in development</Text>
			</View>
		</View>
	)
}
