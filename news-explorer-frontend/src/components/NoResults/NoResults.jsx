import "./NoResults.css";
import NotFoundIcon from "../../assets/not-found_v1.svg";

function NoResults() {
  return (
    <div className="no-results">
      <img
        src={NotFoundIcon}
        alt="No Results"
        className="no-results__image" loading="lazy"
      />
      <h3 className="no-results__title">No Results</h3>
      <p className="no-results-text">
        Sorry, but nothing matched
        <br />
        your search terms.
      </p>
    </div>
  );
}

export default NoResults;
