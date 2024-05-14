import IMAGES from "@constants/images";
import {
  FaTiktok,
  FaFacebook,
  FaTelegram,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Link from "next/link";
const FooterAff = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-14 py-20">
      <img
        src={IMAGES.LOGO_AFF}
        className="black-and-white h-10 w-auto"
        alt=""
      />
      <div className="flex flex-wrap font-semibold text-gray-600  gap-6 justify-center items-center">
        <p className="hover:text-[#FF0303]">Home</p>
        <p className="hover:text-[#FF0303]">About us</p>
        <p className="hover:text-[#FF0303]">Contact us</p>
        <p className="hover:text-[#FF0303]">Terms & Conditions</p>
      </div>
      <div className="flex justify-center items-center gap-6">
        <Link href="https://web.facebook.com/ADCOD.official" target="_blank">
          <FaFacebook
            size={35}
            className="bg-slate-200 p-2 rounded-lg text-gray-800"
          />
        </Link>
        <Link href="https://www.instagram.com/adcod.co" target="_blank">
          <FaInstagram
            size={35}
            className="bg-slate-200 p-2 rounded-lg text-gray-800"
          />
        </Link>
        <Link href="https://t.me/Adcod_co" target="_blank">
          <FaTelegram
            size={35}
            className="bg-slate-200 p-2 rounded-lg text-gray-800"
          />
        </Link>

        <Link href="https://www.linkedin.com/company/adcod-co" target="_blank">
          <FaLinkedinIn
            size={35}
            className="bg-slate-200 p-2 rounded-lg text-gray-800"
          />
        </Link>

        <FaTiktok
          size={35}
          className="bg-slate-200 p-2 rounded-lg text-gray-800"
        />
      </div>
      <p className="text-slate-400 text-sm font-semibold">
        2023 <span className="text-gray-800">ADCOD Network</span>
      </p>
    </div>
  );
};

export default FooterAff;
