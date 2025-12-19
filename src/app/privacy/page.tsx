import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl text-red-100">
            Kebijakan privasi YONO - Perlindungan data pribadi Anda adalah prioritas kami
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Kebijakan Privasi YONO</h2>
              <p className="text-gray-600 mb-6">
                Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Pendahuluan</h3>
              <p className="text-gray-600 mb-6">
                Selamat datang di YONO. Kami sangat menghargai privasi Anda dan berkomitmen untuk melindungi 
                data pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, 
                melindungi, dan membagikan informasi ketika Anda menggunakan website dan layanan kami.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Informasi yang Kami Kumpulkan</h3>
              <p className="text-gray-600 mb-4">
                Kami dapat mengumpulkan informasi berikut:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Informasi pribadi: nama, alamat email, nomor telepon, alamat pengiriman</li>
                <li>Informasi pembayaran: detail pembayaran yang aman</li>
                <li>Informasi teknis: alamat IP, browser, perangkat, dan data penggunaan</li>
                <li>Informasi cookies dan data pelacakan</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Cara Kami Menggunakan Informasi Anda</h3>
              <p className="text-gray-600 mb-4">
                Kami menggunakan informasi yang dikumpulkan untuk:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Memproses dan menyelesaikan pesanan Anda</li>
                <li>Menyediakan layanan pelanggan</li>
                <li>Mengirimkan informasi produk dan promosi</li>
                <li>Meningkatkan website dan layanan kami</li>
                <li>Melindungi dari penipuan dan penyalahgunaan</li>
                <li>Mematuhi kewajiban hukum</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Berbagi Informasi</h3>
              <p className="text-gray-600 mb-6">
                Kami tidak menjual, memperdagangkan, atau menyewakan informasi pribadi Anda kepada pihak ketiga. 
                Kami hanya membagikan informasi Anda dalam keadaan berikut:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Dengan penyedia layanan pembayaran untuk memproses transaksi</li>
                <li>Dengan layanan pengiriman untuk mengirimkan pesanan</li>
                <li>Dengan mitra bisnis tepercaya untuk layanan tertentu</li>
                <li>Sesuai yang diwajibkan oleh hukum atau peraturan</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">5. Keamanan Data</h3>
              <p className="text-gray-600 mb-6">
                Kami menggunakan langkah-langkah keamanan yang wajar untuk melindungi informasi pribadi Anda 
                dari akses tidak sah, perubahan, penghancuran, atau pengungkapan. Namun, tidak ada metode 
                transmisi internet yang 100% aman.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">6. Cookies</h3>
              <p className="text-gray-600 mb-6">
                Website kami menggunakan cookies untuk meningkatkan pengalaman pengguna. Cookies adalah file 
                teks kecil yang disimpan di browser Anda. Anda dapat mengatur browser untuk menolak cookies, 
                namun ini dapat mempengaruhi fungsionalitas website.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">7. Hak Anda</h3>
              <p className="text-gray-600 mb-6">
                Anda memiliki hak untuk:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Mengakses informasi pribadi yang kami simpan tentang Anda</li>
                <li>Memperbarui atau mengoreksi informasi yang tidak akurat</li>
                <li>Menghapus informasi pribadi Anda (dengan batasan tertentu)</li>
                <li>Menolak pemasaran langsung dari kami</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">8. Penyimpanan Data</h3>
              <p className="text-gray-600 mb-6">
                Kami menyimpan informasi pribadi Anda selama diperlukan untuk tujuan yang dikumpulkan, 
                kecuali diperlukan lebih lama oleh hukum atau persyaratan peraturan.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">9. Anak di Bawah Umur</h3>
              <p className="text-gray-600 mb-6">
                Layanan kami tidak ditujukan untuk anak di bawah 18 tahun. Kami tidak secara sengaja 
                mengumpulkan informasi pribadi dari anak di bawah umur.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">10. Perubahan Kebijakan Privasi</h3>
              <p className="text-gray-600 mb-6">
                Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan 
                diposting di halaman ini dengan tanggal pembaruan terbaru.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">11. Hubungi Kami</h3>
              <p className="text-gray-600 mb-6">
                Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau perlakuan kami terhadap 
                informasi pribadi Anda, silakan hubungi kami:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600 mb-2">
                  <strong>Email:</strong> privacy@yono-motorparts.com<br />
                  <strong>Telepon:</strong> 085353876139<br />
                  <strong>Alamat:</strong> RANDUALAS, Desa/Kelurahan Karanganyar, Kec. Sambungmacan, Kab. Sragen, Provinsi Jawa Tengah, Kode Pos 57253
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}