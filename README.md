# Retro90s.css 🎨

A nostalgic CSS framework that brings back the glory days of 1990s web design. Perfect for creating retro-styled websites, throwback projects, or just having fun with web aesthetics from the dial-up era.

## ✨ Features

- **Authentic 90s Design Elements**
  - Blinking text animations
  - Marquee scrolling text
  - 3D beveled buttons with inset/outset effects
  - Rainbow horizontal rules
  - Visitor counters with green monospace digits
  - "Under Construction" banners

- **Classic Typography**
  - Comic Sans MS titles with colorful text shadows
  - Times New Roman body text
  - Blue underlined hyperlinks (purple when visited)
  - Courier New for form inputs

- **Retro Components**
  - Table layouts with alternating row colors
  - Guestbook forms with gradient backgrounds
  - Webring navigation buttons
  - Badge animations (spinning, bouncing, pulsing)
  - Starry night backgrounds
  - Ridge/groove/inset borders
  - Navigation bar with retro buttons
  - Tabs with switchable content (requires retro90s.js)

- **Ready-to-Use Classes**
  - Layout utilities (text alignment, margins)
  - Multiple background styles
  - Form elements styled like Windows 95
  - Animated effects

## 🚀 Quick Start

Simply include the CSS in your HTML file. The framework is self-contained with no dependencies.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="retro90s.css">
</head>
<body>
    <div class="retro-container">
        <h1 class="retro-title">Welcome to 1999!</h1>
        <button class="retro-button">Click Me!</button>
    </div>
    <script src="retro90s.js"></script>
</body>
</html>
```

## 📦 Main Classes

### Typography
- `.retro-title` - Comic Sans title with colorful shadow
- `.retro-heading` - Blue underlined heading
- `.retro-text` - Standard body text
- `.retro-blink` - Blinking animation (like good old `<blink>` tag)

### Components
- `.retro-button` - 3D beveled button
- `.retro-table` - 90s-style data table
- `.retro-marquee` - Scrolling text banner
- `.retro-counter` - Visitor counter display
- `.retro-badge` - Animated badge (NEW!, HOT!, COOL!)
- `.retro-construction` - Under construction banner

### Containers
- `.retro-container` - Main content wrapper with ridge border
- `.retro-box` - Content box with groove border
- `.retro-frame` - Inset frame container

### Backgrounds
- `.retro-bg-stars` - Starry night background
- `.retro-bg-gradient` - Magenta to cyan gradient

### Forms
- `.retro-input` - Text input with inset border
- `.retro-textarea` - Textarea element
- `.retro-webring` - Webring navigation component

### Navigation
- `.retro-nav` - Horizontal navigation bar with beveled buttons

### Tabs
- `.retro-tabs` - Tab bar with selectable tabs
- `.retro-tab` - Individual tab element
- `.retro-tab-content` - Associated tab content area (hidden/shown via JS)

## 🎯 Usage Examples

### Blinking Text
```html
<p class="retro-blink">NEW CONTENT ADDED!</p>
```

### Marquee Banner
```html
<div class="retro-marquee">
    <div class="retro-marquee-content">
        ★ Welcome to my homepage! ★
    </div>
</div>
```

### 3D Button
```html
<button class="retro-button">Enter Site</button>
```

### Visitor Counter
```html
<div class="retro-counter">000042069</div>
```

### Data Table
```html
<table class="retro-table">
    <thead>
        <tr>
            <th>Name</th>
            <th>Category</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>GeoCities</td>
            <td>Hosting</td>
        </tr>
    </tbody>
</table>
```

### Navigation Bar
```html
<nav class="retro-nav">
    <a href="#">Home</a>
    <a href="#">Docs</a>
    <a href="#">Gallery</a>
    <a href="#">Contact</a>
</nav>
```

### Tabs with JavaScript
```html
<div class="retro-tabs">
    <div class="retro-tab active">Overview</div>
    <div class="retro-tab">Examples</div>
    <div class="retro-tab">Changelog</div>
</div>

<div id="tab-overview" class="retro-tab-content">Overview content...</div>
<div id="tab-examples" class="retro-tab-content" style="display:none;">Examples content...</div>
<div id="tab-changelog" class="retro-tab-content" style="display:none;">Changelog content...</div>

<script src="retro90s.js"></script>
```

## 🌈 Color Palette

The framework uses authentic 90s web colors:
- Windows 95 gray: `#c0c0c0`
- Netscape blue: `#0000ff`
- Visited purple: `#800080`
- Matrix green: `#00ff00`
- Hot magenta: `#ff00ff`
- Electric cyan: `#00ffff`

## 🎨 Design Philosophy

Retro90s.css embraces the aesthetic chaos of early web design:
- Tables for layout (ironically, of course)
- Bright, clashing colors
- Comic Sans MS typography
- Animated GIF-inspired effects
- Windows 95 UI elements
- GeoCities-era decorations

## 📱 Browser Support

Works best in modern browsers that support CSS animations and flexbox. Ironically more compatible than actual 90s websites!

- Chrome/Edge ✓
- Firefox ✓
- Safari ✓
- Opera ✓

## 🤝 Contributing

Feel free to submit issues and pull requests! Let's make the web retro again.

## 📜 License

MIT License - Use it, abuse it, make terrible websites with it!

## 🙏 Acknowledgments

Inspired by:
- GeoCities
- Netscape Navigator
- Windows 95/98
- ICQ
- Webring culture
- The golden age of personal homepages

---

**Best viewed at 800x600 resolution** 🖥️

Made with ❤️ and Comic Sans MS
