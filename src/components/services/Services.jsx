import React from 'react'
import './Services.css'
import { FaPrint,FaLaptop,FaCodeBranch,FaLaptopMedical } from "react-icons/fa";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { GiSmartphone,GiAutoRepair,GiTargetPoster } from "react-icons/gi";
import { TbSpeakerphone } from "react-icons/tb";
import { RiAdvertisementLine } from "react-icons/ri";

const printingServices = [
  {
    icon: (<FaPrint/>),
    title: 'Up to A4 Size Printing',
    description: 'High-quality colour and black & white printing at affordable rates. A5, A6, business cards available.',
  },
  {
    icon: (<HiOutlineSquare3Stack3D/>),
    title: 'Laminating',
    description: 'Protect your important documents with professional laminating.',
  },
  {
    icon: (<MdOutlineDocumentScanner/>),
    title: 'Scanning',
    description: 'Fast, clear document scanning to PDF or email delivery.',
  },
]

const advertServices = [
  {
    icon: (<GiTargetPoster/>),
    title: 'Poster & Flyer Design',
    description: 'Event promos, announcements, sale posters.',
  },
  {
    icon: (<FaPrint/>),
    title: 'Banner Printing',
    description: 'Indoor and outdoor banners, roll-ups, pull-ups.',
  },
  {
    icon: (<RiAdvertisementLine/>),
    title: 'Event Advertising',
    description: 'Complete print packs for launches and markets, as well as promoting your events on our FaceBook page.',
  },
]

const repairServices = [
  {
    icon: (<FaLaptop/>),
    title: 'Laptop Repair',
    description: 'Screen, keyboard, battery, hardware change, building of computers & camera installations.',
  },
  {
    icon: (<GiSmartphone/>),
    title: 'Operating System',
    description: 'Installation of any Windows, Linux, Ubuntu, MacOs operating system.',
  },
  {
    icon: (<FaCodeBranch/>),
    title: 'Software',
    description: 'Software installs, virus removal, data recovery, purchase of software & installation of Microsoft Office.',
  },
]

const ServiceCard = ({ icon, title, description }) => (
  <div className='service-card'>
    <div className='service-icon'>{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
)

const ServiceSection = ({ icon, title, cards }) => (
  <div className="service-section">
    <div className="section-heading">
      <span className="section-icon">{icon}</span>
      <h2>{title}</h2>
    </div>
    <div className="cards-grid">
      {cards.map((card, i) => (
        <ServiceCard key={i} {...card} />
      ))}
    </div>
  </div>
)


const Services = () => {
  return (
    <div className='Services'>

    <div className="services-content">
    <span className="services-badge">our services</span>
    <h1 className="services-title">
        <span className="line1">Three shops,</span>
        <span className="line2">one address.</span>
    </h1>
    <p className="services-subtitle">Whether your laptop died, you need 500 flyers by Friday, 
    or you want a banner for your grand opening we handle all of it in house, with no runaround.</p>

    <div className="services-cards">
     <ServiceSection
        icon={<FaPrint/>}
        title="Printing Services"
        cards={printingServices}
      />
      <ServiceSection
        icon={<TbSpeakerphone/>}
        title="Advertising Services"
        cards={advertServices}
      />
      <ServiceSection
        icon={<FaLaptopMedical/>}
        title="IT Services"
        cards={repairServices}
      />
    </div>
    </div>

    </div>
  )
}

export default Services
