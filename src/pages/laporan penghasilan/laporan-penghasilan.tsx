import { useEffect, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../components/ui/breadcrumb";
import { Separator } from "../../components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "../../components/ui/sidebar";
import { AppSidebar } from "../dashboard/app-sidebar";
import apiInstance from "../../api/api";
import PenghasilanCard from "./PenghasilanCard";
import image from "../../image";

interface Penghasilan {
  id: number;
  namaFile: string;
  namaPengeluaran: string;
  nominalPengeluaran: number;
  hasilTotal: number;
  createdAt: string;
  PenghasilanBiosolars: any[];
  PenghasilanDexlites: any[];
  PenghasilanPertalites: any[];
  PenghasilanPertamaxes: any[];
  PenghasilanTurbos: any[];
}

function LaporanPenghasilan() {
  const [penghasilan, setPenghasilan] = useState<Penghasilan[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPenghasilan = async () => {
      try {
        const response = await apiInstance.get("/penghasilan");
        if (response.status === 200) {
          setPenghasilan(response.data.data);
        } else {
          setError("Gagal mengambil data");
        }
      } catch (error: any) {
        setError(error.message || "Terjadi kesalahan saat mengambil data.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPenghasilan();
  }, []);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 items-center gap-2 border-b bg-white shadow-sm">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage style={{fontSize: "16px", fontWeight: "500"}}>Laporan Penghasilan</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-6 p-6 bg-gray-50">
          {isLoading && <p className="text-center text-gray-600">Memuat data...</p>}
          {error && <p className="text-center text-red-500">{error}</p>}

          {!isLoading && !error && penghasilan.length === 0 && (
            <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-3">
              <img
                src={image.notFound}
                alt="Tidak ada data"
                className="w-36 h-36 opacity-80"
              />
              <h2 className="text-lg font-semibold text-gray-700">Belum Ada Data</h2>
              <p className="text-sm text-gray-500">
                Tambahkan laporan penghasilan untuk mulai mengelola data.
              </p>
            </div>
          )}

          {/* Menampilkan data jika tersedia */}
          {!isLoading && !error && penghasilan.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {penghasilan.map((item) => (
                <PenghasilanCard key={item.id} data={item} />
              ))}
            </div>
          )}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default LaporanPenghasilan;
