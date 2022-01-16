
/**
 * importing the class from our source file. I don't why but It looks like
 * the it's defining a new custom element. So we have a custom element inside another
 * custom tag.
 */
import { HelloWorld } from './src/HelloWorld.js';

window.customElements.define('hello-world', HelloWorld);
