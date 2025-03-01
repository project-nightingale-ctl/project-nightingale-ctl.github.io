# Project Nightingale Website
Link to the published website: https://project-nightingale.stanford.edu/

# Quick deploy
First, and just one time: make sure you have run `npm install`.

To actually deploy:
* `npm run deploy`

To view changes without deployment:
* `npm run dev`

# Directory structure under `src` directory.

```bash
├── pages
│   ├── Home.tsx  
│   ├── People.tsx
│   ├── Research.tsx
│   ├── Events.tsx
├── json
│   ├── advisoryBoard.json  
│   ├── researchTeam.json
├── components
│   ├── Header.tsx
├── App.tsx
├── main.tsx
├── index.css
├── custom.css
```

# Directory structure description

## **`pages`**
- **Home.tsx**  
  Main landing page, also wraps people / research / events into a one scrollable page.

- **People.tsx**  
  Part of the main page that shows information about advisory board and research team.

- **Research.tsx**  
  Part of the main page that shows information about research.

- **Events.tsx**  
  Part of the main page that shows information about events.

## **`json`**
- **advisoryBoard.json**  
  Contains structured data about the advisory board.

- **researchTeam.json**  
  Contains structured data about the research team.


## **`components`**
- **Header.tsx**  
  Both base + floating website header

- **App.tsx**  
  The main application component that serves as the root for the React component tree. Contains the base layout and routing logic for the app.

- **main.tsx**  
  The entry point for the React application. It renders the `App` component into the root DOM element and initializes the React rendering process. (leave as default)

- **index.css**  
  Initializes tailwindCSS (leave as default)

- **custom.css**  
  Additional custom styles overriding base tailwindCSS styles.

