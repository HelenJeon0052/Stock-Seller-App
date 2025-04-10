import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";



interface FavoriteState {
    value: number;
    on: boolean;
    off: boolean;
}

const initialState: FavoriteState = {
    value: 0,
    on: false,
    off: true
};

const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        isFavorite: (state) => {
            state.on = !state.on;
            state.value += state.on ? 1 : -1;
        },
        countFavorite: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(favoriteAsync.pending, () => {
            console.log('pending')
        })
        .addCase(favoriteAsync.fulfilled, (state, action: PayloadAction<number>) => {
            state.value += action.payload
        })
    }
})

export const favoriteAsync = createAsyncThunk(
    "countFavorite/favoriteAsync",
    async (arg: number) => {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        return arg;
    }
)

export const { countFavorite, isFavorite } = favoriteSlice.actions; // export the actions

export default favoriteSlice.reducer; // access the reducer