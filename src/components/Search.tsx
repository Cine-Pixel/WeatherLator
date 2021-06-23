import React, { useState } from "react";

interface PropTypes {
  getCity: (city: string) => void;
}

const Search: React.FC<PropTypes> = ({ getCity }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    getCity(searchQuery);
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="search city..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </form>
  );
};

export default Search;
