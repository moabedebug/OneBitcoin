import React from 'react';
import { Platform, StyleSheet, SafeAreaView, StatusBar } from 'react-native';

import CurrentPrice from './src/components/CurrentPrice/'
import HistoryGraphic from './src/components/HistoryGraphic';
import QuatationsList from './src/components/QuotationsList/'
import QuotationsItems from './src/components/QuotationsList/QuotationsItems/'

function addZero(number){
  if(number <= 9 ){
    return "0" + number
  }
  return number
}

function url(qtdDays){
  const date = new Date()
  const listLastDays = qtdDays

  const end_date =  
  `${date.getFullYear()}-${addZero(date.getMonth()+1)}-${addZero(date.getDay())}`
  date.setDate(date.getDate() - listLastDays)

  const start_date = 
  `${date.getFullYear()}-${addZero(date.getMonth()+1)}-${addZero(date.getDay())}`

  return `https://api.coindesk.com/v1/bgi/historical/close.json?start=${start_date}&end=${end_date}`
}



export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
        backgroundColor='#f50d41' 
        barStyle="light-content"     
      />
      <CurrentPrice/>
      <HistoryGraphic/>
      <QuatationsList/>
      <QuotationsItems/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    paddingTop: Platform.OS === "android" ? 40: 0,
  },
});
