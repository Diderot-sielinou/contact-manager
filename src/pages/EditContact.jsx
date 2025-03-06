
import EditForm from "../components/EditForm";

import { useParams } from "react-router-dom";

export default function EditContact() {
  let { id } = useParams();
  


  return (
    <div>
      <EditForm contactID={id} />
    </div>
  );
}
