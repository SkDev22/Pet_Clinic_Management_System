import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import UserProfiles from "./pages/UserProfiles";
import Videos from "./pages/UiElements/Videos";
import Images from "./pages/UiElements/Images";
import Alerts from "./pages/UiElements/Alerts";
import Badges from "./pages/UiElements/Badges";
import Avatars from "./pages/UiElements/Avatars";
import Buttons from "./pages/UiElements/Buttons";
import LineChart from "./pages/Charts/LineChart";
import BarChart from "./pages/Charts/BarChart";
import Calendar from "./pages/Calendar";
import BasicTables from "./pages/Tables/BasicTables";
import FormElements from "./pages/Forms/FormElements";
import Blank from "./pages/Blank";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";
import PatientRegister from "./pages/PatientRegister";
import Owners from "./pages/Owners";
import Pets from "./pages/Pets";
import Appointments from "./pages/Appointments";
import Records from "./pages/Records";
import Vaccinations from "./pages/Vaccinations";
import Services from "./pages/Services";
import Documents from "./pages/Documents";
import Invoices from "./pages/Invoices";
import InvoiceItems from "./pages/InvoiceItems";
// import Predictions from "./pages/Predictions";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/home" element={<Home />} />

            {/* Others Page */}
            <Route path="/profile" element={<UserProfiles />} />
            {/* <Route path="/predictions" element={<Predictions />} /> */}
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/blank" element={<Blank />} />
            <Route path="//patientregister" element={<PatientRegister />} />
            <Route path="/owners" element={<Owners />} />
            <Route path="/pets" element={<Pets />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/records" element={<Records />} />
            <Route path="/vaccinations" element={<Vaccinations />} />
            <Route path="/services" element={<Services />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/invoiceitems" element={<InvoiceItems />} />

            {/* Forms */}
            <Route path="/form-elements" element={<FormElements />} />

            {/* Tables */}
            <Route path="/basic-tables" element={<BasicTables />} />

            {/* Ui Elements */}
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/avatars" element={<Avatars />} />
            <Route path="/badge" element={<Badges />} />
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/images" element={<Images />} />
            <Route path="/videos" element={<Videos />} />

            {/* Charts */}
            <Route path="/line-chart" element={<LineChart />} />
            <Route path="/bar-chart" element={<BarChart />} />
          </Route>

          {/* Auth Layout */}
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
