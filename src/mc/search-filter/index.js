import React, { useState } from "react";
import "./searchFilter.css";

import Card from "./card";

const Searchfilter = () => {
  const data = [
    {
      id: 4008,
      name: "Lakshmi Mehra",
      email: "lakshmi_mehra@botsford.info",
      gender: "male",
      status: "inactive",
    },
    {
      id: 4007,
      name: "Mahesh Panicker",
      email: "mahesh_panicker@donnelly.biz",
      gender: "male",
      status: "inactive",
    },
    {
      id: 4005,
      name: "Kirti Saini",
      email: "saini_kirti@west.biz",
      gender: "female",
      status: "inactive",
    },
    {
      id: 4004,
      name: "Kamlesh Deshpande",
      email: "deshpande_kamlesh@watsica.biz",
      gender: "female",
      status: "active",
    },
    {
      id: 4003,
      name: "Gauranga Talwar",
      email: "talwar_gauranga@littel.io",
      gender: "male",
      status: "inactive",
    },
    {
      id: 4001,
      name: "Dhara Mehrotra Jr.",
      email: "jr_dhara_mehrotra@cartwright.com",
      gender: "male",
      status: "inactive",
    },
    {
      id: 4000,
      name: "Trilokanath Adiga",
      email: "trilokanath_adiga@klocko.com",
      gender: "male",
      status: "inactive",
    },
    {
      id: 3999,
      name: "Rajinder Gill",
      email: "gill_rajinder@koss.info",
      gender: "female",
      status: "active",
    },
    {
      id: 3997,
      name: "Amb. Uttam Nambeesan",
      email: "uttam_amb_nambeesan@adams.org",
      gender: "female",
      status: "inactive",
    },
    {
      id: 3996,
      name: "Pres. Buddhana Bharadwaj",
      email: "pres_buddhana_bharadwaj@runolfsdottir-howe.io",
      gender: "male",
      status: "active",
    },
  ];

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filtered = !search
    ? data
    : data.filter(
        (person) =>
          person.id.toString().includes(search) ||
          person.name.toString().includes(search) ||
          person.email.toString().includes(search) ||
          person.gender.toString().includes(search) ||
          person.status.toString().includes(search)
      );

  return (
    <div className="search-challenge">
      <input
        autoFocus
        className="searchField"
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleSearch}
      />
      <div className="MainContainer">
        {filtered.length > 0 ? (
          filtered.map((item, key) => {
            return <Card key={key} data={item} />;
          })
        ) : (
          <div className="noResult">
            <h2>
              Oops No Data matching "<span>{search}</span>"
            </h2>
            <img
              alt="no data"
              src="https://cdn.iconscout.com/icon/free/png-256/data-not-found-1965034-1662569.png"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Searchfilter;
