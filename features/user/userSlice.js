const createSlice = require("@reduxjs/toolkit").createSlice
const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk
const axios = require("axios")


initialState = {
    loading: false,
    users: [],
    error: ''
}

const fetchUsers = createAsyncThunk('user/fetchUsers', () => {  //generates pending, fulfilled and rejected actions
   return axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => res.data.map(user =>user.id))
}) 

const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading=true
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false
            state.users = []
            state.error = action.error.message
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false
            state.users = action.payload
            state.error = ''
           })
    }
})

module.exports = userSlice.reducer
module.exports.fetchUsers = fetchUsers