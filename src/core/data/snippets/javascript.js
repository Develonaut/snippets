const javascript = {
  items: [
    {
      id: "44da7512-cafe-435a-b47b-b6835be5a11e",
      name: "Animate.js",
      language: "javascript",
      tags: [],
      value: `/*!
 * Apply a CSS animation to an element
 * (c) 2021 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}     node      The element to animate
 * @param  {String}   animation The animation class to apply
 * @param  {Function} onEnd     A callback function to run when the animation ends [optional]
 */
function animate (node, animation, onEnd = function () {}) {
	node.classList.add(animation);
	node.addEventListener('animationend', function () {
		node.classList.remove(animation);
		onEnd(node, animation);
	}, {once: true});
}`,
    },
    {
      id: "55962345-f7ab-4a74-bae4-efa7f7aaa7cb",
      name: "usePrevious.js",
      language: "jsx",
      tags: [],
      value: `// Hook
function usePrevious(value) {
   // The ref object is a generic container whose current property is mutable ...
   // ... and can hold any value, similar to an instance property on a class
   const ref = useRef();
   // Store current value in ref
   useEffect(() => {
      ref.current = value;
   }, [value]); // Only re-run if value changes
   // Return previous value (happens before update in useEffect above)
   return ref.current;
}`,
    },
  ],
};

export default javascript;
