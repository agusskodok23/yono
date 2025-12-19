import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms and Conditions</h1>
          <p className="text-xl text-red-100">
            Syarat dan Ketentuan Penggunaan Website YONO
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Syarat dan Ketentuan YONO</h2>
              <p className="text-gray-600 mb-6">
                Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Penerimaan Syarat dan Ketentuan</h3>
              <p className="text-gray-600 mb-6">
                Dengan mengakses dan menggunakan website YONO, Anda menerima dan setuju untuk terikat 
                oleh Syarat dan Ketentuan ini. Jika Anda tidak setuju dengan bagian mana pun dari 
                syarat dan ketentuan ini, Anda tidak boleh menggunakan website kami.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Deskripsi Layanan</h3>
              <p className="text-gray-600 mb-6">
                YONO adalah platform perdagangan besar suku cadang sepeda motor yang menyediakan 
                berbagai macam produk berkualitas. Kami berkomitmen untuk memberikan produk 
                berkualitas dengan harga kompetitif dan layanan pelanggan yang excellent.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Pendaftaran Akun</h3>
              <p className="text-gray-600 mb-6">
                Untuk menggunakan layanan tertentu, Anda mungkin perlu mendaftar akun. Anda setuju untuk:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Memberikan informasi yang akurat, lengkap, dan terkini</li>
                <li>Menjaga kerahasiaan kata sandi dan informasi akun Anda</li>
                <li> Bertanggung jawab atas semua aktivitas di bawah akun Anda</li>
                <li>Memberitahu kami segera tentang penggunaan tidak sah</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Produk dan Harga</h3>
              <p className="text-gray-600 mb-6">
                Kami berusaha untuk menampilkan informasi produk dan harga yang akurat. Namun, 
                kami tidak menjamin bahwa informasi tersebut bebas dari kesalahan. Harga dapat 
                berubah sewaktu-waktu tanpa pemberitahuan sebelumnya.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">5. Pemesanan dan Pembayaran</h3>
              <p className="text-gray-600 mb-6">
                Dengan melakukan pemesanan, Anda menyetujui untuk membeli produk sesuai dengan 
                syarat dan ketentuan yang berlaku. Pembayaran harus dilakukan sesuai dengan 
                metode yang tersedia. Kami berhak menolak atau membatalkan pesanan jika:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Produk tidak tersedia</li>
                <li>Informasi pemesanan tidak akurat</li>
                <li>Pembayaran tidak dapat diverifikasi</li>
                <li>Terjadi kesalahan dalam harga atau deskripsi produk</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">6. Pengiriman</h3>
              <p className="text-gray-600 mb-6">
                Kami akan berusaha untuk mengirimkan pesanan Anda sesuai dengan estimasi waktu 
                yang ditentukan. Namun, kami tidak bertanggung jawab atas keterlambatan yang 
                disebabkan oleh faktor di luar kendali kami (cuaca, bencana alam, dll.).
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">7. Kebijakan Pengembalian</h3>
              <p className="text-gray-600 mb-6">
                Produk dapat dikembalikan dalam kondisi berikut:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Produk cacat atau rusak saat diterima</li>
                <li>Produk tidak sesuai dengan pesanan</li>
                <li>Pengembalian dilakukan dalam 7 hari sejak penerimaan</li>
                <li>Produk dalam kondisi asli dan belum digunakan</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">8. Garansi Produk</h3>
              <p className="text-gray-600 mb-6">
                Semua produk yang kami jual dilengkapi garansi resmi dari produsen. Klaim garansi 
                harus disertai dengan bukti pembelian dan memenuhi syarat dan ketentuan garansi 
                yang berlaku.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">9. Hak Kekayaan Intelektual</h3>
              <p className="text-gray-600 mb-6">
                Semua konten di website YONO, termasuk namun tidak terbatas pada teks, gambar, 
                logo, dan desain, dilindungi oleh hak kekayaan intelektual. Anda tidak boleh 
                menggunakan, mereproduksi, atau mendistribusikan konten tanpa izin tertulis dari kami.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">10. Larangan Penggunaan</h3>
              <p className="text-gray-600 mb-6">
                Anda dilarang menggunakan website kami untuk:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Aktivitas ilegal atau tidak sah</li>
                <li>Mengirimkan virus atau malware</li>
                <li>Spam atau penipuan</li>
                <li>Melanggar hak orang lain</li>
                <li>Merusak atau mengganggu fungsi website</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">11. Pembatasan Tanggung Jawab</h3>
              <p className="text-gray-600 mb-6">
                YONO tidak bertanggung jawab atas kerugian langsung, tidak langsung, insidental, 
                atau konsekuensial yang timbul dari penggunaan website atau layanan kami, 
                sejauh diizinkan oleh hukum yang berlaku.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">12. Ganti Rugi</h3>
              <p className="text-gray-600 mb-6">
                Anda setuju untuk mengganti rugi dan membebaskan YONO dari segala klaim, 
                kerugian, atau biaya yang timbul dari pelanggaran Anda terhadap Syarat dan 
                Ketentuan ini.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">13. Perubahan Syarat dan Ketentuan</h3>
              <p className="text-gray-600 mb-6">
                Kami berhak mengubah Syarat dan Ketentuan ini kapan saja. Perubahan akan 
                berlaku efektif segera setelah diposting di website. Penggunaan berkelanjutan 
                dari website setelah perubahan constitutes acceptance dari syarat yang diubah.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">14. Hukum yang Berlaku</h3>
              <p className="text-gray-600 mb-6">
                Syarat dan Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum 
                Republik Indonesia. Setiap sengketa akan diselesaikan melalui perundingan 
                atau melalui pengadilan yang berwenang di Indonesia.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">15. Hubungi Kami</h3>
              <p className="text-gray-600 mb-6">
                Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600 mb-2">
                  <strong>Email:</strong> legal@yono-motorparts.com<br />
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