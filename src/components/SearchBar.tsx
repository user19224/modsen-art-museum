import React from "react";
import styled from 'styled-components';

const SearchBarWrapper = styled.div`
    margin: 20px 0;
    display: flex;
    justify-content: center;

`;


const SearchInput = styled.input`
    width: 300px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius:5px;
    font-size: 1rem;
`;

interface SearchBarProps{
    onSearch: (query: string) => void;
}


const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onSearch(e.target.value);
    };
  
    return (
      <SearchBarWrapper>
        <SearchInput
          type="text"
          placeholder="Поиск картин..."
          onChange={handleInputChange}
        />
      </SearchBarWrapper>
    );
  };


export default SearchBar;