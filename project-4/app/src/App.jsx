import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResults from "./components/SearchResults";

export const BASE_URL = "http://localhost:9000";

const App = () => {

  const [data,setData] = useState(null);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(null);
  const [filteredData,setFilterData] = useState(null);
  const [selectedBtn,setSelectedbtn] = useState("all");

  

  useEffect(() => {

    const fetchFoodData = async () => {
      setLoading(true)
      try{
        const response = await fetch(BASE_URL + "/")
        const json = await response.json();
        setLoading(false);
        setData(json)
        setFilterData(json)
      } catch (error) {
        setError("Unable to fetch data");
      };
     
    };

    fetchFoodData();

  },[]);

  console.log(data);

  const searchFood = (e) => {
    const searchValue = e.target.value;
    console.log(searchValue)
    if(searchValue === ""){
      setFilterData(null);
    }
    const filter = data?.filter((food) => food.name.toLowerCase().includes(searchValue.toLowerCase()));
    setFilterData(filter);
  }

  const filterFood = (type) => {
    if(type === "all"){
      setFilterData(data)
      setSelectedbtn("all")
      return ;
    }
    const filter = data?.filter((food) => food.type.toLowerCase().includes(type.toLowerCase()));
    setFilterData(filter);
    setSelectedbtn(type)

  }

  const filtersBtns = [
    {
      name : "All",
      type : "all"

    },
    {
      name : "BreakFast",
      type : "breakfast"

    },
    {
      name : "Lunch",
      type : "lunch"

    },
    {
      name : "Dinner",
      type : "dinner"

    }
  ]
  // fetchFoodData();
  if(error) return <div>{error}</div>;
  if(loading) return <div>Loading...</div>;
  return (
    <>
    <Container>
      <TopContainer>
        <div className="logo">
          <img src="/images/logo.svg" alt="logo" />
        </div>

        <div className="search">
          <input type="text" onChange={(e) =>searchFood(e)} placeholder="Search Food" />
        </div>
      </TopContainer>
      <FilterContainer>
        {
          filtersBtns.map((value) => (
            <Button
             isSelected = {selectedBtn === value.type}
             key={value.name} onClick={()=>filterFood(value.type)}>{value.name}</Button>
          ))
        }
        {/* <Button onClick={()=>filterFood("all")}>All</Button>
        <Button onClick={()=>filterFood("breakfast")}>Breakfast</Button>
        <Button onClick={()=>filterFood("lunch")}>Lunch</Button>
        <Button onClick={()=>filterFood("dinner")}>Dinner</Button> */}

      </FilterContainer>
    </Container>
    <SearchResults data = {filteredData} />
    </>
  );
};

export default App;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const TopContainer = styled.section`
  height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  .search {
    input {
      background-color: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
      &::placeholder {
        color: white;
      }
    }
  }

  @media (0< width < 600px){
    flex-direction: column;
    height: 120px;
  }
`;

const FilterContainer = styled.section`
display: flex;
justify-content: center;
gap: 12px;
padding-bottom: 40px;

`;
export const Button = styled.button`
  background: ${({isSelected}) => isSelected ? "#f22f2f":"#ff4343"};
  outline: 1px  solid ${({isSelected}) => isSelected ? "white":"#ff4343"};
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: white;
  cursor: pointer;
  &:hover{
    background-color: #f22f2f;

  }

`
