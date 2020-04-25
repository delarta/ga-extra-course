import {combineReducers} from "redux"
import movies from "./movies"
import songs from "./songs"
import todos from "./todos"

const rootReducer = combineReducers({
  movies,
  songs,
  todos
})

export default rootReducer