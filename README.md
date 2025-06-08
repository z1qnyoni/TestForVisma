# TinyTech Employee Directory

A simple, responsive employee directory application built for TinyTech's internship homework assignment.

## Features

### Core Requirements ✅
- **Employee List**: Displays all employees with name and job title
- **Employee Details**: Click any employee to see email and start date in a modal
- **Search Functionality**: Real-time search by employee name or job title
- **Mobile Responsive**: Works seamlessly on desktop and mobile devices

### Creative Feature: Smart Tenure Tracking 🎯

**What it does:**
The application automatically calculates and displays each employee's tenure with the company, providing valuable insights at a glance.

**Key Benefits:**
- **Visual Tenure Badges**: Color-coded indicators showing experience levels
  - Green: Veterans (1+ years)
  - Blue: Experienced (6+ months) 
  - Light: Newcomers (< 6 months)
- **Real-time Calculations**: Automatically computes years, months, and days of service
- **Enhanced Statistics**: Live counters showing total employees and filtered results
- **Professional Presentation**: Clean, modern interface with smooth animations

**Business Value:**
- Helps HR identify mentorship opportunities
- Assists in project planning by showing team experience levels
- Recognizes long-term contributors
- Improves team collaboration by highlighting expertise levels

## Technical Implementation

### Architecture
```
├── index.html          # Main HTML structure
├── style.css           # All styling and responsive design
├── app.js             # JavaScript functionality and logic
├── employees.json     # Employee data (alternative to hardcoded array)
└── README.md          # This documentation
```

### Technologies Used
- **HTML5**: Semantic structure with accessibility in mind
- **CSS3**: Modern flexbox/grid layouts, animations, and responsive design
- **Vanilla JavaScript**: Clean, commented code with ES6+ features
- **No frameworks**: Pure web technologies as requested

### Key Code Features
- Modular function structure for maintainability
- Event-driven architecture with proper event listeners
- Responsive CSS Grid for employee cards
- CSS animations for smooth user interactions
- Error handling and edge case management
- Clean, commented code throughout

## Setup Instructions

1. **Clone or download** all files to a directory
2. **Open `index.html`** in any modern web browser
3. **No build process required** - works immediately

### For GitHub Pages deployment:
1. Upload all files to your repository
2. Go to Settings → Pages
3. Select "Deploy from branch" and choose `main`
4. Your live URL will be: `https://yourusername.github.io/repository-name`

## Browser Compatibility
- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

## File Structure Details

**index.html** (185 lines)
- Semantic HTML structure
- Accessibility features (proper heading hierarchy, alt texts)
- Modal for employee details
- Search and statistics sections

**style.css** (300+ lines)
- Mobile-first responsive design
- CSS Grid and Flexbox layouts
- Smooth animations and transitions
- Professional color scheme and typography
- Dark/light theme considerations

**app.js** (200+ lines)
- Employee data management
- Search and filtering logic
- Modal functionality
- Tenure calculation algorithms
- Event handling and DOM manipulation

## Performance Considerations
- Efficient DOM manipulation
- Minimal JavaScript for fast loading
- Optimized CSS with minimal reflows
- Image-free design for faster loading
- Clean code structure for maintainability

---

*Built with ❤️ for TinyTech's internship program*
