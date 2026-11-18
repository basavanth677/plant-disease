# PlantCare AI

A responsive React demo for exploring plant disease screening and agricultural guidance. The current frontend uses local sample data; uploaded images are previewed in the browser and are not sent to a server.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

The GitHub Actions workflow builds the app and publishes the `dist` output whenever changes are pushed to `main`. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**. The deployed site is available at `https://basavanth677.github.io/plant-disease/`.

## Project structure

```text
plant-disease/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── styles.css
    ├── components/
    │   ├── Header.jsx
    │   └── SectionHeading.jsx
    ├── data/
    │   ├── advisorResponses.js
    │   └── sampleData.js
    └── pages/
        ├── About.jsx
        ├── Advisor.jsx
        ├── Detection.jsx
        └── Home.jsx
```

## Demo behavior

- **Disease Detection:** Upload or drag in a JPG, PNG, or WEBP image (up to 10 MB). The page validates the file, displays a preview, and returns a sample crop disease result after a short loading state.
- **AI Advisor:** Suggested prompts and typed questions receive local sample answers. Messages are held in React state and disappear on refresh.
- **About:** Describes the intended CNN and retrieval-augmented generation architecture.

## Backend integration

The sample detection flow in `src/pages/Detection.jsx` can be replaced with a request to a Python Flask API. Keep image validation and loading/error states in the UI, and map the API response to the result fields in `src/data/sampleData.js`. The advisor response lookup in `src/data/advisorResponses.js` can similarly be replaced by a backend request to a RAG service.

The current detection results and advisor replies are educational demo content, not a confirmed agricultural diagnosis. Consult local agricultural experts for crop-specific treatment decisions.
