import TextInput from "../../Components/Inputs/TextInput/TextInput";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";
import { restorePass } from "../../Services/authServices.mjs";

import { getValidateEmail } from "../../Services/validateForms.mjs";
import { useAsync } from "../../hooks/useAsync";

import './resetPassword.css'

export const ResetPasswordModal = () => {

    const { isLoading, error, success, execute } = useAsync(restorePass);
    const [formData, , handleInputChange, , reset] = useForm({
        email: ''
    })

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        if (getValidateEmail(formData.email)) {
            execute(formData)
        }
        alert('Por favor ingresa una direccion de mail válida')
    }

    return (
        <div className="restore-pass-modal">
            <h3 className="restore-pass-title">
                Por favor ingresa la dirección de correo electrónico con la que estas logueado. En caso de coincidir con la información almacenada, se te enviará un correo para proceder con el restablecimiento de tu contraseña.
            </h3>
            <form className="restore-pass-form" onSubmit={handleSubmitForm}>
                <TextInput
                    className='restore-pass'
                    label="Email"
                    placeholder="email@correo.com"
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    isUseRef={formData.email}
                    onChange={handleInputChange}
                />
                <div className="restore-btn-container">
                    {isLoading ?
                        <p className=""> Verificando correo electronico... </p> :
                        <button className="restore-pass-btn"> Enviar </button>
                    }
                </div>

            </form>
            <div className="restore-pass-error">
                {error && (
                    <p className="error-message">No tenemos registrado usuario con el correo proporcionado. </p>
                )}
                {success && (
                    <p className="success-message"> Revisa tu bandeja de correo, te enviamos las instrucciones para continuar con el restablecimiento de tu contraseña.</p>
                )}
            </div>
        </div>
    )
}