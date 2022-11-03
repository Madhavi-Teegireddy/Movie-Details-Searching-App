import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from '../../common/apis/movieApi';
import { APIKEY } from '../../common/apis/movieApiKey';



export const fetchAsyncMovies = createAsyncThunk(
    'movies/fetchAsyncMovies',async (term) => {
        const response = await movieApi
        .get(`?apiKey=${APIKEY}&s=${term}&type=movie`)
        return response.data ;
})

export const fetchAsyncShows = createAsyncThunk(
    'movies/fetchAsyncShows',async (term) => {
        const response = await movieApi
        .get(`?apiKey=${APIKEY}&s=${term}&type=series`)
        return response.data ;
})

export const fetchAsyncMovieOrShowDetails = createAsyncThunk(
    'movies/fetchAsyncMovieORShowDetails',
    async (id) => {
        const seriesText = "Friends";
        const response = await movieApi
        .get(`?apiKey=${APIKEY}&i=${id}&Plot=full`)
        return response.data ;
})

const initialState = {
    movies:{},
    shows:{},
    selectedMovieOrShow:{},
}

const movieSlice = createSlice({
    name:"movies",
    initialState,
    reducers:{
       
        removeSelectedMovieOrShow: (state) => {
            state.selectedMovieOrShow = {};
        },
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("Pending");
        },
        [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
            console.log("Fetched successfully");
            return {...state, movies:payload};
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("Rejected");
        },
        [fetchAsyncShows.fulfilled]: (state, {payload}) => {
            console.log("Fetched shows successfully");
            return {...state, shows:payload};
        },
        [fetchAsyncMovieOrShowDetails.fulfilled]: (state, {payload}) => {
            console.log("Fetched shows successfully");
            return {...state, selectedMovieOrShow:payload};
        },
        },
});

export const {removeSelectedMovieOrShow} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieorShow = (state) => state.movies.selectedMovieOrShow;
export default movieSlice.reducer;