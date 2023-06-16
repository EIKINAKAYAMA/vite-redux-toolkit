
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrease, increase } from './redux/counterSlice'
import type { AppDispatch, RootState } from './redux/store'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()

function App() {

  const count = useAppSelector((state) => state.counter.count)
  const dispatch = useAppDispatch()

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increase())}>Up</button>
      <button onClick={() => dispatch(decrease())}>Down</button>
    </div>
  )
}

export default App
