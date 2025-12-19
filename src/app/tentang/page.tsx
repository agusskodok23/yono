import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, Users, Award, TrendingUp, MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Tentang YONO</h1>
          <p className="text-xl text-red-100 max-w-3xl">
            Perusahaan perdagangan besar suku cadang sepeda motor terpercaya di Sragen, 
            Jawa Tengah. Berpengalaman lebih dari 10 tahun melayani kebutuhan suku cadang motor berkualitas.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Sejarah YONO
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                YONO didirikan pada tahun 2010 oleh Bapak Yono di Sragen, Jawa Tengah. 
                Dimulai dari toko kecil yang menjual suku cadang motor secara eceran, 
                YONO terus berkembang menjadi perusahaan perdagangan besar yang melayani 
                pelanggan di seluruh Indonesia.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Dengan komitmen terhadap kualitas dan kepuasan pelanggan, YONO telah 
                menjadi salah satu supplier suku cadang motor terpercaya di Indonesia. 
                Kami menyediakan berbagai macam suku cadang motor untuk semua merek terkenal 
                seperti Honda, Yamaha, Suzuki, dan Kawasaki.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Hingga saat ini, YONO telah melayani lebih dari 5.000 pelanggan aktif 
                dan terus berinovasi untuk memberikan produk dan layanan terbaik.
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-100 to-red-200 rounded-lg p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Award className="w-16 h-16 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">10+ Tahun Pengalaman</h3>
                <p className="text-gray-600">Terpercaya sejak 2010</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Visi & Misi
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Panduan kami dalam memberikan layanan terbaik untuk pelanggan
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold text-red-600 mb-4">Visi</h3>
                <p className="text-gray-600 leading-relaxed">
                  Menjadi perusahaan perdagangan suku cadang motor terkemuka di Indonesia 
                  yang menyediakan produk berkualitas dengan harga kompetitif dan layanan 
                  pelanggan yang excellent.
                </p>
              </CardContent>
            </Card>
            <Card className="p-8">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold text-red-600 mb-4">Misi</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Menyediakan suku cadang motor berkualitas tinggi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Memberikan harga yang kompetitif dan terjangkau</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Melayani pelanggan dengan profesional dan ramah</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Terus berinovasi dalam produk dan layanan</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nilai-Nilai Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Prinsip yang memandu setiap keputusan dan tindakan kami
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Kualitas</h3>
                <p className="text-gray-600">Selalu memberikan produk berkualitas terbaik</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Integritas</h3>
                <p className="text-gray-600">Berbisnis dengan jujur dan transparan</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Inovasi</h3>
                <p className="text-gray-600">Terus berinovasi untuk kemajuan bersama</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Ketepatan</h3>
                <p className="text-gray-600">Melayani dengan tepat waktu dan akurat</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Prestasi Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Angka-angka yang menunjukkan kepercayaan pelanggan kepada kami
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">10+</div>
              <p className="text-gray-600">Tahun Pengalaman</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">5000+</div>
              <p className="text-gray-600">Pelanggan Aktif</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">1000+</div>
              <p className="text-gray-600">Jenis Produk</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">98%</div>
              <p className="text-gray-600">Kepuasan Pelanggan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hubungi Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kami siap melayani kebutuhan suku cadang motor Anda
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Alamat</h3>
                <p className="text-gray-600">
                  RANDUALAS, Desa/Kelurahan Karanganyar<br />
                  Kec. Sambungmacan, Kab. Sragen<br />
                  Provinsi Jawa Tengah<br />
                  Kode Pos: 57253
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Telepon</h3>
                <p className="text-gray-600">
                  085353876139<br />
                  Senin - Sabtu: 08:00 - 17:00<br />
                  Minggu: 09:00 - 15:00
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-600">
                  info@yono-motorparts.com<br />
                  support@yono-motorparts.com<br />
                  Respon dalam 24 jam
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}