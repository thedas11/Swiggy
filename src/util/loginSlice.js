import { createSlice } from "@reduxjs/toolkit";


const loggedUserSlice = createSlice({

    name: 'loggedUser',
    initialState: {
        loggedInUser: " "   
    },

    reducers:{

        changeuser: (state, action)=>{

            state.loggedInUser = action.payload;
        }
    }
})

export const  {changeuser}  = loggedUserSlice.actions;

export default loggedUserSlice.reducer;
