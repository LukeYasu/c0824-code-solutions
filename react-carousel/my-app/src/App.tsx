import './App.css';
import { Carousel } from './Carousel';

function App() {
  return (
    <Carousel
      images={[
        {
          src: '/images/fushiguro.webp',
          alt: 'Megumi Fushiguro',
        },
        {
          src: '/images/inumaki.webp',
          alt: 'Toge Inumaki',
        },
        {
          src: '/images/itadori.webp',
          alt: 'Yuji Itadori',
        },
        {
          src: '/images/kugisaki.webp',
          alt: 'Nobara Kugisaki',
        },
        {
          src: '/images/panda.webp',
          alt: 'Panda',
        },
        {
          src: '/images/zen-in.webp',
          alt: "Maki Zen'in",
        },
      ]}
    />
  );
}

export default App;
