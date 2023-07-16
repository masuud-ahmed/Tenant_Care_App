
import { Routes, Route, } from 'react-router-dom'
import { About, GetStarted, Home, SignIn, SignUp, Dashboard, Dhashboard, Properties, Tenants, Requests, AddProperty, MyProperties, ViewProperty, SignUpB } from './pages'
import PriveRoute from './PrivateRoute'



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/GetStarted" element={<GetStarted />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path='/busines/signUp' element={<SignUpB/>}/>

        <Route to="/tenant/dashboard" element={<PriveRoute/>}>
          <Route path="/tenant/dashboard" element={<Dhashboard />} />
        </Route>

        <Route to="/tenant/Properties" element={<PriveRoute/>}>
          <Route path="/tenant/Properties" element={<Properties />} />
        </Route>

        <Route to="/Tenant/dashboard/ViewProperty" element={<PriveRoute/>}>
          <Route path="/Tenant/dashboard/ViewProperty" element={<ViewProperty />} />
        </Route>

        <Route to="/landlord/Dashboard" element={<PriveRoute/>}>
          <Route path='/landlord/Dashboard' element={<Dashboard />} />
        </Route>

        <Route to="/landlord/Properties" element={<PriveRoute/>}>
          <Route path="/landlord/Properties" element={<MyProperties />} />
        </Route>

        <Route to="/landlord/Tenants" element={<PriveRoute/>}>
          <Route path="/landlord/Tenants" element={<Tenants />} />
        </Route>

        <Route to="/landlord/AddProperty" element={<PriveRoute/>}>
          <Route path="/landlord/AddProperty" element={<AddProperty />} />
        </Route>

        <Route to="/landlord/Requests" element={<PriveRoute/>}>
          <Route path="/landlord/Requests" element={<Requests />} />
        </Route>

        
        

      </Routes>
    </>
  )
}

export default App
