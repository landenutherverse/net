import headerImage from '../assets/about-us.jpg';

export default function About() {

  const sidebarItems = [
    {
      href: '/about',
      title: 'About Us'
    },
    {
      href: '/mission',
      title: 'Mission'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-8 pb-10">
      <h1 className="mb-6 pb-4 border-b">About Us</h1>
      <div className="flex flex-col md:flex-row md:space-x-16 space-y-16 md:space-y-0">
        <section className="md:w-3/5 space-y-6">
          <img className="block mx-auto drop-shadow-lg" src={headerImage} />
          <p>Utherverse Digital Inc. introduces an entirely new way of social and digital communication. We create virtual environments that include live entertainment, online dating, charitable events, business opportunities and even education.</p>
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

          <h2>Featured Virtual Worlds</h2>
          <ul className="text-sm">
            <li className="flex space-x-2 items-center pb-4 pt-2 border-b">
              <img className="h-16" src="src/assets/utheracademy.png" alt="UtherAcademy" />
              <div>
                <a target="_blank" href="http://www.utheracademy.com">UtherAcademy</a>
                <p>UtherAcademy is the new generation of 3D online education.</p>
              </div>
            </li>
            <li className="flex space-x-2 items-center py-4 border-b">
              <img className="h-16" src="src/assets/utherconvention.png" alt="UtherConvention" />
              <div>
                <a target="_blank" href="http://www.utherconvention.com">UtherConvention</a>
                <p>The FIRST planning and execution company that holds complete VIRTUAL conventions.</p>
              </div>
            </li>
          </ul>

        </nav>
      </div>
    </div>
  );
}