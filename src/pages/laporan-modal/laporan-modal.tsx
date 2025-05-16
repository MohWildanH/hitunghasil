import "./style.css";
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
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../../components/ui/sidebar";
import { AppSidebar } from "../dashboard/app-sidebar";
import apiInstance from "../../api/api";
import ModalCard from "./ModalCard";
import image from "../../image";

interface Modal {
  id: number;
  namaFile: string;
  createdAt: string;
  ModalBiosolars: any[];
  ModalPertalites: any[];
  ModalPertamaxes: any[];
  ModalDexlites: any[];
  ModalTurbos: any[];
}

function LaporanModal() {
  const [laporanModal, setLaporanModal] = useState<Modal[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchModal = async () => {
      try {
        const response = await apiInstance.get("/modal");
        if (response.status === 200) {
          setLaporanModal(response.data.data);
        } else {
          setError("Gagal mengambil data");
        }
      } catch (error: any) {
        setError(error.message || "Terjadi kesalahan saat mengambil data.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchModal();
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
                  <BreadcrumbPage style={{fontSize: "16px", fontWeight: "500"}}>Laporan Modal</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="laporan-container">
  {!isLoading && !error && laporanModal.length > 0 ? (
    <div className="laporan-grid">
      {laporanModal.map((modal) => (
        <ModalCard key={modal.id} modal={modal} />
      ))}
    </div>
  ) : (
    <div className="laporan-empty">
      <img
        src={image.notFound}
        alt="Tidak ada data"
        className="laporan-empty-image"
      />
      <h2 className="laporan-empty-title">Belum Ada Data</h2>
      <p className="laporan-empty-subtitle">
        Tambahkan laporan modal untuk mulai mengelola data.
      </p>
    </div>
  )}
</div>


      </SidebarInset>
    </SidebarProvider>
  );
}

export default LaporanModal;
