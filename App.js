import { StatusBar } from 'expo-status-bar';
import React ,{createContext,useReducer,useEffect,useState}from 'react';
import { YellowBox,AsyncStorage} from 'react-native'
import Navigation from './src/Navigation/Navigation';
export const State = createContext();
export const Dispatch  = createContext()


const initState = {
  uid : false,
}

const reducer = (action,state) => {
  switch (action.type) {
    case 'login' :
      return {
        ...state,
        uid:true
      }
    case 'logout' :
        return {...state,uid:false}
      default:
        return state
  }
}

const App=() => {
  console.disableYellowBox = true;
  const [state,dispatch ] = useReducer(reducer,initState)
  return(
    <State.Provider value={state}>
      <Dispatch.Provider value={dispatch}>
        <Navigation/>
      </Dispatch.Provider>
    </State.Provider>
  )
}
export default App;