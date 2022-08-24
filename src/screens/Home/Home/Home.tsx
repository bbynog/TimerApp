import React, { useEffect, useRef, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './Home.styles';

import moment, { Moment } from 'moment';
import { DateFormat } from 'types';
import { formatDateTo } from 'utils/formatDate';

interface HomeScreenProps {}

export const HomeScreen = ({}: HomeScreenProps) => {
  const [isCounting, setIsCounting] = useState<boolean>(false);
  const [presentationNow, setPresentationNow] = useState<string>('');

  const intervalRef = useRef<NodeJS.Timer>();

  const startTimer = () => {
    setIsCounting(true);
  };

  const stopTimer = () => {
    setIsCounting(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    let now = moment('2022-08-23 00:00:00.000');

    if (isCounting) {
      const NowInterval = setInterval(() => {
        formatAndSetTime(now);
        now.add(10, 'milliseconds');
      }, 10);

      intervalRef.current = NowInterval;
    }
  }, [isCounting]);

  const formatAndSetTime = (now: Moment) => {
    setPresentationNow(formatDateTo(DateFormat.EXHIBITION_TIME_MILLIES, now));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.counterContainer}>
        <Text style={styles.counterText}>{presentationNow}</Text>
        <Button title={'Start'} onPress={startTimer} />
        <Button title={'Stop'} onPress={stopTimer} />
      </View>
    </SafeAreaView>
  );
};
