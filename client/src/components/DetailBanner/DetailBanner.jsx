import style from './DetailBanner.module.css'

const DetailBanner = ({ image, commonName, officialName }) => {
  return (
    <div className={ style.banner }>

      <div className={ style.imageContainer }>

        <img src={ image } alt={ commonName } />
      </div>
      <div className={ style.namesDrop }>
        <div className={ style.names }>
          <h1>{ commonName }</h1>
          <p>{ officialName }</p>
        </div>

      </div>


    </div>
  )
}

export default DetailBanner