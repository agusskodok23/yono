'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Twitter } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission here
    alert('Terima kasih! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Hubungi Kami</h1>
          <p className="text-xl text-red-100 max-w-3xl">
            Kami siap membantu Anda menemukan suku cadang motor yang tepat. 
            Hubungi kami untuk informasi produk, pemesanan, atau bantuan lainnya.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <Card className="p-6 mb-6">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-6">Informasi Kontak</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Alamat</h4>
                        <p className="text-gray-600 text-sm">
                          RANDUALAS, Desa/Kelurahan Karanganyar<br />
                          Kec. Sambungmacan, Kab. Sragen<br />
                          Provinsi Jawa Tengah<br />
                          Kode Pos: 57253
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Telepon</h4>
                        <p className="text-gray-600 text-sm">085353876139</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <p className="text-gray-600 text-sm">info@yono-motorparts.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Jam Operasional</h4>
                        <p className="text-gray-600 text-sm">
                          Senin - Sabtu: 08:00 - 17:00<br />
                          Minggu: 09:00 - 15:00
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="p-6">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Ikuti Kami</h3>
                  <p className="text-gray-600 mb-4">Dapatkan update terbaru tentang produk dan promo</p>
                  <div className="flex gap-3">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-200 transition-colors">
                      <Facebook className="w-5 h-5 text-red-600" />
                    </div>
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-200 transition-colors">
                      <Instagram className="w-5 h-5 text-red-600" />
                    </div>
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-200 transition-colors">
                      <Twitter className="w-5 h-5 text-red-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-semibold mb-6">Kirim Pesan</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Nama Lengkap *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                          placeholder="Masukkan nama lengkap Anda"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                          placeholder="email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Nomor Telepon *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                          placeholder="08xx-xxxx-xxxx"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                          Subjek *
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                          placeholder="Subjek pesan Anda"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Pesan *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Tuliskan pesan Anda di sini..."
                      ></textarea>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-red-600 hover:bg-red-700 text-white py-3"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Kirim Pesan
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Temukan jawaban untuk pertanyaan umum tentang produk dan layanan kami
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-3 text-red-600">
                  Apakah produk yang dijual original?
                </h3>
                <p className="text-gray-600">
                  Ya, semua produk yang kami jual adalah original dan bergaransi resmi dari produsen.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-3 text-red-600">
                  Berapa lama pengiriman ke luar kota?
                </h3>
                <p className="text-gray-600">
                  Pengiriman ke luar kota biasanya memakan waktu 2-4 hari kerja tergantung lokasi.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-3 text-red-600">
                  Apakah ada minimum pembelian?
                </h3>
                <p className="text-gray-600">
                  Untuk pembelian eceran tidak ada minimum, namun untuk pembelian grosir ada minimum order.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-3 text-red-600">
                  Apakah bisa pengiriman ke seluruh Indonesia?
                </h3>
                <p className="text-gray-600">
                  Ya, kami melayani pengiriman ke seluruh Indonesia melalui ekspedisi terpercaya.
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