import * as Random from 'expo-random';

export const generateId = () => {
  const randomId = Random.getRandomBytes(3);
  return (randomId[0] + randomId[1] + randomId[2])
}