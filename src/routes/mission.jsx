import headerImage from '../assets/mission.jpg';

export default function Mission() {

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
      <h1 className="mb-6 pb-4 border-b">Our Mission</h1>
      <div className="flex flex-col md:flex-row md:space-x-16 space-y-16 md:space-y-0">
        <section className="md:w-3/5 space-y-6">
          <img className="block mx-auto drop-shadow-lg" src={headerImage} />
          <p>It is the purpose and intention of Utherverse Digital is to create a new kind of human interaction where people are relieved of their real-world burdens - whether those are physical, geographical, social, or educational, and where true freedom is the highest priority.</p>
          <p>We provide access to the quality and rewarding experiences including entertainment, shopping and business opportunities to even the most disadvantaged people anywhere in the world.</p>
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