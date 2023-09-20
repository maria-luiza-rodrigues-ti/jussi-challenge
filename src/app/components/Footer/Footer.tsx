import Image from "next/image";

import WppLogo from "@/assets/wppcompany.svg";
import FacebookIcon from "@/assets/facebook.svg";
import InstagramIcon from "@/assets/instagram.svg";
import LinkedinIcon from "@/assets/linkedin.svg";

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="flex justify-between items-center max-w-screen-lg w-full mx-auto px-6 lg:px-0">
        <a href="https://www.wpp.com" target="_blank" rel="noreferrer">
          <Image src={WppLogo} alt="Logo Wpp" />
        </a>
        <div className="flex gap-x-[17px] py-6">
          <a
            href="https://www.facebook.com/agencia.jussi/?locale=pt_BR"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={FacebookIcon} alt="Ícone Facebook" />
          </a>
          <a
            href="https://www.instagram.com/jussi/?hl=pt"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={InstagramIcon} alt="Ícone Instagram" />
          </a>
          <a
            href="https://www.linkedin.com/company/agencia-jussi/?originalSubdomain=br"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={LinkedinIcon} alt="Ícone Linkedin" />
          </a>
        </div>
      </div>
    </footer>
  );
}
