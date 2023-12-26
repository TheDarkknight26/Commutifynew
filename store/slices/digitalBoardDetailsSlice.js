import { createSlice } from "@reduxjs/toolkit";



const initialState = [
    {
        route: "21",
        station: "KIIT Campus"
    }
]

const digitalboardInformationslice = createSlice({
    name: "BoardDetails",
    initialState,
    reducers: {
        addDetails(state, action) {

            const { route, station } = action.payload
            return state.push({ route, station })

        },
        deleteDetails(state, action) {
            const route = action.payload
            return state.filter((route) => {
                route == route
            })


        }
    }




})


export const { addDetails, deleteDetails } = digitalboardInformationslice.actions

export default digitalboardInformationslice

