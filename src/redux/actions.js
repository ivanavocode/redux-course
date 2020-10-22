import {INCREMENT, DECREMENT, ASYNC_INCREMET, CHANGE_THEME, ENABLE_BTN, DISABLE_BTN} from  './types';

export function increment() {
    return {
        type: INCREMENT
    }
}
export function decrement() {
    return {
        type: DECREMENT
    }
}
export function enableBtuttons() {
    return {
        type: ENABLE_BTN
    }
}
export function disableButtons() {
    return {
        type: DISABLE_BTN
    }
}
export function changeTheme(newTheme) {
    return {
        type: CHANGE_THEME,
        payload: newTheme
    }
}



export function asyncIncrement() {
        return function(dispatch) {
            dispatch(disableButtons())
            setTimeout(() => {
                dispatch({ type: ASYNC_INCREMET })
                dispatch(enableBtuttons())
            }, 1500)
    }
}