import { CircularProgress } from '@mui/joy';
import { useAsync } from '../../../hooks/useAsync';
import { Modal } from '../../Modales/Modal';

import { addNewPet } from '../../../Services/userServices.mjs';

import './confirmRequest.css';

export const ConfirmRequest = ({ petName, petId, userId, isOpenModal, setIsOpenModal, token }) => {

    const { isLoading, error, success, execute } = useAsync(addNewPet);

    const hadleSentRequest = () => {
        execute({ userId: userId, petId: petId }, token)
    }

    console.log(token)
    return (
        <Modal
            modalNumber={2}
            isOpen={isOpenModal}
            closeModal={() => setIsOpenModal(false)}
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
                    <p className='request-succes'>Se registro su solicitud. Muchas Gracias.</p> : error ?
                        <p className='request-reject'>Hubo un error intente nuevamente por favor.</p>
                        : null}
            </div>
        </Modal>
    )
}