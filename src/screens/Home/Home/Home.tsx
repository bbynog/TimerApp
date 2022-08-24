import React, { useEffect, useRef, useState } from 'react';
import { Button, Pressable, Text, TouchableOpacity, View } from 'react-native';
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

  const playTimer = () => {
    if (isCounting) {
      setIsCounting(false);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    } else {
      setIsCounting(true);
    }
  };

  useEffect(() => {
    let now = moment('2022-08-23 00:00:00.000');

    if (isCounting) {
      const NowInterval = setInterval(() => {
        formatAndSetTime(now);
        now.add(moment().diff(now, 'milliseconds'), 'milliseconds');
      }, 10);

      intervalRef.current = NowInterval;
    }
  }, [isCounting]);

  const formatAndSetTime = (now: Moment) => {
    setPresentationNow(formatDateTo(DateFormat.EXHIBITION_TIME_MILLIES, now));
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={playTimer} style={styles.counterContainer}>
        <Text style={styles.counterText}>{presentationNow}</Text>
      </TouchableOpacity>
      <View style={styles.actionsContainer}>
        {/* <Button title={'Start'} onPress={startTimer} /> */}
        {/* <Button title={'Stop'} onPress={stopTimer} /> */}
      </View>
    </SafeAreaView>
  );
};
