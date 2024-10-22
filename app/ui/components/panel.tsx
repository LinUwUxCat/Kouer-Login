'use client';

import LabeledField from "./labeled-field"
import Button from "./button"
import { authenticate } from '@/app/lib/actions';
import { useEffect, useState } from "react";
import { poppins } from "../fonts";
import { AuthError } from "next-auth";

export default function Panel(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isEmailValid, setEmailValid] = useState(true)
    const [isPwValid, setPwValid] = useState(true)
    const [errorMessage, setErrorMessage] = useState("")

    function handleEmailChange(e : React.ChangeEvent<HTMLInputElement>){
        setEmail(e.currentTarget.value)
        setEmailValid(true)
    }

    function handlePasswordChange(e : React.ChangeEvent<HTMLInputElement>){
        setPassword(e.currentTarget.value)
        setPwValid(true)
    }

    function onLoginClicked(){
        setEmailValid(email.length > 2);
        setPwValid(password.length > 0);
        console.log(isPwValid)
        if (!isPwValid || !isEmailValid) return;

        authenticate(email, password) // This does not throw or return anything. I have no idea why.

    }
    
    function onCreateAccountClicked(){

    }

    return (
        <div className={`${poppins.className} bg-white flex flex-col items-center rounded-3xl w-[600px] min-h-max m-5 justify-center`}>
            <img src="https://fbnjznanxacfwrzlkhxl.supabase.co/storage/v1/object/public/kouer/logo.svg" className="w-1/4"></img>
            <div className="text-green-700 text-center text-xl">Content de vous voir!</div>
            <LabeledField label="Adresse mail" type="text" setContent={handleEmailChange} isValid={isEmailValid}/>
            <LabeledField label="Mot de passe" type="password" setContent={handlePasswordChange} isValid={isPwValid}/>
            { /* Mot de passe oublié - TODO */ }
            <div className="text-red-500 text-align-center">{errorMessage}</div>
            <Button onClickHandler={onLoginClicked} text="Se connecter" isPrimary={true}/>
            <Button onClickHandler={onCreateAccountClicked} text="Créer un compte" isPrimary={false}/>
        </div>

    )
}