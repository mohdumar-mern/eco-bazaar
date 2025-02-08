import { useSelector } from "react-redux";

import { directory } from "../../features/directory-menu/DirectorySlice";
import MenuItem from "../menu-item/MenuItem";
import { DirectoryMenuContainer } from "./DirectoryMenyStyled";

const DirectoryMenu = () => {
  const sections = useSelector(directory || []);
  return (
    <DirectoryMenuContainer>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </DirectoryMenuContainer>
  );
};
export default DirectoryMenu;
