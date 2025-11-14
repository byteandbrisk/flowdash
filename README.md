# Flowdash - Advanced Analytics Landing Page

A modern, responsive SaaS landing page built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, professional design with custom gradients and animations
- **Fully Responsive**: Optimized for all device sizes (375px to 1440px+)
- **Accessibility**: WCAG AA compliant with keyboard navigation and screen reader support
- **Performance**: Optimized for Core Web Vitals with static generation
- **SEO Ready**: Complete metadata, Open Graph, and Twitter Card support
- **Smooth Animations**: Framer Motion animations with reduced motion support

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd flowdash
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

## 🏗 Build & Deploy

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
npx vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── Navbar.tsx         # Navigation component
│   ├── Footer.tsx         # Footer component
│   └── sections/          # Page sections
│       ├── Hero.tsx
│       ├── Logos.tsx
│       ├── Benefits.tsx
│       ├── FeatureGrid.tsx
│       ├── SocialIntegrations.tsx
│       ├── BlogTeaser.tsx
│       ├── Pricing.tsx
│       ├── FAQ.tsx
│       └── CTA.tsx
└── lib/
    └── cn.ts              # Utility for className merging
```

## 🎨 Design System

### Colors
- **Brand Primary**: #2F7CFF
- **Brand Secondary**: #255FCC
- **Accent Gradient**: #8B5CF6 → #2F7CFF
- **Neutrals**: Slate color scale

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: 32px-64px responsive scale
- **Body**: 16px-20px

### Spacing
- **Scale**: 8px, 12px, 16px, 24px, 32px, 48px, 64px
- **Container**: Max-width 1120px, centered

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader compatibility
- Color contrast compliance (AA)

## 🚀 Performance

- Static site generation (SSG)
- Optimized images and assets
- Minimal JavaScript bundle
- Core Web Vitals optimized
- Lighthouse scores: 90+ Performance, 95+ Accessibility, 95+ SEO

## 📱 Responsive Breakpoints

- **Mobile**: 375px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1279px
- **Large Desktop**: 1280px+

## 🎭 Animations

- Framer Motion for smooth transitions
- Respects `prefers-reduced-motion`
- Hover effects and micro-interactions
- Staggered animations for lists

## 📄 License

MIT License - see LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support, please contact us at [contact@flowdash.com](mailto:contact@flowdash.com).