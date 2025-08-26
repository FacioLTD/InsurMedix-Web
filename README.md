# InsurMedix - Insurance for those who live in motion

InsurMedix is a trailblazing global InsurTech group, fully licensed across all 50 U.S. states and throughout Europe. We're redefining global insurance - from travel and health (Global Care) to the future of digital nomads.

## 🚀 Features

- **Global Care Active**: Unified medical & travel coverage for sports organizations
- **Infinity Village**: Seamless residency, insurance, and global support for digital nomads
- **Moving Insurance**: Comprehensive protection for every move, local or global
- **Modern Web Platform**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Responsive Design**: Optimized for all devices and screen sizes
- **SEO Optimized**: Complete meta tags, sitemap, and robots.txt

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel, Netlify, or any hosting platform

## 📁 Project Structure

```
InsurMedix/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── careers/           # Careers page
│   ├── global-care/       # Global Care Active page
│   ├── infinity-village/  # Infinity Village page
│   ├── partner/           # Partner page
│   ├── privacy/           # Privacy policy
│   ├── terms/             # Terms and conditions
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout with metadata
├── components/             # Reusable UI components
│   └── ui/                # UI components (Header, Footer, etc.)
├── public/                 # Static assets
│   ├── images/            # Image assets
│   ├── sitemap.xml        # SEO sitemap
│   └── robots.txt         # SEO robots file
└── package.json            # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/insurmedix.git
cd insurmedix
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run dev:clean` - Clean build cache and start dev server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Pages

- **Homepage** (`/`) - Main landing page with hero section and services overview
- **About** (`/about`) - Company information and mission
- **Global Care Active** (`/global-care`) - Sports organizations insurance
- **Infinity Village** (`/infinity-village`) - Digital nomad insurance and co-living
- **Partner** (`/partner`) - Partnership opportunities and application
- **Careers** (`/careers`) - Job openings and team application
- **Terms** (`/terms`) - Terms and conditions
- **Privacy** (`/privacy`) - Privacy policy

## 🎨 Design System

### Colors
- **Primary**: Orange (`orange-500`, `orange-600`)
- **Secondary**: Black (`black-950`, `black-900`)
- **Accent**: Blue (`blue-600`, `blue-400`)
- **Neutral**: Gray scale for text and backgrounds

### Typography
- **Headings**: Bold, large scale typography
- **Body**: Readable, medium weight text
- **Buttons**: Semibold, rounded corners

### Components
- **Header**: Fixed navigation with dropdown menus
- **Footer**: Multi-column layout with links and social media
- **Cards**: Rounded corners with shadows and hover effects
- **Forms**: Clean, accessible form components

## 🔧 Customization

### Adding New Pages
1. Create a new directory in `app/`
2. Add `page.tsx` with your content
3. Optionally add `layout.tsx` for page-specific metadata
4. Update `sitemap.xml` and navigation

### Styling
- Use Tailwind CSS utility classes
- Custom styles in `app/globals.css`
- Component-specific styles in individual component files

### Metadata
- Update page-specific metadata in `layout.tsx` files
- Global metadata in `app/layout.tsx`
- SEO optimization with proper titles, descriptions, and Open Graph tags

## 📱 Responsive Design

The website is fully responsive with:
- Mobile-first approach
- Breakpoint-specific layouts
- Optimized navigation for mobile devices
- Touch-friendly interactions

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Vercel will auto-detect Next.js
3. Deploy with zero configuration

### Other Platforms
- **Netlify**: Use `npm run build` and deploy `out` directory
- **AWS S3**: Build and upload static files
- **Custom Server**: Use `npm run build` and `npm run start`

## 📊 Performance

- **Lighthouse Score**: Optimized for performance, accessibility, and SEO
- **Image Optimization**: Next.js Image component with automatic optimization
- **Code Splitting**: Automatic code splitting for optimal loading
- **Caching**: Built-in caching strategies

## 🔒 Security

- **HTTPS**: Enforced in production
- **Content Security Policy**: Configurable security headers
- **Input Validation**: Form validation and sanitization
- **Dependencies**: Regular security updates

## 📈 Analytics & SEO

- **Meta Tags**: Complete Open Graph and Twitter Card support
- **Sitemap**: XML sitemap for search engines
- **Robots.txt**: Proper crawling instructions
- **Structured Data**: Ready for schema markup implementation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary software owned by InsurMedix Inc.

## 📞 Contact

- **Website**: [https://insurmedix.com](https://insurmedix.com)
- **LinkedIn**: [InsurMedix Inc.](https://www.linkedin.com/company/insurmedix-inc/)
- **Facebook**: [InsurMedix](http://facebook.com/InsurMedix-100075952208399/)

---

Built with ❤️ by the InsurMedix team 