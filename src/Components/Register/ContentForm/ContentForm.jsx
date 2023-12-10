/* eslint-disable react/prop-types */
import { useState } from "react"
import TextInput from "../../Inputs/TextInput/TextInput"
import InputRadioGroup from "../../Inputs/InputRadioGroup/InputRadioGroup"
import showPass from '../../../assets/eye-password/show-password.svg'
import hidePass from '../../../assets/eye-password/hide-password.svg'
import CheckboxInput from "../../Inputs/CheckboxInput/CheckboxInput"
import { Link } from "react-router-dom"

const locationOptions = [
    { labelContent: 'Ushuaia', value: '9410' },
    { labelContent: 'Tolhuin', value: '9412' },
    { labelContent: 'Rio Grande', value: '9420' },
];

const livingPlaceOptions = [
    { labelContent: 'Casa', value: 'Casa' },
    { labelContent: 'Departamento', value: 'Departamento' },
];

const hasPetOptions = [
    { labelContent: 'Si', value: true },
    { labelContent: 'No', value: false },
];


export const ContentForm = ({ formData, handleRegisterChange, handleCheckboxChange }) => {

    const [isShowPass, setIsShowPass] = useState(false);

    const handleTooglePass = () => {
        setIsShowPass(!isShowPass)
    }

    return (
        <>
            <div className='register-form-inputs'>
                <TextInput
                    className='register'
                    label="Nombre"
                    placeholder="Nombre Completo"
                    id="nombre"
                    name="name"
                    value={formData.name}
                    onChange={handleRegisterChange}
                    isRequired={true}
                />
                <TextInput
                    className='register'
                    label="Apellido"
                    placeholder="Apellido"
                    id="apellido"
                    name="surname"
                    value={formData.surname}
                    onChange={handleRegisterChange}
                    isRequired={true}
                />
                <TextInput
                    className='register'
                    label="Domicilio"
                    placeholder="Ingrese su domicilio"
                    id="domicilio"
                    name="address"
                    value={formData.address}
                    onChange={handleRegisterChange}
                    isRequired={true}
                />
                <TextInput
                    className='register'
                    label="Email"
                    placeholder="email@correo.com"
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    isUseRef={formData.email}
                    onChange={handleRegisterChange}
                    isRequired={true}
                />
                <TextInput
                    className='register pass-div'
                    label="Contraseña"
                    placeholder="Contraseña"
                    type={isShowPass ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    isUseRef={formData.password}
                    onChange={handleRegisterChange}
                    isRequired={true}
                >
                    <button type='button' className='button-pass-register' onClick={handleTooglePass}>
                        <img src={isShowPass ? showPass : hidePass} alt="" />
                    </button>
                    <ul className="password-info-list">
                        <li>La contraseña debe contener :</li>
                        <li className="password-info-item">Al menos 8 caracteres</li>
                        <li className="password-info-item">Al menos una mayúscula</li>
                        <li className="password-info-item">Al menos una minuúscula</li>
                        <li className="password-info-item">Al menos un carácter especial</li>
                        <li className="password-info-item">Al menos un número</li>
                    </ul>
                </TextInput>
                <TextInput
                    className='register'
                    label="Numero de telefono"
                    placeholder={"Ej : 2901826362"}
                    type={"number"}
                    id={"telefono"}
                    name={"phoneNumber"}
                    min={"8"}
                    value={formData.phoneNumber}
                    isUseRef={formData.phoneNumber}
                    onChange={handleRegisterChange}
                    isRequired={true}
                />
            </div >
            <div className={'radio-input-form'}>
                <InputRadioGroup
                    title={"Localidad"}
                    options={locationOptions}
                    name={"zipCode"}
                    onChange={handleRegisterChange}
                />
                <InputRadioGroup
                    title={"¿Dónde vive?"}
                    options={livingPlaceOptions}
                    name={"livingPlace"}
                    onChange={handleRegisterChange}
                />
                <InputRadioGroup
                    title={"¿Tiene mascota?"}
                    options={hasPetOptions}
                    name={"hasPet"}
                    onChange={handleRegisterChange}
                />
            </div>
            <div className={'checkbox-input-form'}>
                <CheckboxInput
                    labelContent={'Soy mayor de 21 años'}
                    type={"checkbox"}
                    name={"availableAge"}
                    value={formData.availableAge}
                    onChange={handleCheckboxChange}
                />
                <CheckboxInput
                    labelContent={ <> Acepto los <Link className="terms-conditions"> Términos y condiciones </Link> </>}
                    type={"checkbox"}
                    name={"termsAndCondition"}
                    value={formData.termsAndCondition}
                    onChange={handleCheckboxChange}
                />
            </div>
        </>
    )
}