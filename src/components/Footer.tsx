import Link from 'next/link'
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="YONO" className="h-12 w-auto" />
              <div>
                <h3 className="text-xl font-bold text-red-500">YONO</h3>
                <p className="text-sm text-gray-400">Suku Cadang Motor Terpercaya</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Perusahaan perdagangan besar suku cadang sepeda motor terpercaya di Sragen. 
              Menyediakan berbagai macam suku cadang motor berkualitas dengan harga kompetitif.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-4 h-4 text-red-500" />
                <span>RANDUALAS, Desa/Kelurahan Karanganyar, Kec. Sambungmacan, Kab. Sragen, Provinsi Jawa Tengah</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="w-4 h-4 text-red-500" />
                <span>085353876139</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="w-4 h-4 text-red-500" />
                <span>info@yono-motorparts.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-red-500">Link Cepat</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-red-500 transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/produk" className="text-gray-300 hover:text-red-500 transition-colors">
                  Produk
                </Link>
              </li>
              <li>
                <Link href="/tentang" className="text-gray-300 hover:text-red-500 transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="text-gray-300 hover:text-red-500 transition-colors">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-red-500">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-red-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-red-500 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 YONO. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}