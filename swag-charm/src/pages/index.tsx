import Navbar from '@/components/Navbar';
import BarButtons from '@/components/BarButtons';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <BarButtons></BarButtons>
      pepe
    </>
  );
}
