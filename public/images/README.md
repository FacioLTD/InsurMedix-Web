# Logo Files

This directory contains the logo images for InsurMedix.

## Required Files

### Primary Logo
- **File**: `logo.png`
- **Format**: PNG (recommended) or SVG
- **Size**: At least 128x128px (will be scaled automatically)
- **Background**: Transparent or white background preferred
- **Usage**: This is the main logo used in the header and throughout the site

## Logo Specifications

The logo component automatically handles:
- **Responsive sizing**: Small (24x24), Medium (32x32), Large (48x48)
- **Fallback**: If the logo image fails to load, it shows a gradient "IM" fallback
- **Optimization**: Next.js Image component for optimal loading
- **Accessibility**: Proper alt text and semantic markup

## Adding Your Logo

1. **Upload your logo file** to this directory as `logo.png`
2. **Recommended formats**:
   - PNG with transparent background
   - SVG for vector graphics
   - High resolution (at least 128x128px)
3. **The logo will automatically appear** in the header once uploaded

## Fallback Logo

If no logo file is found or if it fails to load, the system will show:
- A blue-to-purple gradient square
- "IM" initials in white text
- This ensures the site always has a visual logo

## Customization

You can customize the logo behavior by modifying the Logo component:
- Change sizes in `components/ui/Logo.tsx`
- Modify fallback colors in the component
- Adjust text display options
