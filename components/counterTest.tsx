import { Text, View, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { increment, selectCount } from '../features/counter/counterSlice';


const CounterTest = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  return (
      <Text>
        Count: {count}
        <TouchableOpacity onPress={() => dispatch(increment())}>
          <Text>+</Text>
        </TouchableOpacity>
      </Text>
  );
}

export default CounterTest;