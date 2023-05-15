import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface AppointmentsState {
  appointments: Appointment[] | [];
}
const initialState: AppointmentsState = {
  appointments: [],
};

export const appointmentsSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAppointments: (state, action: PayloadAction<Appointment[]>) => {
      state.appointments = action.payload;
    },
    acceptAppointment: (state, action: PayloadAction<Appointment>) => {
      state.appointments = state.appointments.map((a) => {
        if (a.id === action.payload.id) {
          a.accepted = true;
          return a;
        }
        return a;
      });
    },
    deleteAppointment: (state, action: PayloadAction<string>) => {
      state.appointments = state.appointments.filter(
        (a) => a.id != action.payload
      );
    },
  },
});

export const { setAppointments, acceptAppointment, deleteAppointment } =
  appointmentsSlice.actions;

export default appointmentsSlice.reducer;
