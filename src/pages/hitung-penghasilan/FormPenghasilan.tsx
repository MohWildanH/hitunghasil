"use client";

import "./FormPenghasilan.css";
import { RiCalculatorFill, RiSaveFill } from "@remixicon/react";
import "remixicon/fonts/remixicon.css";
import { useForm, Controller } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import apiInstance from "../../api/api";

// Schema validation using zod
const formSchema = z.object({
  namaFile: z.string().min(1, "Nama file wajib diisi"),
  hargaJualPertalite: z
    .number()
    .positive("Harga jual harus berupa angka positif")
    .min(1, "Harga jual wajib diisi"),
  takaranAwalPertalite: z
    .number()
    .positive("Takaran awal harus berupa angka positif")
    .min(1, "Takaran awal wajib diisi"),
  takaranAkhir1Pertalite: z
    .number()
    .positive("Takaran akhir 1 harus berupa angka positif")
    .optional(),
  takaranAkhir2Pertalite: z
    .number()
    .positive("Takaran akhir 2 harus berupa angka positif")
    .optional(),
  takaranAkhir3Pertalite: z
    .number()
    .positive("Takaran akhir 3 harus berupa angka positif")
    .optional(),
  takaranAkhir4Pertalite: z
    .number()
    .positive("Takaran akhir 4 harus berupa angka positif")
    .optional(),
  takaranAkhir5Pertalite: z
    .number()
    .positive("Takaran akhir 5 harus berupa angka positif")
    .optional(),
  takaranAkhir6Pertalite: z
    .number()
    .positive("Takaran akhir 6 harus berupa angka positif")
    .optional(),
  takaranAkhir7Pertalite: z
    .number()
    .positive("Takaran akhir 7 harus berupa angka positif")
    .optional(),
  hargaJualPertamax: z
    .number()
    .positive("Harga jual harus berupa angka positif")
    .min(1, "Harga jual wajib diisi"),
  takaranAwalPertamax: z
    .number()
    .positive("Takaran awal harus berupa angka positif")
    .min(1, "Takaran awal wajib diisi"),
  takaranAkhir1Pertamax: z
    .number()
    .positive("Takaran akhir 1 harus berupa angka positif")
    .optional(),
  takaranAkhir2Pertamax: z
    .number()
    .positive("Takaran akhir 2 harus berupa angka positif")
    .optional(),
  takaranAkhir3Pertamax: z
    .number()
    .positive("Takaran akhir 3 harus berupa angka positif")
    .optional(),
  takaranAkhir4Pertamax: z
    .number()
    .positive("Takaran akhir 4 harus berupa angka positif")
    .optional(),
  takaranAkhir5Pertamax: z
    .number()
    .positive("Takaran akhir 5 harus berupa angka positif")
    .optional(),
  hargaJualDexlite: z
    .number()
    .positive("Harga jual harus berupa angka positif")
    .min(1, "Harga jual wajib diisi"),
  takaranAwalDexlite: z
    .number()
    .positive("Takaran awal harus berupa angka positif")
    .min(1, "Takaran awal wajib diisi"),
  takaranAkhir1Dexlite: z
    .number()
    .positive("Takaran akhir 1 harus berupa angka positif")
    .optional(),
  hargaJualBiosolar: z
    .number()
    .positive("Harga jual harus berupa angka positif")
    .min(1, "Harga jual wajib diisi"),
  takaranAwalBiosolar: z
    .number()
    .positive("Takaran awal harus berupa angka positif")
    .min(1, "Takaran awal wajib diisi"),
  takaranAkhir1Biosolar: z
    .number()
    .positive("Takaran akhir 1 harus berupa angka positif")
    .optional(),
  takaranAkhir2Biosolar: z
    .number()
    .positive("Takaran akhir 2 harus berupa angka positif")
    .optional(),
  hargaJualTurbo: z
    .number()
    .positive("Harga jual harus berupa angka positif")
    .min(1, "Harga jual wajib diisi"),
  takaranAwalTurbo: z
    .number()
    .positive("Takaran awal harus berupa angka positif")
    .min(1, "Takaran awal wajib diisi"),
  takaranAkhir1Turbo: z
    .number()
    .positive("Takaran akhir 1 harus berupa angka positif")
    .optional(),
  pengeluaran: z
    .array(
      z.object({
        nama: z
          .string()
          .min(1, { message: "Nama Pengeluaran tidak boleh kosong" }),
        nominal: z
          .number()
          .min(1, { message: "Nominal harus lebih besar dari 0" }),
      })
    )
    .min(1, "Setidaknya ada satu pengeluaran"),
});

type FormValues = z.infer<typeof formSchema>;

function TakaranInput({
  name,
  label,
  value,
  onChange,
  formControl,
}: {
  name: keyof FormValues;
  label: string;
  value: number | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formControl: any;
  className?: string;
}) {
  return (
    <FormField
      control={formControl}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              type="number"
              placeholder={label}
              step="1"
              {...field}
              value={value || ""}
              onChange={onChange}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

function PenghitungPenghasilan() {
  const [hargaJualPertalite, setHargaJualPertalite] = useState<number>(0);
  const [takaranAwalPertalite, setTakaranAwalPertalite] = useState<number>(0);
  const [takaranAkhir1Pertalite, setTakaranAkhir1Pertalite] =
    useState<number>(0);
  const [takaranAkhir2Pertalite, setTakaranAkhir2Pertalite] =
    useState<number>(0);
  const [takaranAkhir3Pertalite, setTakaranAkhir3Pertalite] =
    useState<number>(0);
  const [takaranAkhir4Pertalite, setTakaranAkhir4Pertalite] =
    useState<number>(0);
  const [takaranAkhir5Pertalite, setTakaranAkhir5Pertalite] =
    useState<number>(0);
  const [takaranAkhir6Pertalite, setTakaranAkhir6Pertalite] =
    useState<number>(0);
  const [takaranAkhir7Pertalite, setTakaranAkhir7Pertalite] =
    useState<number>(0);
  const [hargaJualPertamax, setHargaJualPertamax] = useState<number>(0);
  const [takaranAwalPertamax, setTakaranAwalPertamax] = useState<number>(0);
  const [takaranAkhir1Pertamax, setTakaranAkhir1Pertamax] = useState<number>(0);
  const [takaranAkhir2Pertamax, setTakaranAkhir2Pertamax] = useState<number>(0);
  const [takaranAkhir3Pertamax, setTakaranAkhir3Pertamax] = useState<number>(0);
  const [takaranAkhir4Pertamax, setTakaranAkhir4Pertamax] = useState<number>(0);
  const [takaranAkhir5Pertamax, setTakaranAkhir5Pertamax] = useState<number>(0);
  const [hargaJualDexlite, setHargaJualDexlite] = useState<number>(0);
  const [takaranAwalDexlite, setTakaranAwalDexlite] = useState<number>(0);
  const [takaranAkhir1Dexlite, setTakaranAkhir1Dexlite] = useState<number>(0);
  const [hargaJualBiosolar, setHargaJualBiosolar] = useState<number>(0);
  const [takaranAwalBiosolar, setTakaranAwalBiosolar] = useState<number>(0);
  const [takaranAkhir1Biosolar, setTakaranAkhir1Biosolar] = useState<number>(0);
  const [takaranAkhir2Biosolar, setTakaranAkhir2Biosolar] = useState<number>(0);
  const [hargaJualTurbo, setHargaJualTurbo] = useState<number>(0);
  const [takaranAwalTurbo, setTakaranAwalTurbo] = useState<number>(0);
  const [takaranAkhir1Turbo, setTakaranAkhir1Turbo] = useState<number>(0);
  const [hasilPertalite, setHasilPertalite] = useState<number | null>(null);
  const [sisaPertalite, setSisaPertalite] = useState<number | null>(null);
  const [hasilPertamax, setHasilPertamax] = useState<number | null>(null);
  const [sisaPertamax, setSisaPertamax] = useState<number | null>(null);
  const [hasilDexlite, setHasilDexlite] = useState<number | null>(null);
  const [sisaDexlite, setSisaDexlite] = useState<number | null>(null);
  const [hasilBiosolar, setHasilBiosolar] = useState<number | null>(null);
  const [sisaBiosolar, setSisaBiosolar] = useState<number | null>(null);
  const [hasilTurbo, setHasilTurbo] = useState<number | null>(null);
  const [sisaTurbo, setSisaTurbo] = useState<number | null>(null);
  const [totalHasilAkhir, setTotalHasilAkhir] = useState<number | null>(null);

  const [pengeluaranList, setPengeluaranList] = useState<
    { nama: string; nominal?: number }[]
  >([{ nama: "", nominal: undefined }]);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      hargaJualPertalite,
      takaranAwalPertalite,
      takaranAkhir1Pertalite,
      takaranAkhir2Pertalite,
      takaranAkhir3Pertalite,
      takaranAkhir4Pertalite,
      takaranAkhir5Pertalite,
      takaranAkhir6Pertalite,
      takaranAkhir7Pertalite,
      hargaJualPertamax,
      takaranAwalPertamax,
      takaranAkhir1Pertamax,
      takaranAkhir2Pertamax,
      takaranAkhir3Pertamax,
      takaranAkhir4Pertamax,
      takaranAkhir5Pertamax,
      hargaJualDexlite,
      takaranAwalDexlite,
      takaranAkhir1Dexlite,
      hargaJualBiosolar,
      takaranAwalBiosolar,
      takaranAkhir1Biosolar,
      takaranAkhir2Biosolar,
      hargaJualTurbo,
      takaranAwalTurbo,
      takaranAkhir1Turbo,
      pengeluaran: pengeluaranList,
    },
  });

  useEffect(() => {
    form.setValue("hargaJualPertalite", hargaJualPertalite);
    form.setValue("takaranAwalPertalite", takaranAwalPertalite);
    form.setValue("takaranAkhir1Pertalite", takaranAkhir1Pertalite);
    form.setValue("takaranAkhir2Pertalite", takaranAkhir2Pertalite);
    form.setValue("takaranAkhir3Pertalite", takaranAkhir3Pertalite);
    form.setValue("takaranAkhir4Pertalite", takaranAkhir4Pertalite);
    form.setValue("takaranAkhir5Pertalite", takaranAkhir5Pertalite);
    form.setValue("takaranAkhir6Pertalite", takaranAkhir6Pertalite);
    form.setValue("takaranAkhir7Pertalite", takaranAkhir7Pertalite);
    form.setValue("hargaJualPertamax", hargaJualPertamax);
    form.setValue("takaranAwalPertamax", takaranAwalPertamax);
    form.setValue("takaranAkhir1Pertamax", takaranAkhir1Pertamax);
    form.setValue("takaranAkhir2Pertamax", takaranAkhir2Pertamax);
    form.setValue("takaranAkhir3Pertamax", takaranAkhir3Pertamax);
    form.setValue("takaranAkhir4Pertamax", takaranAkhir4Pertamax);
    form.setValue("takaranAkhir5Pertamax", takaranAkhir5Pertamax);
    form.setValue("hargaJualDexlite", hargaJualDexlite);
    form.setValue("takaranAwalDexlite", takaranAwalDexlite);
    form.setValue("takaranAkhir1Dexlite", takaranAkhir1Dexlite);
    form.setValue("hargaJualBiosolar", hargaJualBiosolar);
    form.setValue("takaranAwalBiosolar", takaranAwalBiosolar);
    form.setValue("takaranAkhir1Biosolar", takaranAkhir1Biosolar);
    form.setValue("takaranAkhir2Biosolar", takaranAkhir2Biosolar);
    form.setValue("hargaJualTurbo", hargaJualTurbo);
    form.setValue("takaranAwalTurbo", takaranAwalTurbo);
    form.setValue("takaranAkhir1Turbo", takaranAkhir1Turbo);
    form.setValue(
      "pengeluaran",
      pengeluaranList.map((item) => ({
        ...item,
        nominal: item.nominal ?? 0, // Set default value to 0 if undefined
      }))
    );
  }, [
    hargaJualPertalite,
    takaranAwalPertalite,
    takaranAkhir1Pertalite,
    takaranAkhir2Pertalite,
    takaranAkhir3Pertalite,
    takaranAkhir4Pertalite,
    takaranAkhir5Pertalite,
    takaranAkhir6Pertalite,
    takaranAkhir7Pertalite,
    hargaJualPertamax,
    takaranAwalPertamax,
    takaranAkhir1Pertamax,
    takaranAkhir2Pertamax,
    takaranAkhir3Pertamax,
    takaranAkhir4Pertamax,
    takaranAkhir5Pertamax,
    hargaJualDexlite,
    takaranAwalDexlite,
    takaranAkhir1Dexlite,
    hargaJualBiosolar,
    takaranAwalBiosolar,
    takaranAkhir1Biosolar,
    takaranAkhir2Biosolar,
    hargaJualTurbo,
    takaranAwalTurbo,
    takaranAkhir1Turbo,
    pengeluaranList,
    form,
  ]);

  const handleCalculate = (values: FormValues, _type: string) => {
    const hargaJualPertalite = Number(values.hargaJualPertalite);
    const takaranAwalPertalite = Number(values.takaranAwalPertalite);
    const takaranAkhir1Pertalite = Number(values.takaranAkhir1Pertalite);
    const takaranAkhir2Pertalite = Number(values.takaranAkhir2Pertalite);
    const takaranAkhir3Pertalite = Number(values.takaranAkhir3Pertalite);
    const takaranAkhir4Pertalite = Number(values.takaranAkhir4Pertalite);
    const takaranAkhir5Pertalite = Number(values.takaranAkhir5Pertalite);
    const takaranAkhir6Pertalite = Number(values.takaranAkhir6Pertalite);
    const takaranAkhir7Pertalite = Number(values.takaranAkhir7Pertalite);
    const hargaJualPertamax = Number(values.hargaJualPertamax);
    const takaranAwalPertamax = Number(values.takaranAwalPertamax);
    const takaranAkhir1Pertamax = Number(values.takaranAkhir1Pertamax);
    const takaranAkhir2Pertamax = Number(values.takaranAkhir2Pertamax);
    const takaranAkhir3Pertamax = Number(values.takaranAkhir3Pertamax);
    const takaranAkhir4Pertamax = Number(values.takaranAkhir4Pertamax);
    const takaranAkhir5Pertamax = Number(values.takaranAkhir5Pertamax);
    const hargaJualDexlite = Number(values.hargaJualDexlite);
    const takaranAwalDexlite = Number(values.takaranAwalDexlite);
    const takaranAkhir1Dexlite = Number(values.takaranAkhir1Dexlite);
    const hargaJualBiosolar = Number(values.hargaJualBiosolar);
    const takaranAwalBiosolar = Number(values.takaranAwalBiosolar);
    const takaranAkhir1Biosolar = Number(values.takaranAkhir1Biosolar);
    const takaranAkhir2Biosolar = Number(values.takaranAkhir2Biosolar);
    const hargaJualTurbo = Number(values.hargaJualTurbo);
    const takaranAwalTurbo = Number(values.takaranAwalTurbo);
    const takaranAkhir1Turbo = Number(values.takaranAkhir1Turbo);

    if (
      isNaN(hargaJualPertalite) ||
      isNaN(takaranAwalPertalite) ||
      isNaN(takaranAkhir1Pertalite) ||
      isNaN(takaranAkhir2Pertalite) ||
      isNaN(takaranAkhir3Pertalite) ||
      isNaN(takaranAkhir4Pertalite) ||
      isNaN(takaranAkhir5Pertalite) ||
      isNaN(takaranAkhir6Pertalite) ||
      isNaN(takaranAkhir7Pertalite) ||
      isNaN(hargaJualPertamax) ||
      isNaN(takaranAwalPertamax) ||
      isNaN(takaranAkhir1Pertamax) ||
      isNaN(takaranAkhir2Pertamax) ||
      isNaN(takaranAkhir3Pertamax) ||
      isNaN(takaranAkhir4Pertamax) ||
      isNaN(takaranAkhir5Pertamax) ||
      isNaN(hargaJualDexlite) ||
      isNaN(takaranAwalDexlite) ||
      isNaN(takaranAkhir1Dexlite) ||
      isNaN(hargaJualBiosolar) ||
      isNaN(takaranAwalBiosolar) ||
      isNaN(takaranAkhir1Biosolar) ||
      isNaN(takaranAkhir2Biosolar) ||
      isNaN(hargaJualTurbo) ||
      isNaN(takaranAwalTurbo) ||
      isNaN(takaranAkhir1Turbo)
    ) {
      console.error("Invalid input values.");
      return;
    }

    const totalTakaranAkhirPertalite =
      takaranAkhir1Pertalite +
      takaranAkhir2Pertalite +
      takaranAkhir3Pertalite +
      takaranAkhir4Pertalite +
      takaranAkhir5Pertalite +
      takaranAkhir6Pertalite +
      takaranAkhir7Pertalite;
    const sisaPertalite = takaranAwalPertalite - totalTakaranAkhirPertalite;
    setSisaPertalite(sisaPertalite);
    const resultpertalite = hargaJualPertalite * totalTakaranAkhirPertalite;
    setHasilPertalite(resultpertalite);

    const totalTakaranAkhirPertamax =
      takaranAwalPertamax -
      takaranAkhir1Pertamax -
      takaranAkhir2Pertamax -
      takaranAkhir3Pertamax -
      takaranAkhir4Pertamax -
      takaranAkhir5Pertamax;
    setSisaPertamax(totalTakaranAkhirPertamax);
    const resultpertamax = hargaJualPertamax * totalTakaranAkhirPertamax;
    setHasilPertamax(resultpertamax);

    const totalTakaranAkhirDexlite = takaranAwalDexlite - takaranAkhir1Dexlite;
    setSisaDexlite(totalTakaranAkhirDexlite);
    const resultdexlite = hargaJualDexlite * totalTakaranAkhirDexlite;
    setHasilDexlite(resultdexlite);

    const totalTakaranAkhirBiosolar =
      takaranAwalBiosolar - takaranAkhir1Biosolar - takaranAkhir2Biosolar;
    setSisaBiosolar(totalTakaranAkhirBiosolar);
    const resultbiosolar = hargaJualBiosolar * totalTakaranAkhirBiosolar;
    setHasilBiosolar(resultbiosolar);

    const totalTakaranAkhirTurbo = takaranAwalTurbo - takaranAkhir1Turbo;
    setSisaTurbo(totalTakaranAkhirTurbo);
    const resultturbo = hargaJualTurbo * totalTakaranAkhirTurbo;
    setHasilTurbo(resultturbo);

    const totalHasilBahanBakar =
      resultpertalite +
      resultpertamax +
      resultdexlite +
      resultbiosolar +
      resultturbo;

    const totalPengeluaran = pengeluaranList.reduce((acc, pengeluaran) => {
      return acc + (pengeluaran.nominal ?? 0);
    }, 0);

    const totalHasilAkhir = totalHasilBahanBakar - totalPengeluaran;
    setTotalHasilAkhir(totalHasilAkhir);
  };
  const handleAddPengeluaran = () => {
    setPengeluaranList((prev) => [...prev, { nama: "", nominal: undefined }]);
  };
  const handleRemovePengeluaran = (index: number) => {
    setPengeluaranList((prev) => prev.filter((_, idx) => idx !== index));
  };

  // const formatRupiah = (value: number | null) => {
  //   if (value === null) return ""
  //   return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(value)
  // }

  const handleSave = async (values: FormValues) => {
    const namaPengeluaran =
      values.pengeluaran.length > 0
        ? values.pengeluaran[0].nama // Gunakan nama pengeluaran pertama
        : "";
    const requestData = {
      id_user: 14,
      namaFile: values.namaFile,
      hasilPertalite: hasilPertalite,
      hasilPertamax: hasilPertamax,
      hasilDexlite: hasilDexlite,
      hasilTurbo: hasilTurbo,
      hasilBiosolar: hasilBiosolar,
      hasilKeseluruhan: totalHasilAkhir,
      namaPengeluaran: namaPengeluaran, // Kirim nama pengeluaran pertama sebagai string
      nominalPengeluaran: values.pengeluaran.reduce(
        (sum, item) => sum + item.nominal,
        0
      ), // Misalnya jumlahkan nominal pengeluaran
      hasilTotal: totalHasilAkhir,
      pertalite: [
        {
          hargaJualPertalite: values.hargaJualPertalite,
          takaranAwalPertalite: values.takaranAwalPertalite,
          takaranAkhir1Pertalite: values.takaranAkhir1Pertalite,
          takaranAkhir2Pertalite: values.takaranAkhir2Pertalite,
          takaranAkhir3Pertalite: values.takaranAkhir3Pertalite,
          takaranAkhir4Pertalite: values.takaranAkhir4Pertalite,
          takaranAkhir5Pertalite: values.takaranAkhir5Pertalite,
          takaranAkhir6Pertalite: values.takaranAkhir6Pertalite,
          takaranAkhir7Pertalite: values.takaranAkhir7Pertalite,
          sisaPertalite: sisaPertalite,
          hasilPertalite: hasilPertalite,
        },
      ],
      pertamax: [
        {
          hargaJualPertamax: values.hargaJualPertamax,
          takaranAwalPertamax: values.takaranAwalPertamax,
          takaranAkhir1Pertamax: values.takaranAkhir1Pertamax,
          takaranAkhir2Pertamax: values.takaranAkhir2Pertamax,
          takaranAkhir3Pertamax: values.takaranAkhir3Pertamax,
          takaranAkhir4Pertamax: values.takaranAkhir4Pertamax,
          takaranAkhir5Pertamax: values.takaranAkhir5Pertamax,
          sisaPertamax: sisaPertamax,
          hasilPertamax: hasilPertamax,
        },
      ],
      dexlite: [
        {
          hargaJualDexlite: values.hargaJualDexlite,
          takaranAwalDexlite: values.takaranAwalDexlite,
          takaranAkhirDexlite: values.takaranAkhir1Dexlite,
          sisaDexlite: sisaDexlite,
          hasilDexlite: hasilDexlite,
        },
      ],
      turbo: [
        {
          hargaJualTurbo: values.hargaJualTurbo,
          takaranAwalTurbo: values.takaranAwalTurbo,
          takaranAkhirTurbo: values.takaranAkhir1Turbo,
          sisaTurbo: sisaTurbo,
          hasilTurbo: hasilTurbo,
        },
      ],
      biosolar: [
        {
          hargaJualBiosolar: values.hargaJualBiosolar,
          takaranAwalBiosolar: values.takaranAwalBiosolar,
          takaranAkhirBiosolar: values.takaranAkhir1Biosolar,
          sisaBiosolar: sisaBiosolar,
          hasilBiosolar: hasilBiosolar,
        },
      ],
    };

    try {
      const response = await apiInstance.post(
        "/penghasilan/create",
        requestData
      );
      console.log("Data berhasil disimpan:", response.data);
      // Tindakan setelah berhasil, seperti mengupdate UI atau memberikan notifikasi
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
      // Tindakan jika terjadi error
    }
  };
  return (
    <div className="space-y-8 hasil">
      <div className="card p-6">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((values) =>
              handleCalculate(values, "namaFile")
            )}
            className="space-y-6"
          >
            <FormField
              control={form.control}
              name="namaFile"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama File</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Nama File"
                      className="custom-input"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
      <div className="card p-6">
        <h2 className="text-xl font-bold">Penghasilan Pertalite</h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((values) =>
              handleCalculate(values, "pertalite")
            )}
          >
            {/* Input Harga Jual Pertalite */}
            <FormField
              control={form.control}
              name="hargaJualPertalite"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Harga Jual Pertalite</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Harga Jual Pertalite"
                      className="custom-input"
                      step="1"
                      {...field}
                      value={field.value || ""}
                      onChange={(e) =>
                        setHargaJualPertalite(Number(e.target.value) || 0)
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Input Takaran Awal */}
            <FormField
              control={form.control}
              name="takaranAwalPertalite"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Takaran Awal (Liter)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Takaran Awal Pertalite"
                      className="custom-input"
                      step="1"
                      {...field}
                      value={field.value || ""}
                      onChange={(e) =>
                        setTakaranAwalPertalite(Number(e.target.value) || 0)
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Input Takaran Akhir */}
            <FormItem>
              <FormLabel>Takaran Akhir Pertalite 1</FormLabel>
              <FormControl>
                <Input
                  className="custom-input"
                  type="number"
                  step="1"
                  placeholder="Takaran Akhir Pertalite 1 kontol (Liter)"
                  value={takaranAkhir1Pertalite}
                  onChange={(e) =>
                    setTakaranAkhir1Pertalite(Number(e.target.value) || 0)
                  }
                />
              </FormControl>
            </FormItem>
            <FormItem>
              <FormLabel>Takaran Akhir Pertalite 2</FormLabel>
              <FormControl>
                <Input
                  className="custom-input"
                  type="number"
                  step="1"
                  placeholder="Takaran Akhir Pertalite 2 (Liter)"
                  value={takaranAkhir2Pertalite}
                  onChange={(e) =>
                    setTakaranAkhir2Pertalite(Number(e.target.value) || 0)
                  }
                />
              </FormControl>
            </FormItem>
            <FormItem>
              <FormLabel>Takaran Akhir Pertalite 3</FormLabel>
              <FormControl>
                <Input
                  className="custom-input"
                  type="number"
                  step="1"
                  placeholder="Takaran Akhir Pertalite 3 (Liter)"
                  value={takaranAkhir3Pertalite}
                  onChange={(e) =>
                    setTakaranAkhir3Pertalite(Number(e.target.value) || 0)
                  }
                />
              </FormControl>
            </FormItem>
            <FormItem>
              <FormLabel>Takaran Akhir Pertalite 4</FormLabel>
              <FormControl>
                <Input
                  className="custom-input"
                  type="number"
                  step="1"
                  placeholder="Takaran Akhir Pertalite 4 (Liter)"
                  value={takaranAkhir4Pertalite}
                  onChange={(e) =>
                    setTakaranAkhir4Pertalite(Number(e.target.value) || 0)
                  }
                />
              </FormControl>
            </FormItem>
            <FormItem>
              <FormLabel>Takaran Akhir Pertalite 5</FormLabel>
              <FormControl>
                <Input
                  className="custom-input"
                  type="number"
                  step="1"
                  placeholder="Takaran Akhir Pertalite 5 (Liter)"
                  value={takaranAkhir5Pertalite}
                  onChange={(e) =>
                    setTakaranAkhir5Pertalite(Number(e.target.value) || 0)
                  }
                />
              </FormControl>
            </FormItem>
            <FormItem>
              <FormLabel>Takaran Akhir Pertalite 6</FormLabel>
              <FormControl>
                <Input
                  className="custom-input"
                  type="number"
                  step="1"
                  placeholder="Takaran Akhir Pertalite 6 (Liter)"
                  value={takaranAkhir6Pertalite}
                  onChange={(e) =>
                    setTakaranAkhir6Pertalite(Number(e.target.value) || 0)
                  }
                />
              </FormControl>
            </FormItem>
            <FormItem>
              <FormLabel>Takaran Akhir Pertalite 7</FormLabel>
              <FormControl>
                <Input
                  className="custom-input"
                  type="number"
                  step="1"
                  placeholder="Takaran Akhir Pertalite 7 (Liter)"
                  value={takaranAkhir7Pertalite}
                  onChange={(e) =>
                    setTakaranAkhir7Pertalite(Number(e.target.value) || 0)
                  }
                />
              </FormControl>
            </FormItem>
            <FormItem>
              <FormLabel>Sisa Pertalite yang tersedia</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  value={sisaPertalite ?? ""}
                  disabled
                  className="custom-input"
                  placeholder="Sisa Pertalite yang tersedia"
                />
              </FormControl>
            </FormItem>
            <FormItem>
              <FormLabel>Hasil Perhitungan</FormLabel>
              <FormControl>
                <Input
                  className="custom-input"
                  type="number"
                  value={hasilPertalite ?? ""}
                  disabled
                  placeholder="Hasil Perhitungan"
                />
              </FormControl>
            </FormItem>
          </form>
        </Form>
      </div>
      <div className="card p-6">
        <h2 className="text-xl font-bold">Penghasilan Pertamax</h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((values) =>
              handleCalculate(values, "pertamax")
            )}
          >
            <FormField
              control={form.control}
              name="hargaJualPertamax"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Harga Jual Pertamax</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Harga Jual Pertamax"
                      className="custom-input"
                      step="1"
                      {...field}
                      value={field.value || ""}
                      onChange={(e) =>
                        setHargaJualPertamax(Number(e.target.value) || 0)
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Input Takaran Awal */}
            <FormField
              control={form.control}
              name="takaranAwalPertamax"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Takaran Awal (Liter)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Takaran Awal Pertamax"
                      className="custom-input"
                      step="1"
                      {...field}
                      value={field.value || ""}
                      onChange={(e) =>
                        setTakaranAwalPertamax(Number(e.target.value) || 0)
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Input Takaran Akhir */}
            <FormItem>
              <FormLabel>Takaran Akhir Pertamax 1</FormLabel>
              <FormControl>
                <Input
                  className="custom-input"
                  type="number"
                  step="1"
                  placeholder="Takaran Akhir Pertamax (Liter)"
                  value={takaranAkhir1Pertamax}
                  onChange={(e) =>
                    setTakaranAkhir1Pertamax(Number(e.target.value) || 0)
                  }
                />
              </FormControl>
            </FormItem>
            <FormItem>
              <FormLabel>Takaran Akhir Pertamax 2</FormLabel>
              <FormControl>
                <Input
                  className="custom-input"
                  type="number"
                  step="1"
                  placeholder="Takaran Akhir Pertamax 2 (Liter)"
                  value={takaranAkhir2Pertamax}
                  onChange={(e) =>
                    setTakaranAkhir2Pertamax(Number(e.target.value) || 0)
                  }
                />
              </FormControl>
            </FormItem>
            <FormItem>
              <FormLabel>Takaran Akhir Pertamax 3</FormLabel>
              <FormControl>
                <Input
                  className="custom-input"
                  type="number"
                  step="1"
                  placeholder="Takaran Akhir Pertamax 3 (Liter)"
                  value={takaranAkhir3Pertamax}
                  onChange={(e) =>
                    setTakaranAkhir3Pertamax(Number(e.target.value) || 0)
                  }
                />
              </FormControl>
            </FormItem>
            <FormItem>
              <FormLabel>Takaran Akhir Pertamax 4</FormLabel>
              <FormControl>
                <Input
                  className="custom-input"
                  type="number"
                  step="1"
                  placeholder="Takaran Akhir Pertamax 4 (Liter)"
                  value={takaranAkhir2Pertamax}
                  onChange={(e) =>
                    setTakaranAkhir4Pertamax(Number(e.target.value) || 0)
                  }
                />
              </FormControl>
            </FormItem>
            <FormItem>
              <FormLabel>Takaran Akhir Pertamax 2</FormLabel>
              <FormControl>
                <Input
                  className="custom-input"
                  type="number"
                  step="1"
                  placeholder="Takaran Akhir Pertamax 2 (Liter)"
                  value={takaranAkhir2Pertamax}
                  onChange={(e) =>
                    setTakaranAkhir2Pertamax(Number(e.target.value) || 0)
                  }
                />
              </FormControl>
            </FormItem>
            <FormItem>
              <FormLabel>Takaran Akhir Pertamax 5</FormLabel>
              <FormControl>
                <Input
                  className="custom-input"
                  type="number"
                  step="1"
                  placeholder="Takaran Akhir Pertamax 5 (Liter)"
                  value={takaranAkhir5Pertamax}
                  onChange={(e) =>
                    setTakaranAkhir5Pertamax(Number(e.target.value) || 0)
                  }
                />
              </FormControl>
            </FormItem>
            <FormItem>
              <FormLabel>Sisa Pertamax yang tersedia</FormLabel>
              <FormControl>
                <Input
                  className="custom-input"
                  type="number"
                  value={sisaPertamax ?? ""}
                  disabled
                  placeholder="Sisa Pertamax yang tersedia"
                />
              </FormControl>
            </FormItem>
            <FormItem>
              <FormLabel>Hasil Perhitungan</FormLabel>
              <FormControl>
                <Input
                  className="custom-input"
                  type="number"
                  value={hasilPertamax ?? ""}
                  disabled
                  placeholder="Hasil Perhitungan Pertamax"
                />
              </FormControl>
            </FormItem>
          </form>
        </Form>
      </div>
      <div className="card p-6">
        <h2 className="text-xl font-bold">Penghasilan Dexlite</h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((values) =>
              handleCalculate(values, "dexlite")
            )}
          >
            {/* Input Harga Jual Pertalite */}
            <FormField
              control={form.control}
              name="hargaJualDexlite"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Harga Jual Dexlite</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Harga Jual Dexlite"
                      className="custom-input"
                      step="1"
                      {...field}
                      value={field.value || ""}
                      onChange={(e) =>
                        setHargaJualDexlite(Number(e.target.value) || 0)
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Input Takaran Awal */}
            <FormField
              control={form.control}
              name="takaranAwalDexlite"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Takaran Awal (Liter)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Takaran Awal Dexlite"
                      className="custom-input"
                      step="1"
                      {...field}
                      value={field.value || ""}
                      onChange={(e) =>
                        setTakaranAwalDexlite(Number(e.target.value) || 0)
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Input Takaran Akhir */}
            <FormItem>
              <FormLabel>Takaran Akhir Dexlite </FormLabel>
              <FormControl>
                <Input
                  className="custom-input"
                  type="number"
                  step="1"
                  placeholder="Takaran Akhir Dexlite (Liter)"
                  value={takaranAkhir1Dexlite}
                  onChange={(e) =>
                    setTakaranAkhir1Dexlite(Number(e.target.value) || 0)
                  }
                />
              </FormControl>
            </FormItem>
            <FormItem>
              <FormLabel>Sisa Dexlite yang tersedia</FormLabel>
              <FormControl className="custom-input">
                <Input
                  type="number"
                  value={sisaDexlite ?? ""}
                  disabled
                  placeholder="Sisa Dexlite yang tersedia"
                />
              </FormControl>
            </FormItem>
            <FormItem>
              <FormLabel>Hasil Perhitungan</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  className="custom-input"
                  value={hasilDexlite ?? ""}
                  disabled
                  placeholder="Hasil Perhitungan Dexlite"
                />
              </FormControl>
            </FormItem>
          </form>
        </Form>
      </div>
      <div className="card p-6">
        <h2 className="text-xl font-bold">Penghasilan Biosolar</h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((values) =>
              handleCalculate(values, "biosolar")
            )}
          >
            <FormField
              control={form.control}
              name="hargaJualBiosolar"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Harga Jual Biosolar</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      className="custom-input"
                      placeholder="Harga Jual Biosolar"
                      step="1"
                      {...field}
                      value={field.value || ""}
                      onChange={(e) =>
                        setHargaJualBiosolar(Number(e.target.value) || 0)
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Input Takaran Awal */}
            <FormField
              control={form.control}
              name="takaranAwalBiosolar"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Takaran Awal (Liter)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Takaran Awal Biosolar"
                      className="custom-input"
                      step="1"
                      {...field}
                      value={field.value || ""}
                      onChange={(e) =>
                        setTakaranAwalBiosolar(Number(e.target.value) || 0)
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Input Takaran Akhir */}
            <FormItem>
              <FormLabel>Takaran Akhir Biosolar 1</FormLabel>
              <FormControl>
                <Input
                  className="custom-input"
                  type="number"
                  step="1"
                  placeholder="Takaran Akhir Biosolar 1 (Liter)"
                  value={takaranAkhir1Biosolar}
                  onChange={(e) =>
                    setTakaranAkhir1Biosolar(Number(e.target.value) || 0)
                  }
                />
              </FormControl>
            </FormItem>
            <FormItem>
              <FormLabel>Takaran Akhir Biosolar 2</FormLabel>
              <FormControl>
                <Input
                  className="custom-input"
                  type="number"
                  step="1"
                  placeholder="Takaran Akhir Biosolar 2 (Liter)"
                  value={takaranAkhir2Biosolar}
                  onChange={(e) =>
                    setTakaranAkhir2Biosolar(Number(e.target.value) || 0)
                  }
                />
              </FormControl>
            </FormItem>
            <FormItem>
              <FormLabel>Sisa Bio Solar yang tersedia</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  value={sisaBiosolar ?? ""}
                  disabled
                  placeholder="Sisa Bio Solar yang tersedia"
                  className="custom-input"
                />
              </FormControl>
            </FormItem>
            <FormItem>
              <FormLabel>Hasil Perhitungan</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  value={hasilBiosolar ?? ""}
                  disabled
                  placeholder="Hasil Perhitungan Bio Solar"
                  className="custom-input"
                />
              </FormControl>
            </FormItem>
          </form>
        </Form>
      </div>
      <div className="card p-6">
        <h2 className="text-xl font-bold">Penghasilan Pertamax Turbo</h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((values) =>
              handleCalculate(values, "turbo")
            )}
          >
            <FormField
              control={form.control}
              name="hargaJualTurbo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Harga Jual Pertamax Turbo</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Harga Jual Pertamax Turbo"
                      className="custom-input"
                      step="1"
                      {...field}
                      value={field.value || ""}
                      onChange={(e) =>
                        setHargaJualTurbo(Number(e.target.value) || 0)
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Input Takaran Awal */}
            <FormField
              control={form.control}
              name="takaranAwalTurbo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Takaran Awal (Liter)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Takaran Awal Pertamax Turbo"
                      className="custom-input"
                      step="1"
                      {...field}
                      value={field.value || ""}
                      onChange={(e) =>
                        setTakaranAwalTurbo(Number(e.target.value) || 0)
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Input Takaran Akhir */}
            <FormItem>
              <FormLabel>Takaran Akhir Pertamax Turbo </FormLabel>
              <FormControl>
                <Input
                  className="custom-input"
                  type="number"
                  step="1"
                  placeholder="Takaran Akhir Pertamax Turbo (Liter)"
                  value={takaranAkhir1Turbo}
                  onChange={(e) =>
                    setTakaranAkhir1Turbo(Number(e.target.value) || 0)
                  }
                />
              </FormControl>
            </FormItem>
            {/* Hasil Perhitungan */}
            <FormItem>
              <FormLabel>Hasil Perhitungan</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  className="custom-input"
                  value={hasilTurbo ?? ""}
                  disabled
                  placeholder="Hasil Perhitungan Pertamax Turbo"
                />
              </FormControl>
            </FormItem>
            <FormItem>
              <FormLabel>Sisa Pertamax Turbo yang tersedia</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  className="custom-input"
                  value={sisaTurbo ?? ""}
                  disabled
                  placeholder="Sisa Pertamax Turbo yang tersedia"
                />
              </FormControl>
            </FormItem>
          </form>
        </Form>
      </div>

      <div className="card p-6 card-hasil">
        <h2 className="text-xl font-bold">Hitung Penghasilan Total</h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((values) =>
              handleCalculate(values, "total")
            )}
            className="spacehasil"
          >
            <FormField
              control={form.control}
              name="hargaJualPertalite"
              render={() => (
                <FormItem>
                  <FormLabel>Penghasilan dari Pertalite</FormLabel>
                  <FormControl>
                    <Input
                      className="custom-input"
                      type="number"
                      value={hasilPertalite ?? ""}
                      disabled
                      placeholder="Hasil Perhitungan Pertalite"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Input Takaran Awal */}
            <FormField
              control={form.control}
              name="takaranAwalPertamax"
              render={() => (
                <FormItem>
                  <FormLabel>Penghasilan dari Pertamax</FormLabel>
                  <FormControl>
                    <Input
                      className="custom-input"
                      type="number"
                      value={hasilPertamax ?? ""}
                      disabled
                      placeholder="Hasil Perhitungan Pertamax"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="takaranAwalDexlite"
              render={() => (
                <FormItem>
                  <FormLabel>Penghasilan dari Dexlite</FormLabel>
                  <FormControl>
                    <Input
                      className="custom-input"
                      type="number"
                      value={hasilDexlite ?? ""}
                      disabled
                      placeholder="Hasil Perhitungan Dexlite"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="takaranAwalBiosolar"
              render={() => (
                <FormItem>
                  <FormLabel>Penghasilan dari Bio Solar</FormLabel>
                  <FormControl>
                    <Input
                      className="custom-input"
                      type="number"
                      value={hasilBiosolar ?? ""}
                      disabled
                      placeholder="Hasil Perhitungan Bio Solar"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="takaranAwalTurbo"
              render={() => (
                <FormItem>
                  <FormLabel>Penghasilan dari Pertamax Turbo</FormLabel>
                  <FormControl>
                    <Input
                      className="custom-input"
                      type="number"
                      value={hasilTurbo ?? ""}
                      disabled
                      placeholder="Hasil Perhitungan Pertamax"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <div>
              {pengeluaranList.map((pengeluaran, index) => (
                <div key={index} className="space-y-4">
                  <div>
                    <label className="namapengeluaran">
                      Nama Pengeluaran {index + 1}
                    </label>
                    <Controller
                      name={`pengeluaran.${index}.nama`}
                      control={form.control}
                      render={({ field }) => (
                        <Input
                          className="custom-input"
                          type="text"
                          {...field}
                          placeholder="Nama Pengeluaran"
                          value={pengeluaran.nama}
                          onChange={(e) =>
                            setPengeluaranList((prev) =>
                              prev.map((item, i) =>
                                i === index
                                  ? { ...item, nama: e.target.value }
                                  : item
                              )
                            )
                          }
                        />
                      )}
                    />
                  </div>

                  <div>
                    <label className="nominalpengeluaran">
                      Nominal Pengeluaran {index + 1}
                    </label>
                    <Controller
                      name={`pengeluaran.${index}.nominal`}
                      control={form.control}
                      render={({ field }) => (
                        <Input
                          type="number"
                          className="custom-input"
                          placeholder="Nominal Pengeluaran"
                          {...field}
                          value={pengeluaran.nominal}
                          onChange={(e) =>
                            setPengeluaranList((prev) =>
                              prev.map((item, i) =>
                                i === index
                                  ? { ...item, nominal: Number(e.target.value) }
                                  : item
                              )
                            )
                          }
                        />
                      )}
                    />
                  </div>

                  <div className="flex gap-4 mt-2">
                    <Button
                      className="buttonhapuspengeluaran"
                      type="button"
                      onClick={() => handleRemovePengeluaran(index)}
                      disabled={pengeluaranList.length === 1}
                    >
                      Hapus Pengeluaran
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <Button
              type="button"
              className="btn-add-pengeluaran"
              onClick={handleAddPengeluaran}
            >
              Tambahkan Pengeluaran
            </Button>
            <FormField
              control={form.control}
              name="pengeluaran"
              render={() => (
                <FormItem className="formtotalhasil">
                  <FormLabel>Total hasil</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      className="custom-input"
                      value={totalHasilAkhir ?? ""}
                      disabled
                      placeholder="Hasil Pengeluaran hari ini"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
      <div className="card card-button-container-vertical">
        <Button
          type="submit"
          className="button-calculate"
          onClick={form.handleSubmit((values) =>
            handleCalculate(values, "total")
          )}
        >
          <RiCalculatorFill size={32} color="white" className="my-icon" />
          Hitung
        </Button>

        <Button
          type="button"
          className="button-simpan"
          onClick={form.handleSubmit(handleSave)}
        >
          <RiSaveFill size={32} color="white" className="my-icon" />
          Simpan
        </Button>
      </div>
    </div>
  );
}

export {TakaranInput,PenghitungPenghasilan};
