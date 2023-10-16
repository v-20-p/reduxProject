import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counterFile/counterSlice';


export type RootState = {
    counterR: ReturnType<typeof counterSlice>
}

export const store = configureStore({
    reducer: {
        counterR: counterSlice
    }
});