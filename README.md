# Tips & Tricks
1. Install the [React Devtool extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
2. Embrace immutability. Avoid mutating state directly, opting instead to create copies and update the state using those copies of the data.
3. Unlike the array `push()` method, the `concat()` method does not mutate the original array
4. Using the `map` method you can map data into react components.
5. React needs a key property for each list item to differentiate each list item from its siblings. Keys tell React about the identity of each component which allows React to maintain state between re-renders.
6. `key` is a special and reserved property in React, along with `ref`, a more advanced feature. Even though `key` may look like it belongs in `props`, `key` cannot be referenced using `this.props.key`. A component cannot inquire about its `key`. Keys do not need to be globally unique; they only need to be unique between components and their siblings.

# Progress
- 2021-06-10 | Full on finished. Great tutorial.`

# Terminology
## Controlled Component
A child component that receives values from the parent component and inform the paraent component when it is interacted with.

## Function Component
Function components are a simpler way to write components that only contain a render method and do not have their own state so that it does not need to extend `React.Component`. Instead it is just a function that takes `props` as input and returns what should be rendered.
