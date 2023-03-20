import { createSlice } from "@reduxjs/toolkit";

export const handleTheme = createSlice({
    name: 'theme',
    initialState: {
        value: {
            modeText: 'Enable Dark Mode',
            textColor: "black",
            bgColor: 'white'
        }
    },
    reducers: {
        changeTheme: (state) => {
            if (state.value.bgColor === 'white') {
                state.value.modeText = 'Disbale Dark Mode'
                state.value.textColor = "white"
                state.value.bgColor = 'black'
                document.body.style.backgroundColor = 'black'
                document.body.style.color = 'white'
            }
            else {
                document.body.style.backgroundColor = 'white'
                document.body.style.color = 'black'
                state.value.modeText = 'Enable Dark Mode'
                state.value.textColor = "black"
                state.value.bgColor = 'white'
            }
        }
    }
})

export const { changeTheme } = handleTheme.actions
export default handleTheme.reducer
