import Thumbnail from './Thumbnail';

/* "as seen on" logos and wordmarks */
import washingtonPost from './assets/thewashingtonpost.png';
import cnn from './assets/cnn.png';
import inc from './assets/inc.png';
import wired from './assets/wired.png';
import forbes from './assets/forbes.png';

import utherverse3 from './assets/utherverse3.jpeg';
import virtualcon from './assets/virtualcon.png';
import utherconvention from './assets/utherconvention.png';
import utheracademy from './assets/utheracademy.png';

const asSeenOn = [
  { name: 'The Washington Post', src: washingtonPost },
  { name: 'CNN', src: cnn },
  { name: 'INC', src: inc },
  { name: 'Wired', src: wired },
  { name: 'Forbes', src: forbes },
];

import Header from './Header';

function App() {
  return (
    <>
      <Header />
      {/* who we are section */}
      <section className="flex flex-col items-center lg:items-start mx-4 lg:flex-row justify-between max-w-5xl lg:mx-auto mb-10">
        <div className="max-w-xl mb-6 lg:mb-0">
          <h2>Who we are</h2>
          <p>Utherverse is a social network of interconnected virtual worlds. We offer opportunities for people to meet, play and work together regardless of their physical location. You explore this rich and diverse network with an Avatar, a virtual representation of your online persona.</p>
        </div>
        <div>
          <table
            className="uppercase font-futura"
          >
            {
              [
                ['founded', '2003'],
                ['userbase', '50, 000, 000'],
                ['virtual transactions', 'USD 15, 000, 000, 000']
              ]
                .map(([title, data]) =>
                  <tr className="h-10 border-b border-b-gray-300">
                    <td className="font-medium pr-4">{title}</td>
                    <td className="text-gray-500">{data}</td>
                  </tr>
                )
            }
          </table>
        </div>
      </section>
      {/* end who we are section */}
      {/* as seen on section */}
      <section className="flex flex-col items-center md:flex-row justify-between max-w-5xl mx-auto mb-10 px-8">
        {asSeenOn.map(({ name, src }) =>
          <img src={src} alt={name} className="h-full mb-8 mb:mb-0" />
        )}
      </section>
      {/* end as seen on section */}
      {/* featured brands and products */}
      <section className="max-w-5xl mx-4 md:mx-auto mb-10 overflow-x-scroll md:overflow-x-auto">
        <h2 className="mb-4">Featured Updates</h2>
        <div className=" flex space-x-8">
          <Thumbnail
            title="Utherverse.io"
            description="Our third generation metaverse platform. Coming in Q2 2022."
            image={utherverse3}
            url="https://utherverse.io"
          />
          <Thumbnail
            title="VirtualCon 2022"
            description="VirtualCon 2022 is coming to the metaverse June 24-26th, 2022!"
            image={virtualcon}
            url="http://www.utherconvention.com/VirtualCon2022"
          />
          <Thumbnail
            title="Utheracademy"
            description="UtherAcademy is the new generation of 3D online education."
            image={utheracademy}
            url="http://utheracademy.com"
          />
          <Thumbnail
            title="Utherconvention"
            description="A virtual convention platform for events, meetings, seminars, and more."
            image={utherconvention}
            url="http://www.utherconvention.com"
          />
        </div>
      </section>
      {/* end featured brands and products */}
      {/* contact us section */}
      <section className="bg-gray-100 py-16 flex-col md:flex-row flex items-center justify-center font-bold mb-10 px-4 space-y-4 md:space-y-0">
        <p>For Business or Press Inquires
        </p>
        <a href="mailto:business@utherverse.com" className="bg-black ml-4 px-6 py-2 font-futura-bold text-white whitespace-nowrap">Contact us</a>
      </section>
      {/* end contact us section */}
    </>
  );
}

export default App;
