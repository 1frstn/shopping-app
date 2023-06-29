import {Outlet} from 'react-router-dom'
import NavBarPanel from './NavBarPanel'

export default function RootLayout() {
  return (
    <>
     <NavBarPanel/>
     <main>
        <Outlet/>
     </main>
    </>
  )
}
