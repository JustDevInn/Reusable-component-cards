import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function createCard(contact) {
  return (
    <Card
      id={contact.id}
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtWhaZR-SIAqzsH_ETNTC4vDDmsjHdq0NNZw&usqp=CAU" />
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
