import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Check } from "lucide-react";

const Join = () => {
  const benefits = [
    "Akses ke sumber daya dan publikasi eksklusif anggota",
    "Undangan ke acara dan konferensi internasional",
    "Peluang jaringan dengan para profesional global",
    "Kelayakan untuk program penghargaan dan pengakuan",
    "Hak suara dalam pengambilan keputusan organisasi",
    "Tarif diskon untuk lokakarya dan pelatihan",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center">Bergabung dengan FLY.ORG</h1>
          <p className="text-muted-foreground mb-12 text-lg text-center">
            Jadilah bagian dari komunitas global kami
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Benefits */}
            <Card>
              <CardHeader>
                <CardTitle>Keuntungan Keanggotaan</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Registration Form */}
            <Card>
              <CardHeader>
                <CardTitle>Daftar Sekarang</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                      Nama Lengkap
                    </label>
                    <Input id="fullName" placeholder="John Doe" />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Alamat Email
                    </label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>

                  <div>
                    <label htmlFor="country" className="block text-sm font-medium mb-2">
                      Negara
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih negara Anda" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">Amerika Serikat</SelectItem>
                        <SelectItem value="uk">Inggris</SelectItem>
                        <SelectItem value="ca">Kanada</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                        <SelectItem value="de">Jerman</SelectItem>
                        <SelectItem value="fr">Prancis</SelectItem>
                        <SelectItem value="other">Lainnya</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium mb-2">
                      Kata Sandi
                    </label>
                    <Input id="password" type="password" placeholder="Buat kata sandi" />
                  </div>

                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
                      Konfirmasi Kata Sandi
                    </label>
                    <Input id="confirmPassword" type="password" placeholder="Konfirmasi kata sandi Anda" />
                  </div>

                  <Button type="submit" className="w-full">
                    Buat Akun
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">Ada pertanyaan tentang keanggotaan?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Hubungi tim keanggotaan kami di membership@fly.org atau telepon +1 (555) 123-4567 untuk bantuan.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Join;
