import { createStore } from "redux"
import { reducers } from "./reducers/index"


const store = createStore(reducers,
    {},
    window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION()
)

export default store
