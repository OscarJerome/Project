import Image from 'next/image'
import Footer from './component/Footer'
import About from './component/About'
import NavBar from './component/NavBar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <NavBar/>
        <About/>
        <Footer/>
      </div>

    </main>
  )
}
