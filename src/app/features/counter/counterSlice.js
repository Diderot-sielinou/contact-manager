import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  contacts: [
    {
      fullName: "Alice Dupont",
      email: "alice.dupont@example.com",
      phone: "+0123456789",
      image:
        "https://media.istockphoto.com/id/2160502733/fr/photo/working-day-in-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=6td-ad-nuET0rO_cLdkyzrkjyCUveJ3Sy60nr-ngTEc=",
      job: "Ingénieur",
      address: "younde",
      id: uuidv4(),
    },
    {
      fullName: "Bob Martin",
      email: "bob.martin@example.com",
      phone: "+0987654321",
      image:
        "https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXRpbGlzYXRldXJ8ZW58MHx8MHx8fDA%3D",
      job: "Designer",
      address: "londre",
      id: uuidv4(),
    },
    {
      fullName: "Claire Moreau",
      email: "claire.moreau@example.com",
      phone: "+0147852369",
      image:
        "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXRpbGlzYXRldXJ8ZW58MHx8MHx8fDA%3D",
      job: "Développeuse",
      address: "canada",
      id: uuidv4(),
    },
    {
      fullName: "David Leroy",
      email: "david.leroy@example.com",
      phone: "+0234567891",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHV0aWxpc2F0ZXVyfGVufDB8fDB8fHww",
      job: "Chef de projet",
      address: "younde",
      id: uuidv4(),
    },
    {
      fullName: "Emma Dubois",
      email: "emma.dubois@example.com",
      phone: "+0345678912",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHV0aWxpc2F0ZXVyfGVufDB8fDB8fHww",
      job: "Consultante",
      address: "limbe",
      id: uuidv4(),
    },
  ],
};

export const contactSilice = createSlice({
  name: "contactList",
  initialState,
  reducers: {
    addContacts: (state, action) => {
      const newContact = {
        ...action.payload,
        image:"data:image/jpeg;base64,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",
        id: uuidv4(),
      };
      state.contacts.push(newContact);
    },
    deletContatct: (state, action) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id != action.payload.id
      );
    },
    updateContact:(state,action)=>{
      const { id, updatedUser } = action.payload;
      const index = state.contacts.findIndex((user) => user.id === id);
      if (index !== -1) {
        state.contacts[index] = { ...state.contacts[index], ...updatedUser }; 
      }
    }
  },
});

export const { addContacts, deletContatct,updateContact } = contactSilice.actions;

export default contactSilice.reducer;
