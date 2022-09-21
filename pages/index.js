import Navbar from './components/navbar';
import Image from 'next/image';

export default function Home() {
  return <div>
      <Navbar/>
      <p>This is the Home page</p>
      <div class="gif">
        <Image src="https://media0.giphy.com/media/3o7aD7qEvVKEdCoOtO/giphy.gif" height={300} width={300}/>
      </div>
    </div>
}
