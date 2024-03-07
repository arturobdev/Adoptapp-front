import { convertDate } from '../../../utils/convertDate.mjs'

import './profileOptions.css'


export const MyProfile = ({ userProfile }) => {
    return (
        <article className="my-profile">
            <h3 className="profile-name"> {userProfile.name + ' ' + userProfile.surname}</h3>
            <p className="profile-user-creation">Miembro desde el : {convertDate(userProfile.createAt)}</p>
            <div>
                <div className="profile-data-group">
                    <p className='profile-item'> Nombre/s:</p>
                    <p className='profile-data'>{userProfile.name}</p>
                </div>
                <div className="profile-data-group">
                    <p className='profile-item'> Apellido/s:</p>
                    <p className='profile-data'>{userProfile.surname}</p>
                </div>
                <div className="profile-data-group">
                    <p className='profile-item'> Correo electrónico:</p>
                    <p className='profile-data'>{userProfile.email}</p>
                </div>
                <div className="profile-data-group">
                    <p className='profile-item'> Numero de telefono:</p>
                    <p className='profile-data'>{userProfile.phoneNumber}</p>
                </div>
            </div>
            <div>
                <div className="profile-data-group">
                    <p className='profile-item'> Dirección:</p>
                    <p className='profile-data'>{userProfile.address}</p>
                </div>
                <div className="profile-data-group">
                    <p className='profile-item'> ¿Tiene mascota?:</p>
                    <p className='profile-data'>{userProfile.hasPet ? 'Si' : 'No'}</p>
                </div>
                <div className="profile-data-group">
                    <p className='profile-item'> Vive en:</p>
                    <p className='profile-data'>{userProfile.livingPlace}</p>
                </div>
                <div className="profile-data-group">
                    <p className='profile-item'> Localidad:</p>
                    <p className='profile-data'>{userProfile.city}</p>
                </div>
            </div>
        </article>
    )
}