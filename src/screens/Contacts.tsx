import React from "react";
import { Contact, contacts } from "../data/personal";


function EntryContact({contact}: {contact: Contact}) {

    return (
        <div className="entry_contact">
            <p className="contact_type">{contact.type}:</p>
            <p className="contact">{contact.contact}</p>
        </div>
    )
}

export function Contacts() {

    return(
        <div className="screen_area_container">
            <div className="column">
                <h1 className="page_title">Contacts</h1>
                <div className="contacts_container">
                    {contacts.map(it => <EntryContact contact={it}/>)}
                </div>
            </div>
        </div>
    )
}