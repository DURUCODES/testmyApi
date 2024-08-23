import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function LandingDetails({ data, backPointer }) {
  const { Id } = useParams();
  const country = data.find((item) => item.name === Id);
  if (!country) return <div>No data found</div>;
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="landingdetails">
      <div className="btn-wrapper">
        <button onClick={goBack} className="backbtn">
          <img src={backPointer} />
          Back
        </button>
      </div>

      <div className="body-wrapper">
        <div className="img-wrapper">
          <img src={country.flags.png} />
        </div>
        <div className="country-context-wrapper">
          <div className="details-context">
            <div className="details-heading">
              <h2>{country.name}</h2>
            </div>
            <div className="info">
              <div className="left">
                <strong>
                  Native Name: <span>{country.nativeName}</span>
                </strong>
                <strong>
                  Population<span>: {country.population}</span>
                </strong>
                <strong>
                  Region:<span> {country.region}</span>
                </strong>
                <strong>
                  Sub Region:<span>{country.subregion}</span>
                </strong>
                <strong>
                  Capital :<span> {country.capital}</span>
                </strong>
                <p></p>
              </div>
              <div className="right">
                <strong>
                  Top Level Domain : <span>{country.topLevelDomain}</span>
                </strong>
                <strong>
                  Currencies:
                  <span>
                    {" "}
                    {country.currencies && country.currencies[0]
                      ? country.currencies[0].name
                      : "usd"}
                  </span>
                </strong>
                <strong>
                  Language:
                  <span>
                    {" "}
                    {country.languages[0].iso639_1}, {country.languages[0].name}
                    , {country.languages[0].nativeName}
                  </span>
                </strong>
              </div>
            </div>
            <div className="border-wrapper">
              <p>Countries Border:</p>
              <div className="bordername">
                {country.borders?.length > 0 && (
                  <>
                    {country.borders.slice(0, 3).map((border, index) => (
                      <span key={index} className="borders">
                        {border}
                        {index < country.borders.slice(0, 3).length - 1
                          ? ","
                          : ""}
                      </span>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LandingDetails;
