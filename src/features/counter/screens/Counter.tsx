import { useEffect, useRef, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from './CounterStyles';

export const Counter = () => {
  const [counter, setCounter] = useState<number>(0);
  const [showLimitExceeded, setShowLimitExceeded] = useState(false);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const calculate = (move: number) => {
    setCounter((counter) => {
      if (counter === 0 && move === -1) return counter;
      if (counter >= 10 && move === 1) return counter;
      return counter + move;
    });
  };

  const handlePressIn = () => {
    timeoutRef.current = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        calculate(1);
      }, 1000);
    }, 1000);
  };

  const stopTimers = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    return () => stopTimers();
  }, []);

  useEffect(() => {
    setShowLimitExceeded(counter >= 10);
  }, [counter]);

  return (
    <View>
      <Text style={styles.counterTitleHeading}>Counter</Text>
      <Text style={styles.counter}>{counter}</Text>

      <View style={styles.containerButtons}>
        <Pressable onPress={() => calculate(-1)} style={styles.button}>
          <Text>-</Text>
        </Pressable>

        <Pressable
          onPress={() => calculate(1)}
          onPressIn={handlePressIn}
          onPressOut={stopTimers}
          style={styles.button}
        >
          <Text>+</Text>
        </Pressable>
      </View>

      {showLimitExceeded && (
        <Text style={styles.limitExceededAlert}>Limit Exceeded</Text>
      )}
    </View>
  );
};