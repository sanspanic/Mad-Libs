# Conceptual Exercise

Answer the following questions below:

### 1. What is React? When and why would you use it?

React is a front-end library for building user interfaces. It enables creating reusable components, which encapsulate logic and HTML into a class/function. This makes it easier to build modular applications. 

### 2. What is Babel?

Babel is a JS compiler. It is mainly used to convert ES6 JS into backwards compatible versions of JS, however, in a React environment, it converts JSX into regular JS. 

### 3. What is JSX?

It is a syntax extension to JS, which incorporates HTML-like syntax.  

### 4. How is a Component created in React?

React components implement a render() method that takes input data and returns what to display. Components are like JS functions - they accept inputs (props) and return React elements decsribing what should appear on screen.

### 5. What are some difference between state and props?

React components have a built-in state objecct. When the state changes, the component is automatically re-rendered. Props are variables passed to the component by its parent component. 

### 6. What does "downward data flow" refer to in React?

Props can be used to manage state by passing down methods to children components. When these are executed, the children affect the state of the parent component. This changed state then causes the components to re-render. 

### 7. What is a controlled component?

Forms are handled as controlled components by React. This means that the form data is handled directly by React as state. This is done by writing an event handler for every state update. 

### 8. What is an uncontrolled component?

The controlled component is a convenient technique to access the value of input fields in React. It doesn’t use references and serves as a single source of truth to access the input value.

Setting up a controlled input requires 3 steps:

* creating the state to hold the input value 
* defining the event handler to update the state when the user types into input
* attaching the event handler to the value attribute on the input field



### 9. What is the purpose of the `key` prop when rendering a list of components?

The key prop is a mechanism for controlling component instances. React uses the key prop to track components over time. If given an array, React needs this unique identifying to be able to compare the array to its previous version. 

### 10. Why is using an array index a poor choice for a `key` prop when rendering a list of components?

Because when items are removed from an array, the array index of the item changes in between renders. This means React will assign the element the wrong state.

### 11. Describe useEffect.  What use cases is it used for in React components?

A functional React component uses props and/or state to calculate the output. If the functional component makes calculations that don’t target the output value, then these calculations are named side-effects. `useEffect` is a hook that is used to manage these side effects. This can be setting timers, fetching data from an external API or directly manipulating the DOM. 

### 12. What does useRef do?  Does a change to a ref value cause a rerender of a component?

No. UseRef holds something akin to a global variable. The “ref” object is a generic container whose `current` property is mutable and can hold any value. It persists across re-renders.

### 13. When would you use a ref? When wouldn't you use one?

`useRef` is useful when accessing DOM elements whose propertites can't be otherwise manipulated, e.g. playback speed. It is also commonly used to set/clear timers. It should not be used to access regular DOM elements and make changes (toggle classes, set text, etc). This should be handles via state instead. 

### 14. What is a custom hook in React? When would you want to write one?

A custom hook is a JS function that typically uses built in hooks. A custom hook is reusable across different components: it can abstart logic, handle repeated tasks or generate custom JSX. A common use case is toggling or fetchin data from APIs.
