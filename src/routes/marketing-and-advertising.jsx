import headerImageOne from '../assets/marketingandadvertising-header-2.jpg';
import headerImageTwo from '../assets/marketingandadvertising-header-1.jpg';


export default function MarketingAndAdvertising() {

  const sidebarItems = [
    {
      href: '/whitelabel',
      title: 'White Label Licenses'
    },
    {
      href: '/virtual_business_licenses',
      title: 'Virtual Business Licenses'
    },
    {
      href: '/marketing_and_advertisement',
      title: 'Marketing and Advertising'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-8 pb-10">
      <h1 className="mb-6 pb-4 border-b">Marketing and Advertising Solutions</h1>
      <div className="flex flex-col md:flex-row md:space-x-16 space-y-16 md:space-y-0">
        <section className="md:w-3/5 space-y-6">
          <img className="block mx-auto drop-shadow-lg" src={headerImageOne} />
          <p><b>Advertising in the Utherverse 3D Network is a great way for you to brand your company, promote your business, and get tons of traffic for very little cost.</b></p>
          <p>We offer a variety of advertising packages and hot spots in high traffic areas. Utherverse is the most advanced 3D environment on the web, let us handle your marketing efforts for you.</p>
          <img className="block mx-auto drop-shadow-lg" src={headerImageTwo} />
          <p>For more information, please contact Zak Zarry, President at <a href="mailto:zak@utherverse.com">zak@utherverse.com</a></p>
        </section>
        <nav className="md:w-2/5 text-sm">
          <h2>The Company</h2>
          <ul className="sidebar-list">
            {sidebarItems.map(({ href, title }) =>
              <li className="border-b border-b-gray-200">
                <a className="text-gray-800 font-normal flex items-center space-x-2" href={href}>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-gray-600">{title}</span>
                </a>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
}