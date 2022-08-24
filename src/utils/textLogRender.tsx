import { Text } from 'react-native';
import moment from 'moment';

const LOG_RENDER = false;

export const textLogRender = (
  id: string | number,
  prefix?: string | number
): JSX.Element | undefined => {
  if (LOG_RENDER) {
    const time = moment().format('mm:ss:SS');
    console.log(`Render: ${id}-${prefix || ''}. ${time}`);
    return <Text>Halu {prefix ? prefix + ' - ' + time : time}</Text>;
  }
};
