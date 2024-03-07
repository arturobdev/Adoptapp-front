import MaleImg from '../../../assets/masculino.svg';
import FemaleImg from '../../../assets/femenino.svg';

export const MyRequests = ({ petList, userId, token }) => {

    return (

        <article className="my-profile">
            {(Array.isArray(petList) && petList.length > 0) ?
                petList.map(pet => (
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
                            <button className='btn-delete-pet' onClick={() => alert('Se removio la mascota')}>
                                Quitar
                            </button>
                        </div>
                    </article>
                )) :
                <div className='any-request'>
                    <p className='any-request-p'> Parece que aún no estas interesado en adoptar ninguna mascota </p>
                    <img src="https://www.shutterstock.com/image-vector/cartoon-vector-illustration-cute-sad-600nw-193602692.jpg" alt="" width={300} />
                </div>
            }
        </article >
    )
}