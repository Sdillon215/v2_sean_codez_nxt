const projectData = [
  {
    id: 'dmvans',
    title: 'Dmvans Campervans',
    imgPath: '/dmvans_screenshot_desk.png',
    imgAltText: 'Dmvans Campervans website screenshot',
    shortDescription:
      'A web app for a Camper Van manufacturing company located in Colorado built with flutter and Dart.',
    fullDescription:
      'The Dmvans app showcases the van models as well as a van configuration feature allowing for customers to customize their van, place a deposit, and save the configuration to their account. The sales team could then view and further modify a customers van configuration through the admin app prior to sending exact build specification to the build teams via an integration with Asana.',
    url: 'https://dmvans-dev.web.app/',
    techStack: ['Flutter', 'Dart', 'Firebase', 'GCP', 'JavaScript', 'Hasura', 'PostgreSQL', 'GraphQL', 'Shopify', 'Asana'],
  },
  {
    id: 'nexjs-blog',
    title: 'Next.js Blog',
    imgPath: '/nextjs_blog.png',
    imgAltText: 'Nextjs Blog website screenshot',
    shortDescription:
      'A simple blog built with TypeScript, React, Next.js, and Tailwind CSS which explains and showcases Static Generation and Server-side Rendering.',
    fullDescription: 'A simple blog built with TypeScript, React, Next.js, and Tailwind CSS which explains and showcases Static Generation and Server-side Rendering.',
    url: 'https://nextjs-blog-sigma-two-12.vercel.app/',
    techStack: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Vercel'],
  },
  {
    id: 'nextjs-dashboard',
    title: 'Next.js Dashboard',
    imgPath: '/nextjs_dash.png',
    imgAltText: 'Next.js financial dashboard login page screenshot',
    shortDescription:
      'A financial dashboard built with TypeScript, React, Next.js, and Tailwind CSS. The dashboard showcases a login page, a dashboard page, nested invoice and customers pages.',
    fullDescription:
      'A financial dashboard built with TypeScript, React, Next.js, and Tailwind CSS. The dashboard showcases a login page, a dashboard page, nested invoice and customers pages. Users can login, view their dashboard, view invoices, and view customers. The dashboard is built with a responsive design and is mobile friendly. NextAuth was used for authentication and authorization. The app is also integrated with a PostgreSQL database using Vercel/Postgres.',
    url: 'https://nextjs-dashboard-sand-nine.vercel.app/',
    techStack: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Vercel', 'NextAuth', 'PostgreSQL'],
  },
];

module.exports = {
  projectData,
};