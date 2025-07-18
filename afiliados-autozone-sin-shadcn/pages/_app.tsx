import '@/styles/globals.css'
import Link from 'next/link'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
        <h1 className="text-lg font-bold">Afiliados Autozone</h1>
        <div className="space-x-4">
          <Link href="/" className="hover:underline">Inicio</Link>
          <Link href="/inventario" className="hover:underline">Inventario</Link>
        </div>
      </nav>
      <main className="mt-6 px-4">
        <Component {...pageProps} />
      </main>
    </div>
  )
}