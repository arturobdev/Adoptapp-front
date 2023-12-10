import { useState, useEffect, useContext } from "react"

import { AuthContext } from "../../auth/AuthContext";
import { useAsync } from "../../hooks/useAsync";

import SectionStructure from "../../Components/SectionStructure/SectionStructure"
import { getProfile } from "../../Services/userServices.mjs";



import './profilePage.css';
import { MyProfile } from "./ProfileOptions/MyProfile";
import { MyRequests } from "./ProfileOptions/MyRequests";

export const ProfilePage = () => {

    const { user: { jwt }, userData: { id } } = useContext(AuthContext);
    const { isLoading, error, success, execute, data } = useAsync(getProfile);
    const [userProfile, setUserProfile] = useState({});
    const [isProfileSelected, setIsProfileSelected] = useState(true);
    const [isRequestedSelected, setIsRequestedSelected] = useState(false);
    const [isPostPetSelected, setIsPostPetSelected] = useState(false);

    useEffect(() => {
        if (id && jwt) {
            execute(2, jwt);
            if (success) {
                setUserProfile(data);
            }
        }
    }, [id, jwt, success]);

    const handleProfileSelected = () => {
        setIsProfileSelected(true);
        setIsPostPetSelected(false);
        setIsRequestedSelected(false)
    }

    const handleRequestSelected = () => {
        setIsProfileSelected(false);
        setIsPostPetSelected(false);
        setIsRequestedSelected(true)
    }

    const handlePostSelected = () => {
        setIsProfileSelected(false);
        setIsPostPetSelected(true);
        setIsRequestedSelected(false)
    }

    return (
        <>
            <SectionStructure
                className={'profile'}
                sectionTitle={'Mi perfil'}
            >
                {(data && success) ? <>
                    <section className="main-profile-window">
                        <ul className="profile-options-list">
                            <li className={`profile-options-item ${isProfileSelected ? 'active' : null}`} onClick={handleProfileSelected}>Información</li>
                            <li className={`profile-options-item ${isRequestedSelected ? 'active' : null}`} onClick={handleRequestSelected}>Solicitudes</li>
                            <li className={`profile-options-item ${isPostPetSelected ? 'active' : null}`} onClick={handlePostSelected}>Quiero dar en adopcion</li>
                        </ul>
                        {isProfileSelected ? <MyProfile userProfile={userProfile} />
                            : (isRequestedSelected) ? <MyRequests petList={userProfile.pets} /> : null}
                    </section>
                </> : (!isLoading && error) ?
                    <div>
                        <p>Ocurrio un problema</p>
                    </div>
                    : null}
            </SectionStructure >
        </>
    )
}