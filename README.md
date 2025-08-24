# 🎞️ Movie Finder

A React + Vite web application that allows users to search for movies and view popular titles using [The Movie Database (TMDB) API](https://www.themoviedb.org/documentation/api).

---

## 🚀 Features
- Browse **popular movies**
- **Search** for movies by title
- View **movie posters, titles, and release years**
- Add/remove movies from your **favourites**
- Responsive, clean UI
- Environment variables for secure API key handling

---

## 🛠️ Tech Stack
- [React](https://react.dev/) (with [Vite](https://vitejs.dev/))
- [React Router](https://reactrouter.com/)
- [TMDB API](https://developer.themoviedb.org/reference/intro/getting-started)
- CSS Modules for styling
- [Vercel](https://vercel.com/) for deployment

---

## 📂 Project Structure
src/
┣ components/       # Reusable UI components (MovieCard, NavBar, etc.)
┣ context/          # Global state management (MovieContext)
┣ pages/            # Pages (Home, Favourites)
┣ services/         # API helper functions (api.js)
┣ css/              # Stylesheets
┣ App.jsx           # Root App component
┣ main.jsx          # Entry point

---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/movie-finder.git
   cd movie-finder
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. create .env api variable in project root (frontend)
   ```bash
   VITE_API_KEY=your_tmdb_api_key_here
   ```
4. Run development server
   ```bash
   npm run dev
   ```

project inspired by [TechwithTim](https://www.youtube.com/watch?v=G6D9cBaLViA)

