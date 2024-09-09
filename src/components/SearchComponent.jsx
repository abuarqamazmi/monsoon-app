import React from "react";

const SearchComponent = ({ city, setCity, handleSearch }) => {
  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control form-control-lg"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        style={{
          backgroundColor: '#333',
          color: '#FFD700',
          border: '1px solid #FFD700',
          borderRadius: '10px',
          '--placeholder-color': '#FFD700',
        }}
      />
      <button 
        className="btn btn-warning mt-2" 
        onClick={handleSearch}
        style={{ fontSize: "1.2rem", padding: "10px 20px" }}
      >
        Search
        <style jsx>{`
        .form-control::placeholder {
          color: var(--placeholder-color);
        }
      `}</style>
      </button>
    </div>
  );
};

export default SearchComponent;
