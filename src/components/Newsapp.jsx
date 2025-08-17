import Card from "./Card";
import React, { useState, useEffect } from "react";

function Newsapp() {
  const api_key = "96299b90f0804bdb986f933446f34edb";
  const [search, setSearch] = useState("india");
  const [news, setNews] = useState(null);
  const [error, setError] = useState(null);

  // Fetch news whenever search changes
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=${search}&apiKey=${api_key}`
        );
        const data = await response.json();
        if (data.status === "ok") {
          setNews(data.articles);
          setError(null);
        } else {
          setError("Failed to fetch news.");
          setNews(null);
        }
      } catch (err) {
        setError("An error occurred while fetching news.");
        setNews(null);
      }
    };

    fetchNews();
  }, [search]);

  // Handle input change
  const handleOnChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <nav>
        <h1>Express News</h1>
        <ul>
          <li>
            <button onClick={() => setSearch("all")}>All News</button>
          </li>
          <li>
            <button onClick={() => setSearch("trending")}>Trending News</button>
          </li>
        </ul>
        <div className="searchBar">
          <input
            type="text"
            placeholder="Search News"
            value={search}
            onChange={handleOnChange}
            aria-label="Search News"
          />
          <button onClick={() => setSearch(search)}>Search</button>
        </div>
      </nav>

      <header className="head">
        <p>Stay updated with the latest news</p>
      </header>

      <section className="categoryBtn">
        <button onClick={() => setSearch("all")}>All</button>
        <button onClick={() => setSearch("technology")}>Technology</button>
        <button onClick={() => setSearch("health")}>Health</button>
        <button onClick={() => setSearch("sports")}>Sports</button>
      </section>

      <main>
        {error ? (
          <p>{error}</p>
        ) : news ? (
          <Card data={news} />
        ) : (
          <p>Loading news...</p>
        )}
      </main>
    </div>
  );
}

export default Newsapp;
