import React from 'react';
import {StyleSheet} from 'react-native';
import {priceData} from '../Utils/constant';
import {BarChart as NativeBarChart} from 'react-native-svg-charts';

type Props = {
  indexVal: number[];
};

const BarChart = ({indexVal}: Props) => {
  const barDataValues = priceData?.map(obj => obj?.amount);

  const barData = barDataValues.map((value, index) => ({
    value,
    svg: {
      fill: index >= indexVal[0] && index <= indexVal[1] ? 'orange' : 'grey',
    },
  }));

  return (
    <NativeBarChart
      style={styles.chart}
      data={barData}
      contentInset={{top: 10, bottom: 10}}
      yAccessor={({item}: any) => item.value}
      gridMin={0}
    />
  );
};

const styles = StyleSheet.create({
  chart: {
    height: 100,
    width: 400,
  },
});

export default BarChart;
