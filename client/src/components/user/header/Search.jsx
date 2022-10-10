import React from "react";

const Search = () => {
    return (
        <>
            <input
                type="text"
                name="search"
                className="search"
                placeholder="recherche..."
            />
            <button>Recherche</button>
        </>
    );
};

export default Search;
