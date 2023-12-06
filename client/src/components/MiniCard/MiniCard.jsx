import style from "./MiniCard.module.css"

const MiniCard = ({ image, officialName, commonName }) => {
    return (
        <div className={ style.main_miniCard }>

            <div className={ style.imgContainer }>
                <img src={ image } alt={ commonName } />
            </div>
            <div>
                <p className={style.commonName}>{ commonName }</p>
                <p className={style.officialName}>{ officialName }</p>
            </div>

        </div>
    )
}

export default MiniCard