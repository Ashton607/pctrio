import { useState } from 'react'
import './Ourwork.css'
import PCBuild from '../../assets/PCBuild.jpg'
import HardwareImg from '../../assets/hardware.jpg'
import cctvImg from '../../assets/cctv.jpg'
import bulkDocsImg from '../../assets/bulkDocsImg.jpg'
import photoPrintingImg from '../../assets/photoPrintingImg.jpg'
import laminatingImg from '../../assets/laminatingImg.jpg'
import eventPosterImg from '../../assets/eventPosterImg.jpg'
import bannersImg from '../../assets/bannersImg.jpg'
import socialImg from '../../assets/socialImg.jpg'
import scanningImg from '../../assets/scanningImg.jpg'
import osImg from '../../assets/osImg.jpg'
import officeImg from '../../assets/officeImg.avif'
import perfImg from '../../assets/perfImg.jpg'
import securityImg from '../../assets/security.avif'

const tabsData = {
  printing: {
    color: 'green',
    items: [
      {
        image: bulkDocsImg,
        badge: 'Documents',
        title: 'Bulk Document Printing',
        description: 'High-volume black & white and colour printing. Collated, stapled, or bound — ready for pickup same day.',
        tags: ['Bulk', 'A4 / A3', 'Same Day'],
      },
      {
        image: photoPrintingImg,
        badge: 'Photos',
        title: 'Photo Printing',
        description: 'Lab-quality photo prints in 4×6, 5×7, A4, and A3. Matte or gloss finish. Ideal for portraits, events, and gifts.',
        tags: ['Photos', 'Gloss / Matte', 'Custom Size'],
      },
      {
        image: laminatingImg,
        badge: 'Finishing',
        title: 'Laminating',
        description: 'Pouch laminating up to A3 in matte or gloss. Protects menus, ID cards, certificates, and signage.',
        tags: ['A4 / A3', 'Matte / Gloss', 'Walk-in'],
      },
      {
        image: scanningImg,
        badge: 'Scanning',
        title: 'Scanning to PDF / USB',
        description: 'High-resolution flatbed scanning. Output to PDF, JPEG, or PNG saved to your USB or emailed directly.',
        tags: ['PDF', 'USB', 'High-res'],
      },
    ],
  },
  advertising: {
    color: 'orange',
    items: [
      {
        image: eventPosterImg,
        badge: 'Events',
        title: 'Event Poster Design & Print',
        description: 'Designed in-house and printed sharp. A3 and A2 event posters for gigs, markets, community events, and business launches.',
        tags: ['Posters', 'Design', 'Events'],
      },
      {
        image: bannersImg,
        badge: 'Banners',
        title: 'Pull-Up Banners',
        description: 'Retractable roll-up banners printed and assembled. Common sizes in stock; custom dimensions available.',
        tags: ['Banners', 'Roll-up', 'Indoor / Outdoor'],
      },
      {
        image: socialImg,
        badge: 'Brand',
        title: 'Social Media Marketing',
        description: 'We promote your business brand or business event on our socials.',
        tags: ['Business', 'Brand', 'Marketing'],
      },
    ],
  },
  technology: {
    color: 'blue',
    items: [
      {
        image: PCBuild,
        badge: 'Hardware',
        title: 'Building of Computers',
        description: 'Custom PC builds assembled from individual components (CPU, motherboard, RAM, storage, GPU, PSU) tailored to the customers budget and needs, tested for stability before handoff.',
        tags: ['CPU', 'Hardware', 'Motherboard'],
      },
      {
        image: HardwareImg,
        badge: 'Hardware',
        title: 'Hardware Change',
        description: 'Diagnosing and swapping out faulty or outdated components RAM, hard drives/SSDs, power supplies, fans, and more to restore or improve device performance.',
        tags: ['RAM', 'Hard Drives', 'Diagnostics'],
      },
      {
        image: cctvImg,
        badge: 'Hardware',
        title: 'Camera Installations ',
        description: 'Setup and mounting of security or surveillance cameras, including wiring and connecting them to a viewing/recording system.',
        tags: ['Camera', 'Install', 'CCTV'],
      },
      {
        image: osImg,
        badge: 'Software',
        title: 'OS Installations ',
        description: 'Clean installation or reinstallation of any major operating system(Windows, Linux, Ubuntu, Mac OS), configured and ready to use.',
        tags: ['Windows', 'Install', 'Operating System'],
      },
      {
        image: officeImg,
        badge: 'Software',
        title: 'Microsoft Office Installation',
        description: 'Setup of Microsofts productivity suite (Word, Excel, PowerPoint, Outlook, etc.) on the customers device.',
        tags: ['Microsoft Office', 'Install', 'Word', 'Excel','PowerPoint'],
      },
      {
        image: perfImg,
        badge: 'Software',
        title: 'Speeding up PCs & Laptops ',
        description: 'Performance tuning through removing unnecessary startup programs, clearing junk files, and optimizing system settings to make slow devices run faster.',
        tags: ['Performance tuning', 'Junk Removal', 'Optimization', 'System','Settings'],
      },
      {
        image: securityImg,
        badge: 'Security',
        title: 'Installation of Anti-Virus',
        description: ' Installing and configuring antivirus software to protect the device from malware, viruses, and other online threats.',
        tags: ['Antivirus', 'Protection', 'Malware', 'System','threats'],
      },
    ],
  },
}

const Ourwork = () => {
const [activeTab, setActiveTab] = useState('printing')
const currentTab = tabsData[activeTab]

  return (
    <div className='Ourwork' id='ourwork'>

    <div className="ourwork-content">
    <span className="ourwork-badge">our work</span>
    <h1 className="ourwork-title">
        <span className="line1">What we've done,</span>
        <span className="line2">for people.</span>
    </h1>
    <p className="ourwork-subtitle">Real jobs across repairs, printing, and advertising 
    the kind of work that comes through our door every week.</p>

     <div className="ourwork-tabs">
      <div className="tabs-header">
        {Object.keys(tabsData).map((tab) => (
          <button
            key={tab}
            className={`tab-btn ${tabsData[tab].color} ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="tabs-content">
        {currentTab.items.map((item, i) => (
          <div className="work-item-card" key={i}>
            <div className="work-item-image">
              <img src={item.image} alt={item.title} />
              <span className={`work-item-badge ${currentTab.color}`}>{item.badge}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className="work-item-tags">
              {item.tags.map((tag, j) => (
                <span className="work-item-tag" key={j}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div> 

    </div>
  )
}

export default Ourwork
