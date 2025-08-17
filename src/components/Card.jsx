function Card({ data }) {
  return (
    <div className="cardContainer">
      {data.map((item, index) => {
        return (
          <div className="card">
            <img src={item.urlToImage} />
            <div className="cardContent">
              <a onClick={() => window.open(item.url)}>{item.title}</a>
              <p>{item.description}</p>
              <button onClick={() => window.open(item.url)}>read more</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
