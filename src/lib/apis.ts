export async function getAppointments() {
  const req = await fetch(`${import.meta.env.VITE_API_URL}/appointments`);
  const res = req.json();
  return res;
}
export async function acceptAppointmentFunc(appointment: Appointment) {
  const req = await fetch(
    `${import.meta.env.VITE_API_URL}/appointments/${appointment.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appointment),
    }
  );
  const res = req.json();
  return res;
}
export async function deleteAppointmentFunc(appointment: Appointment) {
  const req = await fetch(
    `${import.meta.env.VITE_API_URL}/appointments/${appointment.id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appointment),
    }
  );
  const res = req.json();
  return res;
}

export async function getMessages() {
  const req = await fetch(`${import.meta.env.VITE_API_URL}/messages`);
  const res = req.json();
  return res;
}
