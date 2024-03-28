import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {priceData} from '../Utils/constant';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import BarChart from './BarChart';

const RangeSlider = () => {
  const [values, setValues] = useState([0, 200]);
  const [indexVal, setindexVal] = useState<number[]>([0, 20]);

  const multiSliderValuesChange = (newValues: number[]) => {
    let x = Math.round(newValues[0] / 10) * 10;
    let y = Math.round(newValues[1] / 10 === 0 ? 1 : newValues[1] / 10) * 10;

    const newArr = [x, y];
    const updatedIndex = newArr?.map(
      obj => priceData?.find(sub => sub.value === obj)?.id,
    );
    setindexVal(updatedIndex as number[]);
    setValues(newArr);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>A Range Slider with Histogram</Text>
      <View style={styles.positionRelative}>
        <BarChart indexVal={indexVal} />
        <View style={styles.sliderContainer}>
          <MultiSlider
            values={values}
            sliderLength={400}
            onValuesChange={multiSliderValuesChange}
            min={0}
            max={200}
            step={10}
            allowOverlap
            snapped
            selectedStyle={styles.bgRed}
            unselectedStyle={styles.bgGray}
            markerStyle={styles.bgBlue}
          />
        </View>
      </View>
      <View style={styles.valueContainer}>
        <View>
          <Text>Min</Text>
          <Text style={styles.textCenter}>{values[0]}</Text>
        </View>
        <Text> - </Text>
        <View>
          <Text>Max</Text>
          <Text style={styles.textCenter}>{values[1]}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainTitle: {
    fontSize: 24,
    paddingBottom: 40,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  sliderContainer: {
    width: '80%',
    position: 'absolute',
    bottom: -14,
  },
  sliderLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  slider: {
    width: '100%',
  },
  valueContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
    marginTop: 25,
  },
  textCenter: {
    textAlign: 'center',
  },
  positionRelative: {
    position: 'relative',
  },
  bgRed: {
    backgroundColor: 'red',
  },
  bgGray: {
    backgroundColor: 'gray',
  },
  bgBlue: {
    backgroundColor: 'blue',
  },
});

export default RangeSlider;
