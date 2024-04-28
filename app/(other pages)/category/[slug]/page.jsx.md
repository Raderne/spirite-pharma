## Table of Contents
* [Overview](#overview)
* [Usage](#usage)
* [Structure](#structure)
* [Styling](#styling)
* [Dependencies](#dependencies)

## Overview
This React component renders a category page for an e-commerce website. It displays a list of products in the selected category along with the category's description and a list of all available categories.

## Usage
```
import CategoryPage from "./CategoryPage";

// Get the category slug from the URL
const { slug } = props.params;

// Pass the slug to the CategoryPage component
<CategoryPage slug={slug} />
```

## Structure
The component is structured as follows:
* A sidebar that contains a list of all available categories.
* A main content area that displays the products in the selected category.

## Styling
The component uses the following CSS classes:
* `bg-white` - The background color of the component.
* `-mt-8 md:mt-20` - The margin top of the component.
* `grid grid-cols-1 md:grid-cols-5` - The layout of the component.
* `col-span-1` - The sidebar.
* `relative` - The sidebar is positioned relative to the main content area.
* `p-2` - The padding of the sidebar.
* `rounded-xl` - The sidebar has rounded corners.
* `absolute` - The sidebar is positioned absolutely.
* `z-20` - The sidebar has a higher z-index than the main content area.
* `sticky` - The sidebar sticks to the top of the page when the user scrolls down.
* `top-4` - The sidebar is positioned 4px from the top of the page.
* `left-4` - The sidebar is positioned 4px from the left side of the page.
* `w-4/5` - The sidebar is 4/5 of the width of the page.
* `transition-all duration-500 ease-in-out` - The sidebar animates when it is opened or closed.
* `hidden` - The sidebar is hidden when the user is on a large screen.
* `md:flex` - The sidebar is displayed when the user is on a large screen.
* `md:w-auto` - The sidebar is automatically sized when the user is on a large screen.

## Dependencies
The component depends on the following modules:
* `react`
* `next/link`
* `next/image`
* `getSanityData`

## Additional Notes
* The component uses the `getSanityData` function to fetch data from the Sanity CMS.
* The component uses the `useEffect` hook to fetch the data and set the state of the component.
* The component uses the `useState` hook to manage the state of the sidebar.