import { Routes, Route} from "react-router";
import ScrollToTop from '../components/function/ScrollToTop.jsx'
import Main from '../pages/MainPage.jsx'
import Home from '../routes/mainpage/home/Home.jsx'
import Documentation from '../routes/mainpage/docs/Documentation.jsx'
import AboutUs from '../routes/mainpage/docs/AboutUs.jsx'
import License from '../routes/mainpage/docs/License.jsx'
import Installation from '../routes/mainpage/installation/Installation.jsx'
function AppRoutes() {
  return (
      <div className="app_routes">
		<ScrollToTop />
        <Routes>
			<Route path="/" element={<Main />}>
				<Route index element={<Home />} />
				<Route path="home" element={<Home />}/>
				<Route path="docs" element={<Documentation />}>
					<Route index element={<AboutUs />} />
					<Route path="about-us" element={<AboutUs />}/>
					<Route path="license" element={<License />}/>
				</Route>
				<Route path="installation" element={<Installation />}/>
			</Route>
        </Routes>
      </div>
  )
}
export default AppRoutes