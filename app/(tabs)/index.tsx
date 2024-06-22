import React, { useState } from 'react'
import { View } from 'react-native'
import { COLORS } from '../../constants/constants'
import Categories from '../../components/Categories'
import Header from '../../components/Header'
import Popular from '../../components/Popular'

export default function App() {
	const [counter, setCounter] = useState(0);

	function handlePressCart() {
        setCounter(counter + 1);
    }
	return (
		<View
			style={{
				padding: 24,
				paddingTop: 55,
				paddingBottom: 75,
				backgroundColor: COLORS.black,
				height: '100%',
			}}
		>
			<Header counter={counter}/>
			<Categories handlePressCart={handlePressCart} />
			<Popular handlePressCart={handlePressCart}/>
		</View>
	)
}
