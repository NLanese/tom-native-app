let state;

const stateChange = (token) => {
    if (token.length > 10) {
        state = token
    }

    return state
}

export default stateChange