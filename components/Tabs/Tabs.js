/**
 * @class TabLink
 * @classdesc a link styled as a tab that when clicked displays its associated content in the target
 * 
 * @property {HTMLElement} element  HTML element of the TabLink object
 * @property {Number} data  value of the data-tab attribute on the TabLink and its TabItem
 * @property {HTMLElement} itemElement  the element of the TabItem connected to this TabLink
 * @property {TabItem} tabItem  the TabItem component connected to this TabLink
 */
class TabLink {
  /**
   * Create TabLink object
   * @param {HTMLElement} element the HTML element used as a TabLink component
   */
  constructor(element) {
    // Assign this.element to the passed in DOM element
    this.element = element;
    
    // Get the custom data attribute on the Link
    this.data = element.dataset.tab;
    
    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
    
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);
    
    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener('click', evt => this.select(evt))

  };

  /**
   * Take click and display TabItem content associated with the current TabLink
   * 
   * @param {Event} evt click event object
   */
  select(evt) {
    // Get all of the elements with the tabs-link class
    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    // I'm using .map() BECAUSE I CAN
    const links = [...document.querySelectorAll('.tabs-link')]
      .map(link => link.classList.remove('tabs-link-selected'));


    // Add a class named "tabs-link-selected" to this link
    this.element.classList.add('tabs-link-selected');
    
    // Call the select method on the item associated with this link
    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    // this.element;
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    // const items;

    // Remove the class "tabs-item-selected" from each element
    
    // Add a class named "tabs-item-selected" to this element
    //this.element;
  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

const links = [...document.querySelectorAll('.tabs-link')]
  .map(link => new TabLink(link));
