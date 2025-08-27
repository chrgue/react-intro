# 🚀 React Intro Workshop

Welcome! This repo is a **hands-on introduction to React fundamentals**, prepared for our team session.  
The material is organized into **branches**, each branch showing one focused concept.

## 📚 Topics Covered

1. **Mental model** – UI = f(state), simple counter
2. **Components & Composition** – refactor a "God component" into smaller parts
3. **useEffect basics** – effects run after render, dependencies, cleanup
4. **Context** – from prop drilling → provider → memoized value
5. **Rendering & Performance** – re-render problem → fixes with `React.memo`, `useCallback`, `useMemo`

## 🔀 Branches Overview

| Step | Branch | Description |
|------|--------|-------------|
| 01 | `main` | Counter demo – mental model |
| 02a | `02a-god-component` | "God component" (everything inline) |
| 02b | `02b-composition-refactor` | Refactor into `Header` + `ItemList` |
| 03a | `03a-useeffect-basics` | Simple `useEffect` with `console.log` |
| 04a | `04a-prop-drilling` | Passing theme via props (pain) |
| 04b | `04b-context-provider` | Replace props with Context provider |
| 04c | `04c-context-memoized-value` | Memoize provider value to cut re-renders |
| 05a | `05a-rerender-problem` | List re-renders on every keystroke |
| 05b | `05b-memo-stable-callbacks` | Fix with memo, stable callbacks, stable keys |

## ▶️ Running the Demos

1. Install dependencies (once):
    ```bash
    npm install
    ```   
2.	Start the dev server:Start the dev server:
    ```bash
    npm run dev
    ```
3. Switch between branches to explore:
    ```bash
    git checkout 02a-god-component
    git checkout 02b-composition-refactor
    git checkout 03a-useeffect-basics
    # ...etc
    ```
4. Open http://localhost:5173 in your browser.


## ✅ Recap
 - UI is a pure function of state. 
 - Prefer composition over inheritance. 
 - Keep side effects in useEffect. 
 - Use Context to avoid prop drilling. 
 - Optimize rendering only when needed (memo, callbacks, keys).