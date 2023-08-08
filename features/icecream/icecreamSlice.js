const { cakeActions } = require("../cake/cakeSlice")

const createSlice = require("@reduxjs/toolkit").createSlice

const initialState = {
    numIcecream: 20
}

const icecreamSlice = createSlice({
    name: "icecream",
    initialState,
    reducers:{
        ordered: (state) => {state.numIcecream--},
        restock: (state, action) => {state.numIcecream += action.payload}
    },

    //firt case
    /* extraReducers:{
        ['cake/ordered']: (state) => {   //when a cake is ordered we also reduce the icecream, example buying a cake icecream for free
            state.numIcecream--
        }
    } */
    //second case (recommended)
    extraReducers:(builder) => {
        builder.addCase(cakeActions.ordered, state => {
            state.numIcecream--
        })
    }
})


module.exports = icecreamSlice.reducer
module.exports.icecreamActions = icecreamSlice.actions
