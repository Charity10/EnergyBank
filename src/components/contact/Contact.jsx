import { Component } from "react";

import './contact.css'


const Contact = () => {
    const year = new Date().getFullYear();

        return (
            <footer> {`Copyright @ Upbeat Code ${year}`}</footer>
        )
    }


export default Contact;
