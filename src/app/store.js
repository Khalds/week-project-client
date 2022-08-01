import { configureStore } from "@reduxjs/toolkit"
import moviesSlice from "../features/Movies/moviesSlice"
import genreSlice from "../features/Genres/genreSlice"
import hallSlice from "../features/Halls/hallSlice"
import bookingSlice from "../features/Booking/bookingSlice"
import seatSlice from "../features/Seat/seatSlice"
import cinemaSlice from "../features/Cinema/cinemaSlice"
import reviewsSlice from "../features/Reviews/reviewSlice"
import application from "../features/Application/applicationSlice"
import sessionSlice from "../features/Sessions/sessionSlice"

export const store = configureStore({
  reducer: {
    movieReducer: moviesSlice,
    genreReducer: genreSlice,
    sessionReducer: sessionSlice,
    hallReducer: hallSlice,
    bookingReducer: bookingSlice,
    cinemaReducer: cinemaSlice,
    reviewReducer: reviewsSlice,
    seatReducer: seatSlice,
    application: application,
  },
})
