import { useState } from "react";
import PropTypes from "prop-types";

import { Fade, Popper, Box, Button } from "@mui/material";

const PopperEl = ({ children }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  return (
    <Box>
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            {children}
          </Fade>
        )}
      </Popper>
      <Button onClick={handleClick("right")}>Графік роботи</Button>
    </Box>
  );
};

PopperEl.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PopperEl;
