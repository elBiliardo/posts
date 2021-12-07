import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';

import { App } from './Components/App'
import { rootReducer } from './Redux/reducers/rootReducer'
import { forbiddenWordsMiddleware } from './Redux/midlleware';
import { sagaWatcher } from './Redux/sagas';

const saga = createSagaMiddleware()

const store = createStore(
	rootReducer,
	composeWithDevTools(
		applyMiddleware(thunk, forbiddenWordsMiddleware, saga),
	)
)

saga.run(sagaWatcher)


ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)

