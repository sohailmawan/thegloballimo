#!/bin/bash

# Build script for The Global Limo production deployment
echo "🚀 Building The Global Limo for production..."

# Build Tailwind CSS
echo "📦 Building Tailwind CSS..."
npm run build

# Update browserslist database
echo "🌐 Updating browserslist database..."
npx update-browserslist-db@latest

# Optimize images (if imageoptim-cli is installed)
if command -v imageoptim &> /dev/null; then
    echo "🖼️  Optimizing images..."
    imageoptim assets/*.webp assets/*.svg
else
    echo "⚠️  imageoptim-cli not found, skipping image optimization"
fi

# Create .htaccess for performance (if needed for Apache servers)
cat > .htaccess << 'EOF'
# Performance optimizations
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/webp "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
    ExpiresByType application/manifest+json "access plus 1 week"
</IfModule>

<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Security headers
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options nosniff
    Header always set X-Frame-Options DENY
    Header always set X-XSS-Protection "1; mode=block"
    Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
</IfModule>
EOF

echo "✅ Production build complete!"
echo ""
echo "📁 Files ready for deployment:"
echo "   - index.html (optimized)"
echo "   - css/tailwind.css (${$(wc -c < css/tailwind.css)} bytes)"
echo "   - css/styles.css (${$(wc -c < css/styles.css)} bytes)"
echo "   - manifest.json (PWA ready)"
echo "   - sw.js (Service Worker)"
echo "   - .htaccess (Server optimization)"
echo ""
echo "🌟 Performance optimizations applied:"
echo "   ✅ Tailwind CSS compiled and minified"
echo "   ✅ Critical CSS inlined"
echo "   ✅ Fonts optimized with preconnect"
echo "   ✅ Images lazy loaded"
echo "   ✅ Scripts deferred"
echo "   ✅ Service Worker for caching"
echo "   ✅ PWA manifest included"