# Mida Website
Website and CMS for Mida agency. 


## Guidelines

**Don't hardcode website copy/text in code**
There's a `src/data` folder for situating website content in as a JavaScript object so all website text content should be put in there. This is to make it easy for us to transition to putting it all in a CMS if we ever need to. 
E.g., if you need to code an about page and pull website content.

- create `about.js`
- export default object.
- Organize the content heirarchically in the object using appropriate data structures (arrays for list of items, nested objects for content with properties
- E.g.

```jsx
// src/dta/about.js
const aboutPageData = {
	title: "About us"
	bigTitle: "Hey, we're MIDA"
	subtitle: "We enhance brands by creating elevated digital experiences."
	introImage: "absolute/image/in/public/folder/relative/to/website/root.jpg"
}

export default aboutPageData
```

```jsx
// pages/about.ts
import data from '~/data/aboutPageData'

const Page = () => {
	return (
		<h1>{data.title}</h1>
}
```

# Useful/re-usable snippets

Feel free to add here copy and paste code or abstractions that can help

1. Use the `c-container` custom class to contain things don’t need to stretch to end of screen. It’s written to cater for the different screen sizes
2. TODO: Add animation components/abstractions