import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Wrench, Truck, Shield, Clock, CheckCircle, Star } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              YONO - Suku Cadang Motor Terpercaya
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100 leading-relaxed">
              Perusahaan perdagangan besar suku cadang sepeda motor terlengkap di Sragen. 
              Kualitas terjamin, harga kompetitif, dan pengiriman cepat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                Lihat Produk Kami
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
                Hubungi Kami
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-black opacity-10"></div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih YONO?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kami berkomitmen menyediakan suku cadang motor berkualitas dengan layanan terbaik
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Kualitas Terjamin</h3>
                <p className="text-gray-600">Semua produk berkualitas dan original</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Pengiriman Cepat</h3>
                <p className="text-gray-600">Pengiriman tepat waktu ke seluruh Indonesia</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Garansi Produk</h3>
                <p className="text-gray-600">Garansi untuk semua produk yang kami jual</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Layanan 24/7</h3>
                <p className="text-gray-600">Siap melayani kapan saja Anda butuhkan</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Produk Unggulan Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Berbagai macam suku cadang motor untuk semua merek dan type
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                <Wrench className="w-16 h-16 text-red-600" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Sparepart Mesin</h3>
                <p className="text-gray-600 mb-4">Piston, ring, bearing, dan komponen mesin lainnya</p>
                <Link href="/produk">
                  <Button variant="outline" className="w-full">
                    Lihat Detail
                  </Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                <Shield className="w-16 h-16 text-red-600" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Body Part</h3>
                <p className="text-gray-600 mb-4">Spakbor, lampu, mirror, dan aksesoris body</p>
                <Link href="/produk">
                  <Button variant="outline" className="w-full">
                    Lihat Detail
                  </Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                <Truck className="w-16 h-16 text-red-600" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Sistem Rem</h3>
                <p className="text-gray-600 mb-4">Cakram, kampas rem, master rem, dan komponen rem</p>
                <Link href="/produk">
                  <Button variant="outline" className="w-full">
                    Lihat Detail
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Link href="/produk">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                Lihat Semua Produk
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Tentang YONO
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                YONO adalah perusahaan perdagangan besar suku cadang sepeda motor yang telah berdiri sejak tahun 2010. 
                Berlokasi di Sragen, Jawa Tengah, kami telah melayani ribuan pelanggan di seluruh Indonesia.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Kami menyediakan berbagai macam suku cadang motor untuk semua merek terkenal seperti Honda, Yamaha, Suzuki, 
                dan Kawasaki. Dengan pengalaman lebih dari 10 tahun, kami memahami kebutuhan pelanggan akan suku cadang 
                berkualitas dengan harga terjangkau.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600" />
                  <span className="text-gray-700">10+ Tahun Pengalaman</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600" />
                  <span className="text-gray-700">1000+ Produk</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600" />
                  <span className="text-gray-700">5000+ Pelanggan</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600" />
                  <span className="text-gray-700">Garansi Resmi</span>
                </div>
              </div>
              <Link href="/tentang">
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  Pelajari Lebih Lanjut
                </Button>
              </Link>
            </div>
            <div className="bg-gradient-to-br from-red-100 to-red-200 rounded-lg p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Star className="w-16 h-16 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Kualitas Terbaik</h3>
                <p className="text-gray-600">Hanya produk berkualitas yang kami tawarkan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Butuh Suku Cadang Motor?
          </h2>
          <p className="text-xl mb-8 text-red-100 max-w-2xl mx-auto">
            Hubungi kami sekarang untuk mendapatkan suku cadang motor berkualitas dengan harga terbaik
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontak">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                Hubungi Kami Sekarang
              </Button>
            </Link>
            <Link href="/produk">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
                Lihat Katalog Produk
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}