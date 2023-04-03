import { createSlice } from "@reduxjs/toolkit";

export const handleTheme = createSlice({
    name: 'theme',
    initialState: {
        value: {
            modeText: 'Enable Dark Mode',
            textColor: "dark",
            bgColor: 'light'
        }
    },
    reducers: {
        changeTheme: (state) => {
            if (state.value.bgColor === 'light') {
                state.value.modeText = 'Disbale Dark Mode'
                state.value.textColor = "light"
                state.value.bgColor = 'dark'
                document.body.style.backgroundColor = 'black'
                document.body.style.color = 'white'
            }
            else {
                document.body.style.backgroundColor = 'white'
                document.body.style.color = 'black'
                state.value.modeText = 'Enable Dark Mode'
                state.value.textColor = "dark"
                state.value.bgColor = 'light'
            }
        }
    }
})

export const { changeTheme } = handleTheme.actions
export default handleTheme.reducer
