const updateState = 'UPDATE_STATE';

const initialState = {
    newValue: 'Estado inicial'
};

export const clickReducer = (state = initialState, action) => {
    switch (action.type) {
        case updateState:
            return {
                ...state,
                newValue: action.newValue
            };
        default:
            return state;
    }
};

