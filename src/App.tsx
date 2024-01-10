import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  ImageSourcePropType,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import DiceOne from '../assets/images/One.png';
import DiceTwo from '../assets/images/Two.png';
import DiceThree from '../assets/images/Three.png';
import DiceFour from '../assets/images/Four.png';
import DiceFive from '../assets/images/Five.png';
import DiceSix from '../assets/images/Six.png';

//declare a 'type' of Props for passing to Dice Component {TypeScript specific}
type DiceProp = PropsWithChildren<{
  imageUrl:ImageSourcePropType
}>;

const Dice = ({imageUrl}:DiceProp):React.JSX.Element => {
  return (
    <View>
      <Image source={imageUrl} style={styles.diceImage} />
    </View>
  )
}

function App(): React.JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);
  const diceArray = [DiceOne,DiceTwo,DiceThree,DiceFour,DiceFive,DiceSix];

  const handleTheRoll = () => {
    let index = Math.floor(Math.random()* (diceArray.length))
    console.log(index);
    
    setDiceImage(diceArray.at(index))
  }

  return (
    <View style={styles.wrapper}>
    <Dice imageUrl={diceImage}/>
    <TouchableOpacity style={styles.btnContainer} onPress={handleTheRoll}>
      <Text style={styles.btnText}>Roll the DICE</Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper :{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#efefef'
  },
  diceImage :{
    height: 150,
    width: 150,
  },
  btnContainer: {
    marginVertical:15,
    padding:10,
    backgroundColor: '#4895ef',
    borderRadius:10,
    
  },
  btnText: {
    fontSize:24,
    fontWeight:'600',
    color:'#ffffff'
  },
});

export default App;
