

//working_code of Animted CheckBox but checbox fill and animation stroke are not in sync

// import React, { useEffect } from 'react';
// import Animated, { Easing, useSharedValue, withTiming, interpolateColor, interpolate,Extrapolate } from 'react-native-reanimated';
// import { Path, Svg , Defs, ClipPath,G} from 'react-native-svg';
// import AnimatedStroke from './animated-stroke';


// const MARGIN = 10;
// const vWidth = 64 + MARGIN;
// const vHeight = 64 + MARGIN;
// const checkMarkPath = 'M8 32.5C18 39 26 47 26 47C26 47 33 28 63.5 4';
// const outlineBoxPath =
//   'M24 0.5H40C48.5809 0.5 54.4147 2.18067 58.117 5.88299C61.8193 9.58532 63.5 15.4191 63.5 24V40C63.5 48.5809 61.8193 54.4147 58.117 58.117C54.4147 61.8193 48.5809 63.5 40 63.5H24C15.4191 63.5 9.58532 61.8193 5.88299 58.117C2.18067 54.4147 0.5 48.5809 0.5 40V24C0.5 15.4191 2.18067 9.58532 5.88299 5.88299C9.58532 2.18067 15.4191 0.5 24 0.5Z';

// const AnimatedPath = Animated.createAnimatedComponent(Path);

// interface Props {
//   checked?: boolean,
//   highlightColor: string,
//   checkmarkColor: string,
//   boxOutlineColor: string,
// }



// const AnimatedCheckbox = (props: Props) => {
//   const {checked,checkmarkColor,highlightColor,boxOutlineColor} =props 

//   const progress = useSharedValue(0);

//   useEffect(() => {
//     progress.value = withTiming(props.checked ? 1 : 0, {
//       duration: props.checked ? 300 : 100,
//       easing: Easing.linear,
//     });
//   }, [props.checked]);


//   const animatedBoxProps = {
//     stroke: interpolateColor(progress.value, [0, 1], [boxOutlineColor, highlightColor]),
//     fill: interpolateColor(progress.value, [0, 1], [`rgba(0, 0, 0, 0)`, highlightColor]),
//   };



//   return (
//     <Svg viewBox={[-MARGIN, -MARGIN, vWidth + MARGIN, vHeight + MARGIN].join(' ') } >
      
//       <Defs>
//         <ClipPath id="clipPath">
//           <Path  
//           fill="white" 
//           stroke="gray"
//           strokeLinejoin='round' 
//           strokeLinecap='round' 
//           d={outlineBoxPath}
//           />
//         </ClipPath>
//       </Defs>

//       <AnimatedStroke 
//       progress={progress} 
//       d={checkMarkPath} 
//       stroke={highlightColor}
//       strokeWidth={10}
//       strokeLinejoin="round" 
//       strokeLinecap="round"
//       strokeOpacity={props.checked || false ? 1 : 0}
    
    
//       />
      
//       <AnimatedPath
//         d={outlineBoxPath}
//         strokeWidth={7}
//         strokeLinejoin="round"
//         strokeLinecap="round"
//         {...animatedBoxProps}
//         // animatedProps={animatedBoxProps}
//       />

//       <G clipPath="url(#clipPath)">
//       <AnimatedStroke 
//       progress={progress} 
//       d={checkMarkPath} 
//       stroke={checkmarkColor}
//       strokeWidth={10}
//       strokeLinejoin="round" 
//       strokeLinecap="round"
//       strokeOpacity={props.checked || false ? 1 : 0}
    
    
//       />
//       </G>
//     </Svg>
//   );
// };

// export default AnimatedCheckbox;











//********************************************************************************************************************************************************* */














//Working Code of checkbox with stroke animation

import React, { useEffect, useRef, useState } from 'react';
import Animated, { Easing, useAnimatedProps } from 'react-native-reanimated';
import { Path, Svg, Defs, ClipPath, G } from 'react-native-svg';

interface Props {
  checked?: boolean;
  highlightColor: string;
  checkmarkColor: string;
  boxOutlineColor: string;
}

const MARGIN = 10;
const vWidth = 64 + MARGIN;
const vHeight = 64 + MARGIN;
const checkMarkPath = 'M8 32.5C18 39 26 47 26 47C26 47 33 28 63.5 4';
const outlineBoxPath =
  'M24 0.5H40C48.5809 0.5 54.4147 2.18067 58.117 5.88299C61.8193 9.58532 63.5 15.4191 63.5 24V40C63.5 48.5809 61.8193 54.4147 58.117 58.117C54.4147 61.8193 48.5809 63.5 40 63.5H24C15.4191 63.5 9.58532 61.8193 5.88299 58.117C2.18067 54.4147 0.5 48.5809 0.5 40V24C0.5 15.4191 2.18067 9.58532 5.88299 5.88299C9.58532 2.18067 15.4191 0.5 24 0.5Z';

const AnimatedPath = Animated.createAnimatedComponent(Path);

const AnimatedCheckbox = (props: Props) => {
  const { checked, checkmarkColor, highlightColor, boxOutlineColor } = props;

  const [length, setLength] = useState(0);
  const progress = useAnimatedProps(() => ({
    strokeDashoffset: Math.max(
      0,
      length - length * Easing.bezierFn(0.37, 0, 0.63, 1)(checked ? 1 : 0) - 0.1
    ),
  }));

  const animatedBoxProps = {
    stroke: checked ? highlightColor : boxOutlineColor,
    fill: checked ? highlightColor : 'rgba(0, 0, 0, 0)',
  };

  const animatedCheckProps = {
    stroke: checkmarkColor,
    strokeOpacity: checked ? 1 : 0,
  };
  const animatedoverCheckProps = {
    stroke: highlightColor,
    strokeOpacity: checked ? 1 : 0,
  };

  return (
    <Svg viewBox={[-MARGIN, -MARGIN, vWidth + MARGIN, vHeight + MARGIN].join(' ')}>
      <Defs>
        <ClipPath id="clipPath">
          <Path fill="white" stroke="gray" strokeLinejoin="round" strokeLinecap="round" d={outlineBoxPath} />
        </ClipPath>
      </Defs>
      <AnimatedPath
          d={checkMarkPath}
          strokeWidth={10}
          strokeLinejoin="round"
          strokeLinecap="round"
          animatedProps={progress}
           {...animatedoverCheckProps}
        />
      <Path
        d={outlineBoxPath}
        strokeWidth={7}
        strokeLinejoin="round"
        strokeLinecap="round"
        {...animatedBoxProps}
      />
      <G clipPath="url(#clipPath)">
        <AnimatedPath
          d={checkMarkPath}
          strokeWidth={10}
          strokeLinejoin="round"
          strokeLinecap="round"
          animatedProps={progress}
          {...animatedCheckProps}
        />
      </G>
    </Svg>
  );
};

export default AnimatedCheckbox;
