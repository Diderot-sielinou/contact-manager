import React from "react";
import ContactList from "../components/ContactList";
import { useNavigate } from "react-router-dom";

export default function Home() {
  let navigate = useNavigate();
  const handleNavigate = () => {
    navigate("addContatct");
  };
  return (
    <div>
      <div className="flex justify-center my-7">
        <h1 className="text-2xl text-black uppercase font-serif ">
          contact list
        </h1>
      </div>
      <ContactList nagigate={handleNavigate} />
    </div>
  );
}
