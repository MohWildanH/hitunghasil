
import { Route, Routes } from 'react-router-dom';
import { LoginForm } from './pages/auth/LoginPage/login';
import DashboardPage from './pages/dashboard/DashboardPage';
import './App.css'
import AturModal from './pages/atur-modal/aturModal';
import HitungPenghasilan from './pages/hitung-penghasilan/aturPenghasilan';
import LaporanModal from './pages/laporan-modal/laporan-modal';
import LaporanPenghasilan from './pages/laporan penghasilan/laporan-penghasilan';
import DetailCard from './pages/laporan-modal/DetailModal';
import DetailPenghasilan from './pages/laporan penghasilan/DetailPenghasilan';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginForm />} />
      <Route path='/dashboard' element={<DashboardPage />} />
      <Route path='/atur-modal' element={<AturModal />} />
      <Route path='/hitung-penghasilan' element={<HitungPenghasilan />} />
      <Route path='/laporan-modal' element={<LaporanModal />} />
      <Route path="/laporan-modal/:id" element={<DetailCard />} />
      <Route path='/laporan-penghasilan' element={<LaporanPenghasilan />} />
      <Route path="/laporan-penghasilan/:id" element={<DetailPenghasilan />} />

    </Routes>

  )
}

export default App
