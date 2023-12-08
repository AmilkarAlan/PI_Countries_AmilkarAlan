import style from './CountryCard.module.css'

const CountryCard = ({image, official, common, capital}) => {
  return (
    <div className={style.cardContainer}>
      <div className={style.imageContainer}>
        <svg preserveAspectRatio='none' ><image href={image}></image></svg>
      </div>
      <div className={style.infoContainer}>
        <p className={style.commonName}>{common}</p>
        <p className={style.officialName}>{official}</p>
        <p className={style.capital}>{capital}</p>
      </div>
    </div>
  )
}

export default CountryCard