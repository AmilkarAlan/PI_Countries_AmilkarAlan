import style from './ActivitiesForm.module.css'

const ActivitiesForm = () => {

 

  return (
    <form >
      <div>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={ "name" }
          required
        />
      </div>
      <div>
        <label htmlFor="dificult">Dificultad:</label>
        <select
          id="dificult"
          name="dificult"
          value={ 1}
          required
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div>
        <label htmlFor="season">Temporada:</label>
        <select
          id="season"
          name="season"
          value={"season" }
          required
        >
          <option value="winter">Invierno</option>
          <option value="spring">Primavera</option>
          <option value="summer">Verano</option>
          <option value="autumn">Otoño</option>
        </select>
      </div>
      <div>
        <label htmlFor="duration">Duración:</label>
        <input
          type="text"
          id="duration"
          name="duration"
          value={"duration"}
          required
        />
      </div>
      <div>
        <button type="submit">Crear actividad</button>
      </div>
    </form>
  )
}

export default ActivitiesForm