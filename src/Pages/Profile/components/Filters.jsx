import { SearchIcon } from 'lucide-react';
import { Button } from '../styles/Button/Button';
import { FilterMenu } from '../styles/Input/FilterMenu';
import { SearchInput } from '../styles/Input/Search/SearchInput';
import { SearchWrapper } from '../styles/Input/Search/SearchWrapper';
import { SelectInput } from '../styles/Input/SelectInput';

export default function Filters() {
  return (
    <FilterMenu>
      <div>
        <SearchWrapper>
          <SearchInput type="text" placeholder="Search" />
          <SearchIcon />
        </SearchWrapper>

        <SelectInput>
          <option value={null} defaultValue={true} disabled>
            Single Items
          </option>
        </SelectInput>

        <Button roundedSide={'left'}>Pasta</Button>
        <Button roundedSide={'right'}>Menu</Button>
      </div>
    </FilterMenu>
  );
}
