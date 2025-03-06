import React from 'react'
import ContactList from '../components/ContactList'
import { useNavigate } from "react-router-dom";

export default function Home() {
  let navigate = useNavigate()
   const handleNavigate = ()=>{
    navigate("addContatct")
   }
  return (
    <div>
      <ContactList nagigate={handleNavigate}/>
    </div>
  )
}
