import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  clamp,
} from 'react-native-reanimated';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';

const DraggableArrowBox = ({
  direction = 'left',
  color = 'red',
  maxSlide = 300,
}) => {
  const translateX = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler({
    onActive: event => {
      translateX.value = clamp(event.translationX, -maxSlide, maxSlide);
    },
    onEnd: () => {
      translateX.value = withSpring(0);
    },
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateX: translateX.value}],
  }));

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[styles.arrowBox, animatedStyle]}>
        <Icon
          name={direction === 'left' ? 'doubleleft' : 'doubleright'}
          size={25}
          color={color}
        />
      </Animated.View>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  arrowBox: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 10,
    //marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DraggableArrowBox;
