import style from './DetailBanner.module.css'

const DetailBanner = ({image, commonName, officialName}) => {
  return (
    <div className={style.banner}>
        <img src={image} alt={commonName} />
        <div className={style.names}>
            <h1>{commonName}</h1>
            <h3>{officialName}</h3>
        </div>

    </div>
  )
}

export default DetailBanner