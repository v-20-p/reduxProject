import { useSelector, useDispatch } from "react-redux"
import { decrement, increment, reset } from "./counterSlice";
import { RootState } from "../store";

export default function Counter() {

    const count = useSelector((state: RootState) => state.counterR.count);
    const dispatch = useDispatch();

    const hadleDecrement = ()=> {
        dispatch(decrement());
    }
    const hadleIncrement = ()=> {
        dispatch(increment());
    }
    const hadleReset = ()=> {
        dispatch(reset());
    }
  return (
      <div>
        <h1>Counter: {count}</h1>
        <button onClick={hadleDecrement}>-</button>
        <button onClick={hadleReset}>Reset</button>
        <button onClick={hadleIncrement}>+</button>
      </div>
  )
}
