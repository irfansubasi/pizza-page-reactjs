import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.svg';

export default function MainHeader() {
  return (
    <header className="bg-[url('../../assets/images/home-banner.png')] bg-cover bg-center bg-no-repeat h-screen flex flex-col justify-start items-center p-12">
      <div className="container mx-auto flex flex-col justify-center items-center text-white max-w-sm lg:max-w-xl gap-[2rem] md:gap-6 lg:gap-20">
        <img src={Logo} alt="Logo" className="w-80 h-auto" />
        <div className="text-center">
          <p className="font-satisfy text-yellowC text-2xl">fırsatı kaçırma</p>
          <p className="font-roboto font-light uppercase text-[4.7rem] leading-none">
            kod acıktırır pizza, doyurur
          </p>
        </div>
        <Link
          to="/order"
          className="bg-yellowC text-greyDarkC font-barlow font-semibold py-3 px-12 rounded-full hover:opacity-80"
        >
          ACIKTIM
        </Link>
      </div>
    </header>
  );
}
