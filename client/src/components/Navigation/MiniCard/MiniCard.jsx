import style from "./MiniCard.module.css"

const MiniCard = ({ image, officialName, commonName }) => {
    return (
        <div className={ style.main_miniCard }>
            <div className={style.miniContainer}>
                <div className={ style.imgContainer }>
                    <img src={ image } alt={ commonName } />
                </div>
                <div className={ style.namesContainer }>
                    <div className={ style.namesBox }>
                        <p className={ style.commonName }>{ commonName }</p>
                        <p className={ style.officialName }>{ officialName }</p>
                    </div>




                </div>
            </div>


        </div>
    )
}

export default MiniCard