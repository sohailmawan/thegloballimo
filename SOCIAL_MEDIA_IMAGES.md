# Social Media Images Setup

## Current Status
✅ SVG placeholder images created
⚠️ **Action Required**: Convert SVGs to JPG/PNG for better social media compatibility

## Files Created
- `assets/og-image.svg` (1200x630) - Open Graph image
- `assets/twitter-image.svg` (1200x600) - Twitter Card image  
- `assets/favicon-32x32.svg` - 32x32 favicon
- `assets/favicon-16x16.svg` - 16x16 favicon
- `assets/apple-touch-icon.svg` - 180x180 Apple touch icon

## Production Recommendations

### 1. Convert Social Media Images
For optimal social media compatibility, convert the SVG files to:
```bash
# Open Graph image (Facebook, LinkedIn, etc.)
og-image.svg → og-image.jpg (1200x630)

# Twitter Card image
twitter-image.svg → twitter-image.jpg (1200x600)
```

### 2. Update HTML References
After conversion, update these lines in `index.html`:
```html
<!-- Change from: -->
<meta property="og:image" content="https://thegloballimo.com/assets/og-image.svg">
<meta name="twitter:image" content="https://thegloballimo.com/assets/twitter-image.svg">

<!-- To: -->
<meta property="og:image" content="https://thegloballimo.com/assets/og-image.jpg">
<meta name="twitter:image" content="https://thegloballimo.com/assets/twitter-image.jpg">
```

### 3. Convert Favicon Files
For broader browser support:
```bash
# Create proper favicon formats
favicon-32x32.svg → favicon-32x32.png
favicon-16x16.svg → favicon-16x16.png  
apple-touch-icon.svg → apple-touch-icon.png

# Optional: Create favicon.ico from 32x32 PNG
favicon-32x32.png → favicon.ico
```

## Quick Conversion Tools

### Using ImageMagick:
```bash
# Install ImageMagick first
brew install imagemagick  # macOS
# or: sudo apt install imagemagick  # Ubuntu

# Convert SVGs to required formats
magick assets/og-image.svg assets/og-image.jpg
magick assets/twitter-image.svg assets/twitter-image.jpg
magick assets/favicon-32x32.svg assets/favicon-32x32.png
magick assets/favicon-16x16.svg assets/favicon-16x16.png
magick assets/apple-touch-icon.svg assets/apple-touch-icon.png
```

### Using Online Tools:
- [Convertio.co](https://convertio.co/svg-jpg/) - SVG to JPG/PNG
- [Favicon.io](https://favicon.io/favicon-converter/) - Generate favicon.ico
- [RealFaviconGenerator](https://realfavicongenerator.net/) - Complete favicon package

### Using Design Tools:
- **Canva**: Import SVGs and export as JPG/PNG
- **Figma**: Paste SVG code and export in required formats
- **Adobe Illustrator**: Open SVGs and "Export for Web"

## Testing Social Media Images

### Facebook Debugger:
https://developers.facebook.com/tools/debug/

### Twitter Card Validator:
https://cards-dev.twitter.com/validator

### LinkedIn Post Inspector:
https://www.linkedin.com/post-inspector/

## Image Specifications

| Platform | Dimensions | Format | Max Size |
|----------|------------|--------|----------|
| Facebook OG | 1200x630 | JPG/PNG | 8MB |
| Twitter Card | 1200x600 | JPG/PNG | 5MB |
| LinkedIn | 1200x630 | JPG/PNG | 5MB |
| Favicon | 32x32 | ICO/PNG | 100KB |
| Apple Touch | 180x180 | PNG | 1MB |

## Current HTML Meta Tags Status
✅ Open Graph tags added
✅ Twitter Card tags added  
✅ Structured data (JSON-LD) added
✅ Favicon links added
✅ Apple touch icon added
✅ SEO keywords and author tags added

Ready for production once images are converted! 🚀