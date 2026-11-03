:root {
  --bg: #0f172a;
  --card: #1e293b;
  --text: #f8fafc;
  --muted: #cbd5e1;
  --accent: #38bdf8;
}

.light {
  --bg: #f8fafc;
  --card: #ffffff;
  --text: #0f172a;
  --muted: #334155;
  --accent: #0ea5e9;
}

* { box-sizing: border-box; }

body {
  margin: 0;
  font-family: Inter, Arial, sans-serif;
  background: var(--bg);
  color: var(--text);
  transition: background .25s ease, color .25s ease;
}

.nav {
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.25rem;
  background: color-mix(in srgb, var(--bg) 85%, transparent);
  backdrop-filter: blur(8px);
}

.logo { font-weight: 700; }

nav {
  display: flex;
  align-items: center;
  gap: 1rem;
}

nav a {
  color: var(--text);
  text-decoration: none;
  font-size: .95rem;
}

.theme-btn {
  border: 0;
  background: var(--card);
  color: var(--text);
  padding: .45rem .6rem;
  border-radius: .6rem;
  cursor: pointer;
}

.hero {
  min-height: 72vh;
  display: grid;
  place-content: center;
  text-align: center;
  padding: 2rem;
}

.hero h1 {
  font-size: clamp(2rem, 5vw, 3.2rem);
  margin: 0 0 .8rem;
}

.hero p {
  color: var(--muted);
  margin: 0 0 1.4rem;
}

.cta {
  display: inline-block;
  text-decoration: none;
  background: var(--accent);
  color: #001018;
  font-weight: 700;
  padding: .75rem 1rem;
  border-radius: .7rem;
}

.section {
  max-width: 980px;
  margin: 0 auto;
  padding: 2.5rem 1.25rem;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}

.card {
  background: var(--card);
  border-radius: .9rem;
  padding: 1rem;
}

.card p { color: var(--muted); }

.contact-form {
  display: flex;
  gap: .6rem;
  flex-wrap: wrap;
}

.contact-form input {
  flex: 1;
  min-width: 220px;
  border: 1px solid #64748b55;
  background: var(--card);
  color: var(--text);
  padding: .7rem;
  border-radius: .6rem;
}

.contact-form button {
  border: 0;
  background: var(--accent);
  color: #001018;
  font-weight: 700;
  padding: .7rem 1rem;
  border-radius: .6rem;
  cursor: pointer;
}

footer {
  text-align: center;
  padding: 2rem 1rem;
  color: var(--muted);
}
