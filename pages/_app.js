import '../styles/globals.css'
import Script from "next/script"
import '../design/common.css'
import 'bootstrap/dist/css/bootstrap.css';
import '../design/navbar.css'
import '../design/about.css'
import '../design/whyus.css'
import '../design/newarrivals.css'
import '../design/info.css'
import '../design/footer.css'
import '../design/images.css'
import '../design/homepage.css'
function MyApp({ Component, pageProps }) {
  <Script
src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
crossorigin="anonymous"/>
  return <Component {...pageProps} />
}

export default MyApp
