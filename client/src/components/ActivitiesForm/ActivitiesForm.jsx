import { useEffect, useState } from 'react'
import style from './ActivitiesForm.module.css'


const ActivitiesForm = ({ countryName, activities, handleNewActivity, idCountry, setActiveForm }) => {
  const [ form, setForm ] = useState({
    id: "",
    name: "",
    difficulty: "",
    season: "",
    duration: ""
  })

  const [ errors, setErrors ] = useState([])


  const handleChange = (e) => {
    setForm({ ...form, [ e.target.name ]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validationsForm(form)
    setErrors(errors)
    setActiveForm(false)
  }

  useEffect(()=>{

    if (errors.length === 0) {
      setForm(prevForm => ({...prevForm, id: `${idCountry}_A${activities.length + 1}`}))
      handleNewActivity(form)
    }
  },[errors])

  const validationsForm = (form) => {
    let errorMessages = {
      name: "You must complete the Name field.",
      difficulty: "You must complete the Difficulty field.",
      season: "You must complete the Season field."
    }
    let errors = [];
    if(!form.name) errors.push(errorMessages.name)
    if(!form.difficulty) errors.push(errorMessages.difficulty)
    if(!form.season) errors.push(errorMessages.season)
    return errors;
  }

  return (
    <form className={ style.formBox } onSubmit={ (e) => handleSubmit(e) }>

      <div className={ style.formContainer }>
        <div className={ style.titleContainer }>

          <h2>Create Activities</h2>
          <hr />
        </div>
        <div className={ style.nameContainer }>
          <label htmlFor="name">Activity name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={ form.name }
            onChange={ (e) => handleChange(e) }
            
          />
        </div>

        <div>
          <label htmlFor="dificult">Dificulty: </label>
          <select
            id="difficulty"
            name="difficulty"
            value={ form.difficulty }
            onChange={ (e) => handleChange(e) }
          >

            <option value="null">-</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <div>
          <label htmlFor="season">Season: </label>
          <select
            id="season"
            name="season"
            value={ form.season }
            onChange={ (e) => handleChange(e) }
          >
            <option value="All">All Seasons</option>
            <option value="Spring">Spring</option>
            <option value="Summer">Summer</option>
            <option value="Autumn">Autumn</option>
            <option value="Winter">Winter</option>
          </select>
        </div>

        <div>
          <label htmlFor="duration">Duration: </label>
          <input
            type="text"
            id="duration"
            name="duration"
            value={ form.duration }
            onChange={ (e) => handleChange(e) }
          />
        </div>

        <div>
          { errors.length > 0 && (
            <ul>
              { errors.map((error, index) => (
                <li key={ index }>{ error }</li>
              )) }
            </ul>
          ) }
        </div>

        <div>
          <button type="submit">Create activity for { countryName }</button>
        </div>

      </div>
    </form>
  )
}

export default ActivitiesForm