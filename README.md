# Interactive 3D Product Viewer

An interactive 3D product viewer built with Three.js that allows users to explore a 3D chair model with both manual and automatic camera controls.

## Features

- 3D chair model built using basic Three.js geometries
- Interactive camera controls (orbit, pan, zoom)
- Automatic camera rotation with toggle control
- Part highlighting and identification on hover
- Click feedback with scale animation
- Realistic lighting and shadows
- Responsive design

## Setup

1. Clone the repository:

```bash
git clone [your-repository-url]
```

2. Navigate to the project directory:

```bash
cd Interactive_3D_product_viewer
```

3. Start a local server (using any of these methods):

```bash
# Using Python
python -m http.server

# Using Node.js
npx serve

# Using PHP
php -S localhost:8000
```

4. Open your browser and navigate to:

- For Python: `http://localhost:8000`
- For Node.js: `http://localhost:3000`
- For PHP: `http://localhost:8000`

## Usage

- **Camera Controls:**

  - Click and drag to rotate the view
  - Scroll to zoom in/out
  - Right-click and drag to pan
  - Use the auto-rotate toggle button to switch between automatic and manual control

- **Interaction:**
  - Hover over parts to see their names
  - Click parts to see them scale up briefly

## Technologies Used

- Three.js for 3D rendering
- Tween.js for animations
- Vanilla JavaScript for interactivity
