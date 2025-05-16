import "./style.css";
import { FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import apiInstance from "../../api/api";
import { useState } from "react";

interface ModalCardProps {
  modal: {
    id: number;
    namaFile: string;
    createdAt: string;
    ModalBiosolars: any[];
    ModalPertalites: any[];
    ModalPertamaxes: any[];
    ModalDexlites: any[];
    ModalTurbos: any[];
  };
}

const ModalCard: React.FC<ModalCardProps> = ({ modal }) => {
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleDetailClick = () => {
    navigate(`/laporan-modal/${modal.id}`);
  };

  const handleDeleteClick = async () => {
    try {
      const response = await apiInstance.delete(`/modal/${modal.id}`);
      if (response.status === 200) {
        setShowConfirm(false);
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
          navigate("/laporan-modal");
        }, 2000);
        window.location.reload();
      }
    } catch (error) {
      console.error("Gagal menghapus modal:", error);
    }
  };

  return (
    <>
      <div className="relative overflow-hidden bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 group">
        <div className="absolute -top-5 -right-5 text-blue-100 group-hover:text-blue-200 opacity-20 text-8xl pointer-events-none">
          <FileText />
        </div>
        <div className="relative z-10">
          <h2 className="text-2xl font-bold text-gray-800">{modal.namaFile}</h2>
          <p className="text-sm text-gray-500 mt-1">
            Dibuat pada:{" "}
            <span className="text-gray-700 font-medium">
              {new Date(modal.createdAt).toLocaleDateString()}
            </span>
          </p>
          <div className="card-button-modal flex flex-row justify-between">
          <button
            onClick={handleDetailClick}
            className="justify-center w-1/2 button-detail mt-4 mr-2 flex items-center px-4 py-2 bg-gradient-to-r text-white text-sm font-medium rounded-full hover:scale-105 active:scale-95 transition-transform shadow-md"
          >
            Lihat Detail
          </button>

          <button
            onClick={() => setShowConfirm(true)}
            className="justify-center w-1/2 mt-4 flex items-center px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-full hover:scale-105 active:scale-95 transition-transform shadow-md"
          >
            Hapus
          </button>
        </div>
      </div>
      </div>

      {/* Modal Konfirmasi */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm w-full text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Konfirmasi Hapus
            </h3>
            <p className="text-gray-600 mb-6">
              Apakah Anda yakin ingin menghapus file <strong>{modal.namaFile}</strong>?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
              >
                Batal
              </button>
              <button
                onClick={handleDeleteClick}
                className="px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
              >
                Ya, Hapus
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Sukses */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl px-8 py-10 w-[90%] max-w-sm text-center animate-fade-in-up scale-95 transition-all duration-300 ease-out">
            {/* Icon centang */}
            <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-green-100">
              <svg
                className="w-10 h-10 text-green-600"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            {/* Text */}
            <h3 className="text-2xl font-bold text-green-700 mb-2">Berhasil!</h3>
            <p className="text-gray-600 text-sm">Data berhasil dihapus dari sistem.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalCard;
