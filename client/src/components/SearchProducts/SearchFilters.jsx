import { useState } from "react";
import styled from "styled-components";
import {mobile} from "../../responsive";
import { addFillters, addSortVal } from "../../redux/searchRedux"
import { useDispatch, useSelector } from "react-redux";

const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`;


const Filter = styled.div`
margin: 20px;
${mobile({width: "0px 20px", display:"flex",flexDirection:"column"})}
`;

const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
${mobile({marginRight: "0px"})}
`;

const Select = styled.select`
padding: 10px;
margin-right: 20px;
${mobile({margin: "10px 0px"})}
`;

const Option = styled.option`

`;

const SearchCategory = () => {

    const [filters, setFilter] = useState({});
    const [sort, setSort] = useState("newest");
    const dispatch = useDispatch();

    const handleFilters = (e) => {
        const filterVal = (e.target.value).toLowerCase();
        setFilter({...filters,[e.target.name]: filterVal});
        dispatch(addFillters({...filters,[e.target.name]: filterVal}));
    };

    const handleSort = (e) => {
        setSort(e.target.value);
        dispatch(addSortVal(e.target.value));
    }

    return (
        <div>
            <FilterContainer>
                <Filter>
                    <FilterText>
                        Filter Products:
                    </FilterText>
                    <Select name='color' onChange={handleFilters}>
                        <Option value={"Color"}>
                            Color
                        </Option>
                        <Option>WHITE</Option>
                        <Option>BLACK</Option>
                        <Option>RED</Option>
                        <Option>BLUE</Option>
                        <Option>YELLOW</Option>
                        <Option>GREEN</Option>
                    </Select>
                    <Select  name='size' onChange={handleFilters}>
                        <Option value={"Size"}>
                            Size
                        </Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>
                        Sort Products:
                    </FilterText>
                    <Select onChange={handleSort}>
                        <Option value="newest">Newest</Option>
                        <Option value="asc">Price (asc)</Option>
                        <Option value="desc">Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
        </div>
    )
}

export default SearchCategory
