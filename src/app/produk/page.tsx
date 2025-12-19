'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Search, Filter, Wrench, Shield, Truck, Star, ChevronRight } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Piston Kit Honda Beat',
    category: 'Sparepart Mesin',
    price: 'Rp 150.000',
    image: '/piston.jpg',
    description: 'Piston kit berkualitas tinggi untuk Honda Beat',
    rating: 4.5,
    inStock: true
  },
  {
    id: 2,
    name: 'Kampas Rem Depan Yamaha Mio',
    category: 'Sistem Rem',
    price: 'Rp 45.000',
    image: '/brake-pads.jpg',
    description: 'Kampas rem depan original Yamaha Mio',
    rating: 4.8,
    inStock: true
  },
  {
    id: 3,
    name: 'Lampu Depan LED Suzuki Satria',
    category: 'Elektrikal',
    price: 'Rp 120.000',
    image: '/headlight.jpg',
    description: 'Lampu depan LED super bright untuk Suzuki Satria',
    rating: 4.3,
    inStock: true
  },
  {
    id: 4,
    name: ' Bearing Roda Set Kawasaki Ninja',
    category: 'Sparepart Mesin',
    price: 'Rp 200.000',
    image: '/piston.jpg',
    description: 'Set bearing roda untuk Kawasaki Ninja 250',
    rating: 4.7,
    inStock: false
  },
  {
    id: 5,
    name: 'Spakbor Belakang Honda Vario',
    category: 'Body Part',
    price: 'Rp 85.000',
    image: '/headlight.jpg',
    description: 'Spakbor belakang ABS untuk Honda Vario',
    rating: 4.4,
    inStock: true
  },
  {
    id: 6,
    name: 'Rantai Keteng Yamaha NMax',
    category: 'Sparepart Mesin',
    price: 'Rp 180.000',
    image: '/piston.jpg',
    description: 'Rantai keteng timing untuk Yamaha NMax',
    rating: 4.6,
    inStock: true
  },
  {
    id: 7,
    name: 'Master Rem Hidrolik',
    category: 'Sistem Rem',
    price: 'Rp 95.000',
    image: '/brake-pads.jpg',
    description: 'Master rem hidrolik universal untuk semua motor',
    rating: 4.2,
    inStock: true
  },
  {
    id: 8,
    name: 'CDI Racing Honda Beat',
    category: 'Elektrikal',
    price: 'Rp 250.000',
    image: '/headlight.jpg',
    description: 'CDI racing untuk meningkatkan performa Honda Beat',
    rating: 4.9,
    inStock: true
  },
  {
    id: 9,
    name: 'Shockbreaker Depan YSS',
    category: 'Suspensi',
    price: 'Rp 450.000',
    image: '/piston.jpg',
    description: 'Shockbreaker depan YSS untuk performa maksimal',
    rating: 4.8,
    inStock: true
  }
]

const categories = [
  'Semua',
  'Sparepart Mesin',
  'Sistem Rem',
  'Body Part',
  'Elektrikal',
  'Suspensi',
  'Aksesoris'
]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('Semua')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'Semua' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Katalog Produk</h1>
          <p className="text-xl text-red-100">
            Temukan suku cadang motor berkualitas untuk semua merek dan type
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="bg-white shadow-sm sticky top-16 z-40">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Cari produk..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  className={selectedCategory === category ? 'bg-red-600 hover:bg-red-700' : ''}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <div className="h-48 bg-gray-100">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {!product.inStock && (
                    <div className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                      Habis
                    </div>
                  )}
                  <div className="absolute top-2 left-2 bg-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center gap-2 mb-4">
                    {renderStars(product.rating)}
                    <span className="text-sm text-gray-500">({product.rating})</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-red-600">{product.price}</span>
                    <div className="flex items-center gap-1 text-sm text-green-600">
                      <Truck className="w-4 h-4" />
                      <span>Gratis Ongkir</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-red-600 hover:bg-red-700"
                    disabled={!product.inStock}
                  >
                    {product.inStock ? 'Tambah ke Keranjang' : 'Stok Habis'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">Tidak ada produk yang ditemukan</p>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Garansi Resmi</h3>
              <p className="text-gray-600">Semua produk dilengkapi garansi resmi dari produsen</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Pengiriman Cepat</h3>
              <p className="text-gray-600">Pengiriman ke seluruh Indonesia dengan estimasi 1-3 hari</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Kualitas Terjamin</h3>
              <p className="text-gray-600">Hanya produk berkualitas tinggi yang kami jual</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}