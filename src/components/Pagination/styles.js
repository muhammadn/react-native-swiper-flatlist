import { StyleSheet } from 'react-native';

import { vertical, horizontal, width } from '../../themes';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    flexDirection: 'row',
    marginVertical: vertical.xxSmall,
    justifyContent: 'center',
    bottom: 0,
    left: width * 0.15,
    right: width * 0.15,
  },
  pagination: {
    width: horizontal.xxSmall,
    height: horizontal.xxSmall,
    borderRadius: 25,
    marginHorizontal: horizontal.xxSmall,
  },
});
