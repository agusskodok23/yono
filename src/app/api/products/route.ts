import { NextRequest, NextResponse } from 'next/server'

const products = [
  {
    id: 1,
    name: 'Piston Kit Honda Beat',
    category: 'Sparepart Mesin',
    price: 150000,
    description: 'Piston kit berkualitas tinggi untuk Honda Beat',
    rating: 4.5,
    inStock: true,
    brand: 'Honda',
    model: 'Beat',
    sku: 'PK-HB-001'
  },
  {
    id: 2,
    name: 'Kampas Rem Depan Yamaha Mio',
    category: 'Sistem Rem',
    price: 45000,
    description: 'Kampas rem depan original Yamaha Mio',
    rating: 4.8,
    inStock: true,
    brand: 'Yamaha',
    model: 'Mio',
    sku: 'KR-YM-002'
  },
  {
    id: 3,
    name: 'Lampu Depan LED Suzuki Satria',
    category: 'Elektrikal',
    price: 120000,
    description: 'Lampu depan LED super bright untuk Suzuki Satria',
    rating: 4.3,
    inStock: true,
    brand: 'Suzuki',
    model: 'Satria',
    sku: 'LD-SS-003'
  },
  {
    id: 4,
    name: 'Bearing Roda Set Kawasaki Ninja',
    category: 'Sparepart Mesin',
    price: 200000,
    description: 'Set bearing roda untuk Kawasaki Ninja 250',
    rating: 4.7,
    inStock: false,
    brand: 'Kawasaki',
    model: 'Ninja',
    sku: 'BR-KN-004'
  },
  {
    id: 5,
    name: 'Spakbor Belakang Honda Vario',
    category: 'Body Part',
    price: 85000,
    description: 'Spakbor belakang ABS untuk Honda Vario',
    rating: 4.4,
    inStock: true,
    brand: 'Honda',
    model: 'Vario',
    sku: 'SB-HV-005'
  },
  {
    id: 6,
    name: 'Rantai Keteng Yamaha NMax',
    category: 'Sparepart Mesin',
    price: 180000,
    description: 'Rantai keteng timing untuk Yamaha NMax',
    rating: 4.6,
    inStock: true,
    brand: 'Yamaha',
    model: 'NMax',
    sku: 'RK-YN-006'
  },
  {
    id: 7,
    name: 'Master Rem Hidrolik',
    category: 'Sistem Rem',
    price: 95000,
    description: 'Master rem hidrolik universal untuk semua motor',
    rating: 4.2,
    inStock: true,
    brand: 'Universal',
    model: 'All',
    sku: 'MR-UN-007'
  },
  {
    id: 8,
    name: 'CDI Racing Honda Beat',
    category: 'Elektrikal',
    price: 250000,
    description: 'CDI racing untuk meningkatkan performa Honda Beat',
    rating: 4.9,
    inStock: true,
    brand: 'Honda',
    model: 'Beat',
    sku: 'CD-HB-008'
  },
  {
    id: 9,
    name: 'Shockbreaker Depan YSS',
    category: 'Suspensi',
    price: 450000,
    description: 'Shockbreaker depan YSS untuk performa maksimal',
    rating: 4.8,
    inStock: true,
    brand: 'YSS',
    model: 'Universal',
    sku: 'SD-YSS-009'
  }
]

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get('category')
  const search = searchParams.get('search')
  const brand = searchParams.get('brand')
  const inStock = searchParams.get('inStock')

  let filteredProducts = [...products]

  if (category && category !== 'Semua') {
    filteredProducts = filteredProducts.filter(p => p.category === category)
  }

  if (search) {
    filteredProducts = filteredProducts.filter(p => 
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase())
    )
  }

  if (brand) {
    filteredProducts = filteredProducts.filter(p => p.brand.toLowerCase() === brand.toLowerCase())
  }

  if (inStock === 'true') {
    filteredProducts = filteredProducts.filter(p => p.inStock)
  }

  return NextResponse.json({
    success: true,
    data: filteredProducts,
    total: filteredProducts.length
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Simulate adding a new product
    const newProduct = {
      id: products.length + 1,
      ...body,
      rating: 0,
      inStock: true
    }

    products.push(newProduct)

    return NextResponse.json({
      success: true,
      data: newProduct,
      message: 'Product added successfully'
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Failed to add product'
    }, { status: 400 })
  }
}