# Transglobal Movers INC. Website

A modern, professional website for Transglobal Movers INC., a comprehensive logistics and freight forwarding company based in the Philippines with global reach.

## 🚀 Features

- **Modern Design**: Clean, professional interface using React 19 + TypeScript + Tailwind CSS 4
- **Responsive**: Fully mobile-optimized for all devices
- **22 Pages**: Home, About, Services overview, 17 individual service pages, and Contact
- **Service Categories**:
  - **Freight Forwarding**: Air Freight, Sea Freight, NVOCC, Customs Clearance, Domestic Forwarding, Courier & Distribution, Project Cargo
  - **Moving & Relocation**: Moving & Storage, Packing & Crating, Warehousing, Plant Relocation, Office Removals, Household Removals, Personal Effects, Pet Shipment, Automobile, Door-to-Door
- **Contact Form**: Integrated with Web3Forms for email submissions
- **SEO Optimized**: Meta tags and semantic HTML structure
- **Fast Performance**: Vite build system with optimized assets

## 🛠️ Tech Stack

- **React 19.2.0** - Latest React with modern features
- **TypeScript 5.9.3** - Type-safe development
- **Vite 7.2.4** - Lightning-fast build tool
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **React Router DOM 7.1.4** - Client-side routing
- **Font Awesome 7.0.1** - Icon library (via CDN)
- **Web3Forms** - Contact form email service

## 📋 Prerequisites

- Node.js 18+ and npm/yarn
- Web3Forms API key (free at [web3forms.com](https://web3forms.com))

## 🔧 Installation

1. **Clone the repository** (or use existing directory):
   ```bash
   cd transglobal-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**:
   
   Edit the `.env` file in the root directory:
   ```env
   # Web3Forms Access Key for Contact Form
   VITE_WEB3FORMS_KEY=your_actual_access_key_here
   
   # Contact Email
   VITE_CONTACT_EMAIL=linuxadona17@gmail.com
   
   # Base Path (leave empty for root)
   VITE_BASE_PATH=
   ```

   **To get your Web3Forms API key**:
   - Visit [web3forms.com](https://web3forms.com)
   - Click "Get Started" or "Create Access Key"
   - Enter your email (linuxadona17@gmail.com)
   - Copy the access key provided
   - Paste it in the `.env` file replacing `your_actual_access_key_here`

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser**:
   Navigate to `http://localhost:5173`

## 📦 Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

To preview the production build:
```bash
npm run preview
```

## 🗂️ Project Structure

```
transglobal-website/
├── public/
│   └── logo-mockup.png          # Company logo
├── src/
│   ├── components/
│   │   ├── layout/               # Navbar, Footer, Layout
│   │   ├── ui/                   # Reusable UI components
│   │   └── sections/             # Page section components
│   ├── data/
│   │   ├── services.ts           # All service data
│   │   └── testimonials.ts       # Customer testimonials
│   ├── pages/
│   │   ├── Home.tsx              # Homepage
│   │   ├── About.tsx             # About Us page
│   │   ├── Services.tsx          # Services overview
│   │   ├── ServiceDetail.tsx     # Individual service pages
│   │   └── Contact.tsx           # Contact page
│   ├── types/
│   │   └── index.ts              # TypeScript type definitions
│   ├── assets/
│   │   └── css/
│   │       └── index.css         # Global styles + Tailwind
│   ├── App.tsx                   # Main app component with routing
│   └── main.tsx                  # Application entry point
├── .env                          # Environment variables
├── index.html                    # HTML entry point
├── package.json                  # Dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
├── vite.config.ts                # Vite configuration
└── README.md                     # This file
```

## 🎨 Design System

### Colors (from logo)
- **Primary (Navy Blue)**: `#244a7d` - Headers, buttons, navbar
- **Secondary (Orange)**: `#f97316` - Accents, CTAs, hover states
- **Accent (Lime Green)**: `#84cc16` - Highlights, success states

### Typography
- System fonts with fallback to sans-serif
- Clear hierarchy with responsive sizing

### Components
- Rounded corners (8px)
- Subtle shadows for depth
- Smooth transitions (200-300ms)
- Hover effects on interactive elements

## 📝 Customization

### Updating Content

1. **Services**: Edit `src/data/services.ts`
   - Modify service descriptions, features, process steps, and benefits
   - All 17 service pages use this data

2. **Testimonials**: Edit `src/data/testimonials.ts`
   - Add, remove, or modify customer testimonials

3. **Contact Information**:
   - Update email in `.env` file
   - Edit phone numbers in `src/components/layout/Footer.tsx`
   - Edit office addresses in `src/pages/Contact.tsx`

4. **Company Info**:
   - Edit About Us content in `src/pages/About.tsx`
   - Update stats/numbers in `src/components/sections/StatsSection.tsx`

### Adding New Pages

1. Create new page component in `src/pages/`
2. Add route in `src/App.tsx`
3. Add navigation link in `src/components/layout/Navbar.tsx`

### Styling Changes

- Global styles: `src/assets/css/index.css`
- Theme colors: Edit `@theme` section in `index.css`
- Component-specific: Use Tailwind classes in component files

## 🚢 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
1. Connect your repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add environment variables in Netlify dashboard

### Traditional Hosting
1. Run `npm run build`
2. Upload contents of `dist/` folder to your web server
3. Ensure server is configured for SPA routing (redirect all requests to `index.html`)

## 🔒 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_WEB3FORMS_KEY` | Web3Forms API key for contact form | Yes |
| `VITE_CONTACT_EMAIL` | Email to receive form submissions | Yes |
| `VITE_BASE_PATH` | Base path for deployment (empty for root) | No |

## 🐛 Troubleshooting

### Contact form not working
- Verify `VITE_WEB3FORMS_KEY` is set correctly in `.env`
- Check browser console for errors
- Ensure email in Web3Forms matches `.env` configuration

### Build errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Styling issues
```bash
# Tailwind CSS not loading properly
npm run dev
# Force refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
```

## 📄 License

Copyright © 2024 Transglobal Movers INC. All rights reserved.

## 🤝 Support

For questions or support, contact:
- **Email**: linuxadona17@gmail.com
- **Phone**: +63 XXX XXX XXXX
- **Location**: Metro Manila, Philippines

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
