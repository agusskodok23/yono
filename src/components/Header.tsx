'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="bg-red-600 text-white py-2 text-sm">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Phone className="w-4 h-4" />
                085353876139
              </span>
              <span className="hidden md:flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                RANDUALAS, Karanganyar, Sambungmacan, Sragen
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Facebook className="w-4 h-4 cursor-pointer hover:text-red-200 transition-colors" />
              <Instagram className="w-4 h-4 cursor-pointer hover:text-red-200 transition-colors" />
              <Twitter className="w-4 h-4 cursor-pointer hover:text-red-200 transition-colors" />
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="YONO" className="h-10 w-auto" />
            <div>
              <h1 className="text-2xl font-bold text-red-600">YONO</h1>
              <p className="text-xs text-gray-600">Suku Cadang Motor Terpercaya</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Beranda
            </Link>
            <Link href="/produk" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Produk
            </Link>
            <Link href="/tentang" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Tentang Kami
            </Link>
            <Link href="/kontak" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Kontak
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              Hubungi Kami
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link 
                  href="/" 
                  className="text-lg font-medium text-gray-700 hover:text-red-600 transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Beranda
                </Link>
                <Link 
                  href="/produk" 
                  className="text-lg font-medium text-gray-700 hover:text-red-600 transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Produk
                </Link>
                <Link 
                  href="/tentang" 
                  className="text-lg font-medium text-gray-700 hover:text-red-600 transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Tentang Kami
                </Link>
                <Link 
                  href="/kontak" 
                  className="text-lg font-medium text-gray-700 hover:text-red-600 transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Kontak
                </Link>
                <div className="pt-4 border-t">
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                    Hubungi Kami
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}