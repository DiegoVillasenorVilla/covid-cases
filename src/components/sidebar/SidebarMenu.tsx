import { useState } from 'react';
import { VscListFlat, VscSearch } from 'react-icons/vsc';
import { ISidebarMenuCard, ISidebarMenuItem } from '../../interfaces/index';
import { SidebarMenuItemView } from './SidebarMenuItemView';
import { SidebarMenuCardView } from './SidebarMenuCardView';
import { classNames } from '../../utils/classes';

import './SidebarMenu.scss';

interface SidebarMenuProps {
  items: ISidebarMenuItem[];
  card: ISidebarMenuCard;
}

export function SidebarMenu({ items, card }: SidebarMenuProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <div
      data-testid="sidebar"
      className={classNames('SidebarMenu', isOpen ? 'expanded' : 'collapsed')}
    >
      <div className="menu-button">
        <button type="button" className="hamburgerbutton" onClick={handleClick}>
          <VscListFlat />
        </button>
      </div>

      {isOpen ? (
        <div className="Search-content-expanded">
          <div className="search-input">
            <VscSearch size="20" className="search-icon" />
          </div>
          <input placeholder="Search" className="input-search" />
        </div>
      ) : (
        <div className="Search-content-collapsed">
          <div className="search-input">
            <VscSearch size="20" />
          </div>
        </div>
      )}

      {items.map((item) => (
        <SidebarMenuItemView key={item.id} item={item} isOpen={isOpen} />
      ))}

      <SidebarMenuCardView card={card} isOpen={isOpen} />
    </div>
  );
}
