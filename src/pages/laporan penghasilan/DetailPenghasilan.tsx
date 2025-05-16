import "./style.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiInstance from "../../api/api";
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

interface PenghasilanDetail {
    id: number;
    namaFile: string;
    createdAt: string;
    namaPengeluaran?: string;
    nominalPengeluaran?: number;
    hasilTotal?: number;
    PenghasilanBiosolars: any[];
    PenghasilanPertalites: any[];
    PenghasilanPertamaxes: any[];
    PenghasilanDexlites: any[];
    PenghasilanTurbos: any[];
}

const DetailPenghasilan = () => {
    const { id } = useParams();
    const [penghasilanDetail, setPenghasilanDetail] = useState<PenghasilanDetail | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPenghasilanDetail = async () => {
            try {
                const response = await apiInstance.get(`/penghasilan/${id}`);
                if (response.status === 200) {
                    setPenghasilanDetail(response.data.data);
                } else {
                    setError("Gagal mengambil data penghasilan.");
                }
            } catch (error: any) {
                setError(error.message || "Terjadi kesalahan saat mengambil data penghasilan.");
            } finally {
                setIsLoading(false);
            }
        };

        if (id) {
            fetchPenghasilanDetail();
        }
    }, [id]);

    if (isLoading) return <p>Memuat data...</p>;
    if (error) return <p>{error}</p>;
    if (!penghasilanDetail) return <p>Penghasilan tidak ditemukan.</p>;

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
                                <BreadcrumbItem className="hidden md:block">
                                    <BreadcrumbLink href="/laporan-penghasilan">Laporan Penghasilan</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="hidden md:block" />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Detail Penghasilan</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </header>
                <div className="flex flex-1 flex-col gap-6 p-6 bg-gray-50 boddy">
                    <div className="aaa">
                        <h2 className="text-3xl font-bold titelll">{penghasilanDetail.namaFile}</h2>
                        <p className="text-sm text-gray-500 mt-2">
                            Dibuat pada:{" "}
                            <span className="font-medium">{new Date(penghasilanDetail.createdAt).toLocaleDateString()}</span>
                        </p>

                        {penghasilanDetail.namaPengeluaran && (
                            <div className="mt-4 text-sm text-gray-700">
                                <p><span className="font-semibold">Pengeluaran:</span> {penghasilanDetail.namaPengeluaran}</p>
                                <p><span className="font-semibold">Nominal Pengeluaran:</span> Rp{penghasilanDetail.nominalPengeluaran?.toLocaleString()}</p>
                            </div>
                        )}

                        {penghasilanDetail.hasilTotal !== undefined && (
                            <p className="mt-2 text-sm font-semibold text-green-700">
                                Total Keuntungan: Rp{penghasilanDetail.hasilTotal.toLocaleString()}
                            </p>
                        )}
<div className="penghasilan-container">
  {penghasilanDetail.PenghasilanBiosolars.length > 0 && (
    <CategoryItem title="Biosolar" data={penghasilanDetail.PenghasilanBiosolars} />
  )}
  {penghasilanDetail.PenghasilanPertalites.length > 0 && (
    <CategoryItem title="Pertalite" data={penghasilanDetail.PenghasilanPertalites} />
  )}
  {penghasilanDetail.PenghasilanPertamaxes.length > 0 && (
    <CategoryItem title="Pertamax" data={penghasilanDetail.PenghasilanPertamaxes} />
  )}
  {penghasilanDetail.PenghasilanDexlites.length > 0 && (
    <CategoryItem title="Dexlite" data={penghasilanDetail.PenghasilanDexlites} />
  )}
  {penghasilanDetail.PenghasilanTurbos.length > 0 && (
    <CategoryItem title="Turbo" data={penghasilanDetail.PenghasilanTurbos} />
  )}
</div>
              </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
};

const CategoryItem: React.FC<{ title: string; data: any[] }> = ({ title, data }) => (
      <div className="penghasilan-card">
    <h3 className="penghasilan-title">{title}</h3>
    <ul className="penghasilan-list">
      {data.map((item, index) => (
        <li key={index} className="penghasilan-entry">
          <div className="penghasilan-row">
            <span className="penghasilan-label">Harga Jual:</span>
            <span className="penghasilan-value">
              {item.hargaJualBiosolar || item.hargaJualPertalite || item.hargaJualPertamax || item.hargaJualDexlite || item.hargaJualTurbo}
            </span>
          </div>
          <div className="penghasilan-row">
            <span className="penghasilan-label">Takaran Awal:</span>
            <span className="penghasilan-value">
              {item.takaranAwalBiosolar || item.takaranAwalPertalite || item.takaranAwalPertamax || item.takaranAwalDexlite || item.takaranAwalTurbo}
            </span>
          </div>
          <div className="penghasilan-row">
            <span className="penghasilan-label">Sisa:</span>
            <span className="penghasilan-value">
              {item.sisaBiosolar || item.sisaPertalite || item.sisaPertamax || item.sisaDexlite || item.sisaTurbo}
            </span>
          </div>
          <div className="penghasilan-row no-padding">
            <span className="penghasilan-label hasil">Hasil:</span>
            <span className="penghasilan-value">
              {item.hasilBiosolar || item.hasilPertalite || item.hasilPertamax || item.hasilDexlite || item.hasilTurbo}
            </span>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default DetailPenghasilan;
