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

interface ModalDetail {
    id: number;
    namaFile: string;
    createdAt: string;
    ModalBiosolars: any[];
    ModalPertalites: any[];
    ModalPertamaxes: any[];
    ModalDexlites: any[];
    ModalTurbos: any[];
}

const DetailCard = () => {
    const { id } = useParams();
    const [modalDetail, setModalDetail] = useState<ModalDetail | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchModalDetail = async () => {
            try {
                const response = await apiInstance.get(`/modal/${id}`);
                if (response.status === 200) {
                    setModalDetail(response.data.data);
                } else {
                    setError("Gagal mengambil data modal.");
                }
            } catch (error: any) {
                setError(error.message || "Terjadi kesalahan saat mengambil data modal.");
            } finally {
                setIsLoading(false);
            }
        };

        if (id) {
            fetchModalDetail();
        }
    }, [id]);

    if (isLoading) {
        return <p>Memuat data...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!modalDetail) {
        return <p>Modal tidak ditemukan.</p>;
    }

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
                                    <BreadcrumbLink href="/laporan-modal" >Laporan Modal</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="hidden md:block" />
                                <BreadcrumbItem>
                                    <BreadcrumbPage >Detail Modal</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </header>
                <div className="background">
                    <div className="p-6 bg-white shadow-lg rounded-lg">
                        <h2 className="text-3xl font-bold titelll">{modalDetail.namaFile}</h2>
                        <p className="text-sm text-gray-500 mt-2">
                            Dibuat pada:{" "}
                            <span className="font-medium">{new Date(modalDetail.createdAt).toLocaleDateString()}</span>
                        </p>

                        <div className="mt-5 space-y-5">
                            {/* Render similar to how you render details in ModalCard */}
                            {modalDetail.ModalBiosolars.length > 0 && (
                                <CategoryItem title="Biosolar" data={modalDetail.ModalBiosolars} />
                            )}
                            {modalDetail.ModalPertalites.length > 0 && (
                                <CategoryItem title="Pertalite" data={modalDetail.ModalPertalites} />
                            )}
                            {modalDetail.ModalPertamaxes.length > 0 && (
                                <CategoryItem title="Pertamax" data={modalDetail.ModalPertamaxes} />
                            )}
                            {modalDetail.ModalDexlites.length > 0 && (
                                <CategoryItem title="Dexlite" data={modalDetail.ModalDexlites} />
                            )}
                            {modalDetail.ModalTurbos.length > 0 && (
                                <CategoryItem title="Turbo" data={modalDetail.ModalTurbos} />
                            )}
                        </div>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
};

const CategoryItem: React.FC<{ title: string; data: any[] }> = ({ title, data }) => (
    <div className="category-container">
      <h3 className="category-title">{title}</h3>
      <ul className="category-list">
        {data.map((item, index) => (
          <li key={index} className="category-card">
            <div className="category-row">
              <span className="category-label">Harga:</span>
              <span className="category-value">
                {item.hargaBiosolar || item.hargaPertalite || item.hargaPertamax || item.hargaDexlite || item.hargaTurbo}
              </span>
            </div>
            <div className="category-row">
              <span className="category-label">Order:</span>
              <span className="category-value">
                {item.deliveryOrderBiosolar ||
                  item.deliveryOrderPertalite ||
                  item.delevieryOrderPertamax ||
                  item.deliveryOrderDexlite ||
                  item.deliveryOrderTurbo ||
                  "N/A"}
              </span>
            </div>
            <div className=" category-row keuntungan">
              <span className="category-label">Keuntungan:</span>
              <span className="category-value">
                {item.hasilPerhitunganBiosolar ||
                  item.hasilPerhitunganPertalite ||
                  item.hasilPerhitunganPertamax ||
                  item.hasilPerhitunganDexlite ||
                  item.hasilPerhitunganTurbo}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
  
  

export default DetailCard;
