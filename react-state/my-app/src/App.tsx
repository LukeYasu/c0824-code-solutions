import { Header } from './Header';
import { ImageContainer } from './ImageContainer';
import { ImageCaption } from './ImageCaption';
import { ImageDescription } from './ImageDescription';
import { ButtonContainer } from './ButtonContainer';
import './App.css';

const headerText = 'React Image Bank';
const imageSrcs = [
  '/mega-tyranitar.png',
  '/mega-garchomp.avif',
  'starry-sky.jpeg',
];
const imageCaps = [
  'tyranitar in its mega evolution form',
  'garchomp in its mega evolution form',
  'starry sky',
];
const imageDescrips = [
  'Due to the colossal power poured into it, this Pokémons back split right open. Its destructive instincts are the only thing keeping it moving.',
  'Its arms and wings melted into something like scythes. Mad with rage, it rampages on and on.',
  'the sky do be starry',
];
const buttonLabel = 'Click for Next Image';

export default function App() {
  return (
    <>
      <Header text={headerText} />
      <ImageContainer src={imageSrcs} />
      <ImageCaption caption={imageCaps} />
      <ImageDescription desc={imageDescrips} />
      <ButtonContainer label={buttonLabel} />
    </>
  );
}
