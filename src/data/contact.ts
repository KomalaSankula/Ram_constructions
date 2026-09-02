export interface CompanyDetails {
  name: string
  phone: string
  email: string
  address: string
  city: string
  state: string
  country: string
  establishedYear: string
  tagline: string
  aboutSummary: string
  hours: string
}

export const companyDetails: CompanyDetails = {
  name: 'RAM Construction',
  phone: '+91 98765 43210',
  email: 'info@ramconstruction.com',
  address: 'Plot 42, Road No. 36, Jubilee Hills, Hyderabad, Telangana 500033, India',
  city: 'Hyderabad',
  state: 'Telangana',
  country: 'India',
  establishedYear: '2014',
  tagline: 'Building Dreams. Creating Tomorrow.',
  aboutSummary: 'RAM Construction is a trusted name in the construction industry, delivering high-quality residential, commercial and interior solutions. With a commitment to excellence and innovation, we turn ideas into reality.',
  hours: 'Mon - Sat: 9:00 AM - 7:00 PM',
}

export const whyChooseUsData = {
  title: 'Why Clients Choose RAM Construction',
  subtitle: 'WHY CLIENTS TRUST US',
  points: [
    {
      title: 'Quality Assurance',
      desc: 'We never compromise on quality.',
    },
    {
      title: 'On-Time Delivery',
      desc: 'We value your time and deliver on schedule.',
    },
    {
      title: 'Transparent Process',
      desc: 'Clear communication at every step.',
    },
    {
      title: 'Customer Satisfaction',
      desc: 'Your satisfaction is our success.',
    },
  ],
  stats: [
    { value: '100+', label: 'Projects Completed' },
    { value: '10+', label: 'Years Experience' },
    { value: '50+', label: 'Expert Professionals' },
  ],
  image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80',
}

export const processSteps = [
  {
    step: '01',
    title: 'Consultation',
    desc: 'Understanding your needs.',
    detail: 'We begin with an in-depth discovery session to assess your vision, lifestyle needs, budget parameters, and site topography.',
  },
  {
    step: '02',
    title: 'Planning',
    desc: 'Designing the perfect plan.',
    detail: 'Our licensed architects create comprehensive 3D visual renders, structural engineering drawings, and obtain all necessary municipal permits.',
  },
  {
    step: '03',
    title: 'Execution',
    desc: 'Building with precision.',
    detail: 'Experienced site engineers supervise quality-tested concrete, steel fabrication, electrical networks, and structural masonry on a daily basis.',
  },
  {
    step: '04',
    title: 'Handover',
    desc: 'Delivering beyond your expectations.',
    detail: 'Comprehensive 100-point quality audit, complete deep cleaning, full warranty documentation, and celebratory key handover.',
  },
]

export const heroValueProps = [
  {
    title: 'Quality Materials',
    desc: 'We use premium quality materials for durability.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Expert Team',
    desc: 'Our experienced professionals ensure excellence.',
    icon: 'Users',
  },
  {
    title: 'On-Time Delivery',
    desc: 'We deliver projects on time, every time.',
    icon: 'Clock',
  },
  {
    title: 'Client Satisfaction',
    desc: 'Your satisfaction is our top priority.',
    icon: 'Smile',
  },
]
