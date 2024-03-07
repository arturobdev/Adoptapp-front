import { CircularProgress } from '@mui/joy';
import { useAsync } from '../../../hooks/useAsync';
import { Modal } from '../../Modales/Modal';

import { addNewPet } from '../../../Services/userServices.mjs';

import './confirmRequest.css';

export const ConfirmRequest = ({ petName, petId, userId, isOpenModal, setIsOpenModal, token }) => {

    const { isLoading, error, success, execute, setError, setSuccess } = useAsync(addNewPet);

    const hadleSentRequest = () => {
        execute({ userId: userId, petId: petId }, token)
    }

    return (
        <Modal
            modalNumber={2}
            isOpen={isOpenModal}
            closeModal={() => { setIsOpenModal(false), setError(false), setSuccess(false) }}
        >
            <div className='request-container'>
                <p> Esta interesado en adoptar a {petName}, confirme la solicitud y un especialista lo contactará a la brevedad para continuar con el proceso de adopcion responsable.</p>
                <p className='adopt-greetin'>Equipo de Adopciones.</p>
                <p className='signature'>Adoptapp </p>
                <div className='btn-request-container'>
                    {!isLoading ? <>
                        <button className='btn-confirm-request' onClick={hadleSentRequest}>Confirmar</button>
                        <button className='btn-reject-request' onClick={() => setIsOpenModal(false)}>Cancelar</button>
                    </>
                        : <CircularProgress color='success' />
                    }
                </div>
                {success ?
                    <p className='request-succes'>Se registro su solicitud. Muchas Gracias.</p> :
                    (error && error.response.status === 409) ?
                        <p className='request-reject'>Ya realizó la solicitud de esta mascota.</p> :
                        (error && error.response.status === 429) ?
                            <p className='request-reject'>Alcanzó el limite máximo de solicitudes. Aguarde que se verifiquen sus anteriores solicitudes o puede cancelarlas y solicitar una nueva mascota. Gracias.</p> : 
                            error ? 
                            <p className='request-reject'>Hubo un error intente nuevamente por favor.</p> : null}
            </div>
        </Modal>
    )
}