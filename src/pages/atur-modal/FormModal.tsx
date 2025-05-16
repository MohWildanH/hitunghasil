import "./style.css";
import { useForm } from 'react-hook-form'
import 'remixicon/fonts/remixicon.css'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../components/ui/form'
import { Input } from '../../components/ui/input'
import { Button } from '../../components/ui/button'
import { useState, useEffect } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { RiCalculatorFill, RiSaveFill } from '@remixicon/react'
import apiInstance from '../../api/api'

// Schema validation using zod to enforce integer values
const formSchema = z.object({
  namaFile: z.string().min(1, "Nama file wajib diisi"),
  hargaJualPertalite: z.number().int().positive("Harga jual harus lebih besar dari 0 dan berupa angka bulat").min(1, "Harga jual wajib diisi"),
  keuntunganPertalite: z.number().int().positive("Keuntungan harus lebih besar dari 0 dan berupa angka bulat").min(1, "Keuntungan wajib diisi"),
  deliveryOrderPertalite: z.number().int().positive("Delivery Order harus lebih besar dari 0 dan berupa angka bulat").min(1, "Delivery Order wajib diisi"),
  hargaJualPertamax: z.number().int().positive("Harga jual harus lebih besar dari 0 dan berupa angka bulat").min(1, "Harga jual wajib diisi"),
  keuntunganPertamax: z.number().int().positive("Keuntungan harus lebih besar dari 0 dan berupa angka bulat").min(1, "Keuntungan wajib diisi"),
  deliveryOrderPertamax: z.number().int().positive("Delivery Order harus lebih besar dari 0 dan berupa angka bulat").min(1, "Delivery Order wajib diisi"),
  hargaJualBiosolar: z.number().int().positive("Harga jual harus lebih besar dari 0 dan berupa angka bulat").min(1, "Harga jual wajib diisi"),
  keuntunganBiosolar: z.number().int().positive("Keuntungan harus lebih besar dari 0 dan berupa angka bulat").min(1, "Keuntungan wajib diisi"),
  deliveryOrderBiosolar: z.number().int().positive("Delivery Order harus lebih besar dari 0 dan berupa angka bulat").min(1, "Delivery Order wajib diisi"),
  hargaJualDexlite: z.number().int().positive("Harga jual harus lebih besar dari 0 dan berupa angka bulat").min(1, "Harga jual wajib diisi"),
  keuntunganDexlite: z.number().int().positive("Keuntungan harus lebih besar dari 0 dan berupa angka bulat").min(1, "Keuntungan wajib diisi"),
  deliveryOrderDexlite: z.number().int().positive("Delivery Order harus lebih besar dari 0 dan berupa angka bulat").min(1, "Delivery Order wajib diisi"),
  hargaJualTurbo: z.number().int().positive("Harga jual harus lebih besar dari 0 dan berupa angka bulat").min(1, "Harga jual wajib diisi"),
  keuntunganTurbo: z.number().int().positive("Keuntungan harus lebih besar dari 0 dan berupa angka bulat").min(1, "Keuntungan wajib diisi"),
  deliveryOrderTurbo: z.number().int().positive("Delivery Order harus lebih besar dari 0 dan berupa angka bulat").min(1, "Delivery Order wajib diisi"),
})

type FormValues = z.infer<typeof formSchema>

function FormModal() {
  // States for Pertalite, Pertamax, and Biosolar
  const [hargaJualPertalite, setHargaJualPertalite] = useState<number>({} as number)
  const [keuntunganPertalite, setKeuntunganPertalite] = useState<number>({} as number)
  const [deliveryOrderPertalite, setDeliveryOrderPertalite] = useState<number>({} as number)

  const [hargaJualPertamax, setHargaJualPertamax] = useState<number>({} as number)
  const [keuntunganPertamax, setKeuntunganPertamax] = useState<number>({} as number)
  const [deliveryOrderPertamax, setDeliveryOrderPertamax] = useState<number>({} as number)

  const [hargaJualBiosolar, setHargaJualBiosolar] = useState<number>({} as number)
  const [keuntunganBiosolar, setKeuntunganBiosolar] = useState<number>({} as number)
  const [deliveryOrderBiosolar, setDeliveryOrderBiosolar] = useState<number>({} as number)

  const [hargaJualDexlite, setHargaJualDexlite] = useState<number>({} as number)
  const [keuntunganDexlite, setKeuntunganDexlite] = useState<number>({} as number)
  const [deliveryOrderDexlite, setDeliveryOrderDexlite] = useState<number>({} as number)

  const [hargaJualTurbo, setHargaJualTurbo] = useState<number>({} as number)
  const [keuntunganTurbo, setKeuntunganTurbo] = useState<number>({} as number)
  const [deliveryOrderTurbo, setDeliveryOrderTurbo] = useState<number>({} as number)

  const [hasilPertalite, setHasilPertalite] = useState<number | null>(null)
  const [hasilPertamax, setHasilPertamax] = useState<number | null>(null)
  const [hasilBiosolar, setHasilBiosolar] = useState<number | null>(null)
  const [hasilDexlite, setHasilDexlite] = useState<number | null>(null)
  const [hasilTurbo, setHasilTurbo] = useState<number | null>(null)


  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  })

  // Update form values whenever state changes for Pertalite, Pertamax, Biosolar
  useEffect(() => {
    form.setValue('hargaJualPertalite', hargaJualPertalite)
    form.setValue('keuntunganPertalite', keuntunganPertalite)
    form.setValue('deliveryOrderPertalite', deliveryOrderPertalite)
    form.setValue('hargaJualPertamax', hargaJualPertamax)
    form.setValue('keuntunganPertamax', keuntunganPertamax)
    form.setValue('deliveryOrderPertamax', deliveryOrderPertamax)
    form.setValue('hargaJualBiosolar', hargaJualBiosolar)
    form.setValue('keuntunganBiosolar', keuntunganBiosolar)
    form.setValue('deliveryOrderBiosolar', deliveryOrderBiosolar)
    form.setValue('hargaJualDexlite', hargaJualDexlite)
    form.setValue('keuntunganDexlite', keuntunganDexlite)
    form.setValue('deliveryOrderDexlite', deliveryOrderDexlite)
    form.setValue('hargaJualTurbo', hargaJualTurbo)
    form.setValue('keuntunganTurbo', keuntunganTurbo)
    form.setValue('deliveryOrderTurbo', deliveryOrderTurbo)
  }, [hargaJualPertalite, keuntunganPertalite, deliveryOrderPertalite, hargaJualPertamax, keuntunganPertamax, deliveryOrderPertamax, hargaJualBiosolar, keuntunganBiosolar, deliveryOrderBiosolar, hargaJualDexlite, keuntunganDexlite, deliveryOrderDexlite, hargaJualTurbo, keuntunganTurbo, deliveryOrderTurbo, form])

  const handleCalculate = (values: FormValues, type: string) => {
    const hargaJualPertalite = Number(values.hargaJualPertalite)
    const keuntunganPertalite = Number(values.keuntunganPertalite)
    const deliveryOrderPertalite = Number(values.deliveryOrderPertalite)
    const hargaJualPertamax = Number(values.hargaJualPertamax)
    const keuntunganPertamax = Number(values.keuntunganPertamax)
    const deliveryOrderPertamax = Number(values.deliveryOrderPertamax)
    const hargaJualBiosolar = Number(values.hargaJualBiosolar)
    const keuntunganBiosolar = Number(values.keuntunganBiosolar)
    const deliveryOrderBiosolar = Number(values.deliveryOrderBiosolar)
    const hargaJualDexlite = Number(values.hargaJualDexlite)
    const keuntunganDexlite = Number(values.keuntunganDexlite)
    const deliveryOrderDexlite = Number(values.deliveryOrderDexlite)
    const hargaJualTurbo = Number(values.hargaJualTurbo)
    const keuntunganTurbo = Number(values.keuntunganTurbo)
    const deliveryOrderTurbo = Number(values.deliveryOrderTurbo)

    if (isNaN(hargaJualPertalite) || isNaN(keuntunganPertalite) || isNaN(deliveryOrderPertalite) || isNaN(hargaJualPertamax) || isNaN(keuntunganPertamax) || isNaN(deliveryOrderPertamax) || isNaN(hargaJualBiosolar) || isNaN(keuntunganBiosolar) || isNaN(deliveryOrderBiosolar) || isNaN(hargaJualDexlite) || isNaN(keuntunganDexlite) || isNaN(deliveryOrderDexlite) || isNaN(hargaJualTurbo) || isNaN(keuntunganTurbo) || isNaN(deliveryOrderTurbo)) {
      console.error("Invalid input values.");
      return;
    }

    const pertalite = (hargaJualPertalite + keuntunganPertalite) * deliveryOrderPertalite
    const resultpertalite = pertalite - (keuntunganPertalite * deliveryOrderPertalite)

    const pertamax = (hargaJualPertamax + keuntunganPertamax) * deliveryOrderPertamax
    const resultpertamax = pertamax - (keuntunganPertamax * deliveryOrderPertamax)

    const biosolar = (hargaJualBiosolar + keuntunganBiosolar) * deliveryOrderBiosolar
    const resultbiosolar = biosolar - (keuntunganBiosolar * deliveryOrderBiosolar)

    const dexlite = (hargaJualDexlite + keuntunganDexlite) * deliveryOrderDexlite
    const resultdexlite = dexlite - (keuntunganBiosolar * deliveryOrderBiosolar)

    const turbo = (hargaJualTurbo + keuntunganTurbo) * deliveryOrderTurbo
    const resultturbo = turbo - (keuntunganTurbo * deliveryOrderTurbo)


    // Update hasil based on type (Pertalite, Pertamax, Biosolar)
    if (type === 'pertalite') {
      setHasilPertalite(resultpertalite)
    } else if (type === 'pertamax') {
      setHasilPertamax(resultpertamax)
    } else if (type === 'biosolar') {
      setHasilBiosolar(resultbiosolar)
    } else if (type === 'dexlite') {
      setHasilDexlite(resultdexlite)
    } else if (type === 'turbo') {
      setHasilTurbo(resultturbo)
    }
  }

  const handleSave = async (values: FormValues) => {
    console.log("Data saved!")
    const requestData = {
      id_user: 14,
      namaFile: values.namaFile,
      biosolar: [
        {
          hargaBiosolar: values.hargaJualBiosolar,
          keuntunganBiosolar: values.keuntunganBiosolar,
          deliveryOrderBiosolar: values.deliveryOrderBiosolar,
          hasilPerhitunganBiosolar: hasilBiosolar, 
        },
      ],
      pertalite: [
        {
          hargaPertalite: values.hargaJualPertalite,
          keuntunganPertalite: values.keuntunganPertalite,
          deliveryOrderPertalite: values.deliveryOrderPertalite,
          hasilPerhitunganPertalite: hasilPertalite, 
        },
      ],
      pertamax: [
        {
          hargaPertamax: values.hargaJualPertamax,
          keuntunganPertamax: values.keuntunganPertamax,
          delevieryOrderPertamax: values.deliveryOrderPertamax,
          hasilPerhitunganPertamax: hasilPertamax, 
        },
      ],
      dexlite: [
        {
          hargaDexlite: values.hargaJualDexlite,
          keuntunganDexlite: values.keuntunganDexlite,
          deliveryOrderDexlite: values.deliveryOrderDexlite,
          hasilPerhitunganDexlite: hasilDexlite, 
        },
      ],
      turbo: [
        {
          hargaTurbo: values.hargaJualTurbo,
          keuntunganTurbo: values.keuntunganTurbo,
          deliveryOrderTurbo: values.deliveryOrderTurbo,
          hasilPerhitunganTurbo: hasilTurbo,
        },
      ],
    };
    console.log("request payload data:", requestData);
    try {
      const response = await apiInstance.post("/modal/create", requestData);
      alert("Data saved successfully!");
      console.log("response data: ", response.data);
    } catch (error) {
      console.error("Error:", error);
      alert("Terjadi kesalahan saat menyimpan data.");
    }
  }

  // Function to format number as currency in Rupiah
  const formatRupiah = (value: number | null) => {
    if (value === null) return ""
    return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(value)
  }

  return (
    <div className="space-y-8 modal">
      {/* File Name Input */}
      <div className="card p-6">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((values) => handleCalculate(values, 'namaFile'))}
           
          >
            <FormField
              control={form.control}
              name="namaFile"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama File</FormLabel>
                  <FormControl>
                    <Input
                    className="custom-input"
                      placeholder="Nama File"
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

      {/* Card Pertalite */}
      <div className="card p-6">
        <h2 className="text-xl font-bold">Modal untuk Pertalite</h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((values) => handleCalculate(values, 'pertalite'))}
          
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
                      className="custom-input"
                      placeholder="Harga Jual"
                      step="1"
                      {...field}
                      value={field.value || ""}
                      onChange={(e) => {
                        setHargaJualPertalite(Number(e.target.value) || 0)
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Input Keuntungan Pertalite */}
            <FormField
              control={form.control}
              name="keuntunganPertalite"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Keuntungan Pertalite</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      className="custom-input"
                      placeholder="Keuntungan"
                      step="1"
                      {...field}
                      value={field.value || ""}
                      onChange={(e) => {
                        setKeuntunganPertalite(Number(e.target.value) || 0)
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Input Delivery Order (Liter) */}
            <FormField
              control={form.control}
              name="deliveryOrderPertalite"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Delivery Order (Liter)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      className="custom-input"
                      placeholder="Delivery Order (Liter)"
                      step="1"
                      {...field}
                      value={field.value || ""}
                      onChange={(e) => {
                        setDeliveryOrderPertalite(Number(e.target.value) || 0)
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Hasil Perhitungan Pertalite */}
            <FormItem>
              <FormLabel>Hasil Perhitungan</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  value={formatRupiah(hasilPertalite)}
                  disabled
                />
              </FormControl>
            </FormItem>

          </form>
        </Form>
      </div>

      {/* Card Pertamax */}
      <div className="card p-6">
        <h2 className="text-xl font-bold">Modal untuk Pertamax</h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((values) => handleCalculate(values, 'pertamax'))}
            
          >
            {/* Input Harga Jual Pertamax */}
            <FormField
              control={form.control}
              name="hargaJualPertamax"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Harga Jual Pertamax</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      className="custom-input"
                      placeholder="Harga Jual"
                      step="1"
                      {...field}
                      value={field.value || ""}
                      onChange={(e) => {
                        setHargaJualPertamax(Number(e.target.value) || 0)
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Input Keuntungan Pertamax */}
            <FormField
              control={form.control}
              name="keuntunganPertamax"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Keuntungan Pertamax</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      className="custom-input"
                      placeholder="Keuntungan"
                      step="1"
                      {...field}
                      value={field.value || ""}
                      onChange={(e) => {
                        setKeuntunganPertamax(Number(e.target.value) || 0)
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Input Delivery Order (Liter) */}
            <FormField
              control={form.control}
              name="deliveryOrderPertamax"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Delivery Order (Liter)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      className="custom-input"
                      placeholder="Delivery Order (Liter)"
                      step="1"
                      {...field}
                      value={field.value || ""}
                      onChange={(e) => {
                        setDeliveryOrderPertamax(Number(e.target.value) || 0)
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Hasil Perhitungan Pertamax */}
            <FormItem>
              <FormLabel>Hasil Perhitungan</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  value={formatRupiah(hasilPertamax)}
                  disabled
                />
              </FormControl>
            </FormItem>

          </form>
        </Form>
      </div>

      {/* Card Biosolar */}
      <div className="card p-6">
        <h2 className="text-xl font-bold">Modal untuk Biosolar</h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((values) => handleCalculate(values, 'biosolar'))}
        
          >
            {/* Input Harga Jual Biosolar */}
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
                      placeholder="Harga Jual"
                      step="1"
                      {...field}
                      value={field.value || ""}
                      onChange={(e) => {
                        setHargaJualBiosolar(Number(e.target.value) || 0)
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Input Keuntungan Biosolar */}
            <FormField
              control={form.control}
              name="keuntunganBiosolar"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Keuntungan Biosolar</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      className="custom-input"
                      placeholder="Keuntungan"
                      step="1"
                      {...field}
                      value={field.value || ""}
                      onChange={(e) => {
                        setKeuntunganBiosolar(Number(e.target.value) || 0)
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Input Delivery Order (Liter) */}
            <FormField
              control={form.control}
              name="deliveryOrderBiosolar"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Delivery Order (Liter)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      className="custom-input"
                      placeholder="Delivery Order (Liter)"
                      step="1"
                      {...field}
                      value={field.value || ""}
                      onChange={(e) => {
                        setDeliveryOrderBiosolar(Number(e.target.value) || 0)
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Hasil Perhitungan Biosolar */}
            <FormItem>
              <FormLabel>Hasil Perhitungan</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  value={formatRupiah(hasilBiosolar)}
                  disabled
                />
              </FormControl>
            </FormItem>

          </form>
        </Form>
      </div>
      <div className="card p-6">
        <h2 className="text-xl font-bold">Modal untuk Dexlite</h2>
        <Form {...form}>
          <form
         
          >
            {/* Input Harga Jual Pertamax */}
            <FormField
              control={form.control}
              name="hargaJualDexlite"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Harga Jual Dexlite</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      className="custom-input"
                      placeholder="Harga Jual"
                      step="1"
                      {...field}
                      value={field.value || ""}
                      onChange={(e) => {
                        setHargaJualDexlite(Number(e.target.value) || 0)
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Input Keuntungan Pertamax */}
            <FormField
              control={form.control}
              name="keuntunganDexlite"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Keuntungan Dexlite</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      className="custom-input"
                      placeholder="Keuntungan"
                      step="1"
                      {...field}
                      value={field.value || ""}
                      onChange={(e) => {
                        setKeuntunganDexlite(Number(e.target.value) || 0)
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Input Delivery Order (Liter) */}
            <FormField
              control={form.control}
              name="deliveryOrderDexlite"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Delivery Order (Liter)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      className="custom-input"
                      placeholder="Delivery Order (Liter)"
                      step="1"
                      {...field}
                      value={field.value || ""}
                      onChange={(e) => {
                        setDeliveryOrderDexlite(Number(e.target.value) || 0)
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Hasil Perhitungan Pertamax */}
            <FormItem>
              <FormLabel>Hasil Perhitungan</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  value={formatRupiah(hasilDexlite)}
                  disabled
                />
              </FormControl>
            </FormItem>

          </form>
        </Form>
      </div>
      <div className="card p-6 pertamax">
        <h2 className="text-xl font-bold">Modal untuk Pertamax Turbo</h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((values) => handleCalculate(values, 'turbo'))}
         
          >
            {/* Input Harga Jual Pertamax */}
            <FormField
              control={form.control}
              name="hargaJualTurbo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Harga Jual Turbo</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      className="custom-input"
                      placeholder="Harga Jual"
                      step="1"
                      {...field}
                      value={field.value || ""}
                      onChange={(e) => {
                        setHargaJualTurbo(Number(e.target.value) || 0)
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Input Keuntungan Pertamax */}
            <FormField
              control={form.control}
              name="keuntunganTurbo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Keuntungan Pertamax Turbo</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      className="custom-input"
                      placeholder="Keuntungan"
                      step="1"
                      {...field}
                      value={field.value || ""}
                      onChange={(e) => {
                        setKeuntunganTurbo(Number(e.target.value) || 0)
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Input Delivery Order (Liter) */}
            <FormField
              control={form.control}
              name="deliveryOrderTurbo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Delivery Order (Liter)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      className="custom-input"
                      placeholder="Delivery Order (Liter)"
                      step="1"
                      {...field}
                      value={field.value || ""}
                      onChange={(e) => {
                        setDeliveryOrderTurbo(Number(e.target.value) || 0)
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Hasil Perhitungan Pertamax */}
            <FormItem>
              <FormLabel>Hasil Perhitungan</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  value={formatRupiah(hasilTurbo)}
                  disabled
                />
              </FormControl>
            </FormItem>
          </form>
        </Form>
      </div>
      <div className="card card-button-container-vertical">
  <Button
    type="submit"
    className="button-calculate"
    onClick={() => {
      const totalValues = form.getValues(); 
      handleCalculate(totalValues, "dexlite");
      handleCalculate(totalValues, "turbo");
      handleCalculate(totalValues, "pertamax");
      handleCalculate(totalValues, "pertalite");
      handleCalculate(totalValues, "biosolar");
    }}
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

  )
}

export default FormModal
