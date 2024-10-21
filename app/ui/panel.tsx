'use client';

import LabeledField from "./labeled-field"
import Button from "./button"

export default function Panel(){

    function onLoginClicked(){

    }
    
    function onCreateAccountClicked(){

    }

    return (
        <div className="bg-white flex flex-col items-center rounded-3xl w-1/3 min-h-max justify-center">
            { /* Image - TODO */ }
            <LabeledField label="Adresse mail" type="text"/>
            <LabeledField label="Mot de passe" type="password"/>
            { /* Mot de passe oublié - TODO */ }
            <Button onClickHandler={onLoginClicked} text="Se connecter" isPrimary={true}/>
            <Button onClickHandler={onCreateAccountClicked} text="Créer un compte" isPrimary={false}/>
        </div>

    )
}