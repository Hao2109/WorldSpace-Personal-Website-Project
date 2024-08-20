import { useEffect, useState } from "react";

const HomePage = () => {
  const [company, setCompany] = useState(null);
  useEffect(() => {
    const fetchCompany = async () => {
      const res = await fetch("https://api.spacexdata.com/v4/company");
      const data = res.json();
      setCompany(data);
    };
    fetchCompany();
  }, []);
  return (
    <>
      <section className="showcase">
        <div className="overlay flex items-center justify-center">
          <article>
            <h1 className="heading text-center capitalize">
              All The SpaceX Data in one place
            </h1>
            <article>
              <ul>
                <li>{company.headquarters.address}</li>
                <li>{company.headquarters.city}</li>
                <li>{company.headquarters.state}</li>
              </ul>
            </article>
          </article>
        </div>
      </section>
    </>
  );
};

export default HomePage;
