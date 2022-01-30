import React, { useState, useEffect } from 'react';
import { Platform, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { SectionList } from 'react-native';

import CurrentPrice from './src/components/CurrentPrice/'
import HistoryGraphic from './src/components/HistoryGraphic';
import QuatationsList from './src/components/QuotationsList/'
import QuotationsItems from './src/components/QuotationsList/QuotationsItems/'

function addZero(number) {
  if (number <= 9) {
    return "0" + number;
  }
  return number;
}

function url(qtdDias) {
  const date = new Date();
  const listLastDays = qtdDias;
  const end_date = 
  `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())}`;
  date.setDate(date.getDate() - listLastDays);
  const start_date = 
  `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())}`;
  return `https://api.coindesk.com/v1/bpi/historical/close.json?start=${start_date}&end=${end_date}`;;
}


async function getListCoins(url) {
  let response = await fetch(url);
  let retunrApi = await response.json();
  let selectListQuotations = retunrApi.bpi;
  const queryCoinsList = Object.keys(selectListQuotations).map((key) => {
    return {
      data: key.split("-").reverse().join("/"),
      valor: selectListQuotations[key],
    };
  });
  let data = queryCoinsList.reverse();
  return data;
}

async function getPriceCoinsGraphic(url) {
  let responseG = await fetch(url);
  let returnApiG = await responseG.json();
  let selectListQuotationsG = returnApiG.bpi;
  const queryCoinsListG = Object.keys(selectListQuotationsG).map((key) => {
    return selectListQuotationsG[key];
  });
  let dataG = queryCoinsListG;
  return dataG;
}



export default function App() {
  const [coinList, setCoinList] = useState([])
  const [coinGraphicList, setCoinsGraphicList] = useState([0])
  const [days, setDays] = useState(1)
  const [updateData, setUpdateData ] = useState(true)

  function updateDay(number){
    setDays(number)
    setUpdateData(true)
  }

  useEffect(() => {

    getListCoins(url(days)).then((data)=> {
      setCoinList(data)
    })

    getPriceCoinsGraphic(url(days)).then((dataG)=>{
      setCoinsGraphicList(dataG)
    })
    if (updateData) {
      setUpdateData(false);
    }

  },[updateData])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
        backgroundColor='#f50d41' 
        barStyle="light-content"     
      />
      <CurrentPrice/>
      <HistoryGraphic/>
      <QuatationsList  filterDay={updateDay} listTransactions={coinList}/>
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
