import MaleImg from '../../../assets/masculino.svg';
import FemaleImg from '../../../assets/femenino.svg';

export const MyRequests = ({ petList }) => {
    console.log(petList)
    return (
        
        <article className="my-profile">
            {Array.isArray(petList) && petList.map(pet => (
                <article className='pet-card' key={pet.id}>
                    <div className='img-description-container'>
                        <img className='card-img' src={pet.urlImg} alt='Mascota'></img>
                    </div>
                    <div className='card-content'>
                        <div className='card-title'>
                            <h4 className='pet-name'> {pet.name}</h4>
                            <div className='img-sex-div'>
                                <img className='img-sex' src={pet.sex === 'Macho' ? MaleImg : FemaleImg} alt="Imagen sexo" />
                            </div>
                        </div>
                        <p className='pet-age'>{pet.age} años</p>
                        <p className='pet-location'>{pet.institution}</p>
                        <p className='pet-city'>{pet.city}</p>
                        <button className='btn-delete-pet'>
                            Quitar
                        </button>
                    </div>
                </article>
            ))}
        </article >
    )
}