import { useForm } from "../../hooks/useForm";
import { useEffect, useState } from "react";

import TextInput from "../../Components/Inputs/TextInput/TextInput"
import TitleBlock from "../../Components/Blocks/TitleBlock/TitleBlock";

import showPass from '../../assets/eye-password/show-password.svg'
import hidePass from '../../assets/eye-password/hide-password.svg'
import { resetPassword } from "../../Services/resetPass";
import { getValidateForm, getValidatePassword } from "../../Services/validateForms.mjs";
import { useAsync } from "../../hooks/useAsync";
import { CircularProgress } from "@mui/joy";


export const ResetPasswordWindow = () => {

    const searhParam = new URLSearchParams(location.search);
    const tokenPassword = searhParam.get('reset_password_token');

    const { isLoading, error, success, execute } = useAsync(resetPassword);
    const [equalPass, setEqualPass] = useState(false)
    const [showFirst, setShowFirst] = useState(false);
    const [showSecond, setShowSecond] = useState(false);
    const [passwordData, , handlePasswordChange, , reset] = useForm({
        password: '',
        repeatPassword: ''
    })

    const handleToogleFirstPass = () => {
        setShowFirst(!showFirst)
    }

    const handleToogleSecondPass = () => {
        setShowSecond(!showSecond)
    }

    useEffect(() => {
        if (passwordData.repeatPassword) {
            setEqualPass(passwordData.password === passwordData.repeatPassword)
        }
    }, [passwordData])

    const validateForm = () => getValidateForm(passwordData) &&
        getValidatePassword(passwordData.password)
        && equalPass

    const handleSubmitForm = (event) => {
        event.preventDefault();
        if (validateForm()) {
            execute(passwordData, tokenPassword)
            if (success) {
                reset();
            }
        }
        else alert('Por favor ingrese datos validos para continuar')
    }

    return (
        <>
            <TitleBlock title={'Restablecimiento de contraseña'} />
            <form className='restored-pass-form' onSubmit={handleSubmitForm}>
                <div className="first-pass-container">
                    <TextInput
                        className={'restored pass-div'}
                        label={"Nueva contraseña"}
                        placeholder={"Ingrese la nueva contraseña"}
                        type={showFirst ? "text" : "password"}
                        id={"password"}
                        name={"password"}
                        value={passwordData.password}
                        isUseRef={passwordData.password}
                        onChange={handlePasswordChange}
                    />
                    <button type='button' className='show-pass-btn' onClick={handleToogleFirstPass}>
                        <img src={!showFirst ? showPass : hidePass} alt="" />
                    </button>
                </div>
                <div className={"second-pass-container"}>
                    <TextInput
                        className={`restored pass-div 
                        ${(passwordData.repeatPassword && !equalPass) ? ' not-equal-input' : ''}
                        ${(passwordData.repeatPassword && equalPass) ? ' allow-input' : ''}`}
                        label={"Repita la contraseña"}
                        placeholder={"Repita la contraseña"}
                        type={showSecond ? "text" : "password"}
                        id={`repeat-password`}
                        name={"repeatPassword"}
                        value={passwordData.repeatPassword}
                        onChange={handlePasswordChange}
                    />
                    <button type='button' className='show-pass-btn' onClick={handleToogleSecondPass}>
                        <img src={!showSecond ? showPass : hidePass} alt="" />
                    </button>
                </div>
                <div className="not-equal-container">
                    {(passwordData.repeatPassword && !equalPass) ?
                        (<p className="not-equal-p"> Las contraseñas no coinciden </p>) : ''}
                    {(passwordData.repeatPassword && equalPass) ?
                        (<p className="allow-p"> Las contraseñas coinciden </p>) : ''}
                </div>
                <ul className="password-info-list">
                    <li className="password-info-title">La contraseña debe contener :</li>
                    <li className="password-info-item">Al menos 8 caracteres</li>
                    <li className="password-info-item">Al menos una mayúscula</li>
                    <li className="password-info-item">Al menos una minuúscula</li>
                    <li className="password-info-item">Al menos un carácter especial</li>
                    <li className="password-info-item">Al menos un número</li>
                </ul>
                {(!isLoading) ?
                    <button className='restored-pass-btn'>Enviar</button>
                    : <CircularProgress color="success" />
                }
                {success ?
                    <p className="restored-pass-success"> Se ha reemplazado la contraseña con éxito</p> : (error) ? <p className="restored-pass-reject"> Ocurrio un problema intente nuevamente por favor </p> : null}
            </form>
        </>
    )
}