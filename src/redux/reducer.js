import { Dishes } from './dishes';
import { Comments } from './comments';
import { Leaders } from './leaders';
import {createForms} from 'react-redux-form'
import {InitialFeedback} from './forms'
import { Promotion } from './promotions';
import {createStore,combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';



export const ConfigureStore=()=>{
    const store=createStore(
        combineReducers({
            dishes:Dishes,
            comments:Comments,
            leaders:Leaders,
            promotions:Promotion,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk,logger)
        
    );
    return store;
}
