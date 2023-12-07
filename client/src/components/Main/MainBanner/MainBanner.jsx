import style from "./MainBanner.module.css"
const BannerCountry = ({countries}) => {
  return (
    <div  className={style.main_bannerContainer}>
      <img src="https://th.bing.com/th/id/R.fd7a9da09415a0dc3845b2e5a7a2b94e?rik=IMI%2btgRS0SJwLA&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f06%2fDownload-World-Map-Wallpapers-HD.png&ehk=StDTNzljDhHuS4IcrsLWR3kM%2bMpdT9sQMVzYuht3uLA%3d&risl=1&pid=ImgRaw&r=0" alt="" />
      <h1>Henry Countries Project</h1>
    </div>
  )
}

export default BannerCountry