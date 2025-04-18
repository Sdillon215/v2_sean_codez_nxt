import Image from 'next/image';
import homeBgDesktop from '/public/home-bg.jpg';
import homeBgMobile from '/public/home-bg-mb.jpg';

interface ContinuousTransitionImageProps {
  transitionProgress: number;
  isInverted: boolean;
}

const ContinuousTransitionImage: React.FC<ContinuousTransitionImageProps> = ({ transitionProgress, isInverted }) => {
  const filterValue = `invert(${isInverted ? transitionProgress * 100 : (1 - transitionProgress) * 100}%)`;

  return (
    <>
      <Image
        priority={true}
        src={homeBgMobile}
        fill
        placeholder="blur"
        className="z-0 block lg:hidden object-cover object-bottom"
        sizes="100vw"
        style={{
          filter: filterValue,
          transition: "filter 0.1s ease"
        }}
        alt="background image of an alpine lake in Yosemite National Park"
      />
      <Image
        priority={true}
        src={homeBgDesktop}
        fill
        placeholder="blur"
        className={`z-0 hidden lg:block object-right-bottom object-cover`}
        style={{
          filter: filterValue,
          transition: "filter 0.1s ease"
        }}
        alt="background image of an alpine lake in Yosemite National Park"
      />
    </>
  );
};

export default ContinuousTransitionImage;