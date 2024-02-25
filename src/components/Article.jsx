export const Article = ({ title, date, text }) => (
  <div className="Article">
    <h2 className="title" data-cy="title">
      {title}
    </h2>

    <p className="subtitle">
      <time dateTime="2019-08-30" data-cy="date">
        {date}
      </time>
    </p>

    <p data-cy="text">{text}</p>
  </div>
);
