import wordmark from './assets/UVtext_white.png';
import { IoLogoTwitter, IoLogoFacebook, IoLogoTiktok, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-utherverse-gray text-white ">
      <div className="max-w-5xl mx-auto py-8 px-8 space-y-8">
        <div className="flex flex-col md:flex-row">
          <div className="md:max-w-sm text-center md:text-left mb-8 md:mb-0 md:mr-6">
            <img src={wordmark} className="mx-auto md:mx-0 h-20" alt="Utherverse Digital" />
            <p class="text-sm mb-4">Utherverse Digital Inc. introduces an entirely new way of social and digital communication. We create virtual environments that include live entertainment, online dating, charitable events, business opportunities and even education.</p>
            <div className="flex justify-center md:justify-start text-xl space-x-4">
              <a href="https://www.instagram.com/utherverse/" className="text-white">
                <IoLogoInstagram />
              </a>
              <a href="https://www.facebook.com/UtherverseDigital" className="text-white">
                <IoLogoFacebook />
              </a>
              <a href="https://www.tiktok.com/@utherverse" className="text-white">
                <IoLogoTiktok />
              </a>
              <a href="https://twitter.com/Utherverse" className="text-white">
                <IoLogoTwitter />
              </a>
              <a href="https://ca.linkedin.com/company/utherverse-digital-inc" className="text-white">
                <IoLogoLinkedin />
              </a>
            </div>
          </div>
          {/* links */}
          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 text-center md:text-left md:space-x-8 flex-grow justify-center">
            <div>
              <p className="font-bold mb-1 text-gray-300">Company</p>
              <ul>
                <li><a className="text-white font-normal font-futura text-lg" href="/about-us">About Us</a></li>
                <li><a className="text-white font-normal font-futura text-lg" href="/mission">Mission</a></li>
              </ul>
            </div>
            <div>
              <p className="font-bold mb-1 text-gray-300">Business</p>
              <ul>
                <li><a className="text-white font-normal font-futura text-lg" href="/white-label-licenses">White Label Licenses</a></li>
                <li><a className="text-white font-normal font-futura text-lg" href="/virtual-business-licenses">Virtual Business Licenses</a></li>
                <li><a className="text-white font-normal font-futura text-lg" href="/marketing-and-advertising">Marketing and Advertising</a></li>
              </ul>
            </div>
            <div>
              <p className="font-bold mb-1 text-gray-300">More</p>
              <ul>
                <li><a className="text-white font-normal font-futura text-lg" href="/contact-us">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="border-gray-400" />
        <p className="text-center">
          <span>&copy; </span> {`${currentYear} Utherverse Digital Inc.`}
        </p>
      </div>
    </footer>
  )
}