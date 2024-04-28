## Internal Code Documentation for `usePrevNextButtons` Hook and Related Components

### Table of Contents

- Overview
- Usage
- Implementation
    - `usePrevNextButtons` Hook
    - `PrevButton` Component
    - `NextButton` Component
- Example Usage

### Overview

This documentation provides detailed information about the `usePrevNextButtons` hook and related components for use within our team's codebase. These tools facilitate the addition of functional prev/next buttons to Embla Carousel instances, allowing users to navigate through carousel items.

### Usage

To utilize the `usePrevNextButtons` hook and related components, include the following imports in your React component:

```javascript
import React, { useCallback, useEffect, useState } from "react";
import { usePrevNextButtons } from "./embla-prev-next-buttons";
import { PrevButton, NextButton } from "./embla-prev-next-buttons";
```

**`usePrevNextButtons` Hook:**

- Manages the state and event handlers for the prev/next buttons.
- Accepts an `emblaApi` parameter, which is the Embla Carousel API instance.
- Returns an object with the following properties:
    - `prevBtnDisabled`: Boolean indicating whether the prev button is disabled.
    - `nextBtnDisabled`: Boolean indicating whether the next button is disabled.
    - `onPrevButtonClick`: Function to handle prev button clicks.
    - `onNextButtonClick`: Function to handle next button clicks.

**`PrevButton` and `NextButton` Components:**

- Pre-styled prev and next buttons that can be used with the `usePrevNextButtons` hook.
- Provide customizable children props for button text or icons.

### Implementation

#### `usePrevNextButtons` Hook

- Maintains state for `prevBtnDisabled` and `nextBtnDisabled` based on the current position within the Embla Carousel (i.e., whether scrolling past the first or last item is possible).
- Provides event handlers for prev and next button clicks, which call the `scrollPrev` and `scrollNext` methods on the Embla Carousel API respectively.
- Listens for `reInit` and `select` events on the Embla Carousel API to update the state of the buttons accordingly.

#### `PrevButton` Component

- Renders a prev button with a default left arrow SVG icon.
- Exposes a `children` prop for custom button content.

#### `NextButton` Component

- Renders a next button with a default right arrow SVG icon.
- Exposes a `children` prop for custom button content.

### Example Usage

```javascript
const MyCarousel = () => {
  const emblaApi = useRef(null);
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi.current);

  return (
    <>
      <PrevButton disabled={prevBtnDisabled} onClick={onPrevButtonClick} />
      <NextButton disabled={nextBtnDisabled} onClick={onNextButtonClick} />
    </>
  );
};
```

### Additional Notes

- The styling of the prev and next buttons is customizable via CSS.
- These components are intended for use with Embla Carousel version 2.x.
- Pull requests for improvements or bug fixes are welcome. 🤝