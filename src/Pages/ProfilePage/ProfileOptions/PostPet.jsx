import TextInput from "../../../Components/Inputs/TextInput/TextInput"
import { useForm } from "../../../hooks/useForm"

export const PostPet = () => {

    const { formData, handleInputChange} = useForm({
        name:'',
        age:'',
        specie:'',
        attributes: [],
        sex : '',
        city:'',
        description: ''
    })

    return (
        <div className="post-pet">
            <form className="post-pet-form">
                <TextInput
                    className={'post-pet'}
                    label={'Nombre de la mascota'}
                    placeholder="Nombre de la mascota"
                    type="text"
                    id="post-name-input"
                    name="name"
                    value={formData}
                    onChange={handleInputChange}
                />
                <TextInput
                    className={'post-pet'}
                    label={'Edad de la mascota'}
                    placeholder="Edad de la mascota"
                    type="number"
                    id="post-age-input"
                    name="age"
                    value={formData}
                    onChange={handleInputChange}
                    
                />
                <TextInput
                    className={'post-pet'}
                    label={'Especie de la mascota'}
                    placeholder="Especie de la mascota"
                    type="text"
                    id="post-specie-input"
                    name="specie"
                    value={formData}
                    onChange={handleInputChange}
                />
                <TextInput
                    className={'post-pet'}
                    label={'Sexo de la mascota'}
                    placeholder="Sexo de la mascota"
                    type="text"
                    id="post-sex-input"
                    name="sex"
                    value={formData}
                    onChange={handleInputChange}
                />
                <TextInput
                    className={'post-pet'}
                    label={'Breve descripcion de la mascota'}
                    placeholder="Descripcion de la mascota"
                    type="text"
                    id="post-description-input"
                    name="description"
                    value={formData}
                    onChange={handleInputChange}
                />
                <button className="btn-post-pet">Enviar</button>
            </form>
        </div>
    )
}