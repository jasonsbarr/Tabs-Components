/**
 * @property {HTMLElement} element HTML element that contains carousel items
 * @property {Array} items array of CarouselItem components
 * @property {Object} buttons HTML elements that serve as buttons to switch items
 * @property {Number} current index of the currently active 
 * @property {Number} next index of the next element in line
 */
class Carousel {
    /**
     * 
     * @param {HTMLElement} element HTML element for carousel container
     */
    constructor(element) {
        this.element = element;
        this.items = [...document.querySelectorAll('.carousel-item')]
            .map(item => new CarouselItem(item));
        this.buttons = this.createButtons([...document.querySelectorAll('.carousel-button')]);
        this.current = this.items.findIndex(item => item.element.classList.contains('carousel-item-active'));
        this.next = this.setNext();
        this.setButtonEventHandlers();
    }

    /**
     * 
     * @param {Array} elements array of HTML elements for Button components
     */
    createButtons(elements) {
        return {
            left: new CarouselButton(elements.find(element => element.classList.contains('left'))),
            right: new CarouselButton(elements.find(element => element.classList.contains('right'))),
        };
    }

    setButtonEventHandlers() {
        this.buttons.left.element.addEventListener('click', () => this.showItem('next'));
        
        this.buttons.right.element.addEventListener('click', () => this.showItem('prev'));
    }

    /**
 * 
 * @param {String} direction direction of CarouselItem to show on click
 */
    showItem(direction) {
        if (direction === 'next') {
            this.items[this.current].element.classList.remove('carousel-item-active');
            this.items[this.next].element.classList.remove('carousel-item-next');
            this.items[this.next].element.classList.add('carousel-item-active');
            this.current = this.next;
            this.next = this.setNext();
            console.log(this.current, this.next);
            this.items[this.next].element.classList.add('carousel-item-next')
        } else if (direction === 'prev') {
            this.items[this.current].element.classList.remove('carousel-item-active');
            this.items[this.next].element.classList.remove('carousel-item-next');
            this.items[this.current].element.classList.add('carousel-item-next');
            this.current = (this.current === 0) ? this.items.length - 1 : this.current - 1;
            this.items[this.current].element.classList.add('carousel-item-active');
            this.next = this.setNext();
        }
    }

    setNext() {
        return (this.current === this.items.length - 1) ? 0 : this.current + 1;
    }
}

/**
 * @property {HTMLElement} element HTML element for CarouselItem
 */
class CarouselItem {
    /**
     * 
     * @param {HTMLElement} element HTML element for carousel item
     */
    constructor(element) {
        this.element = element;
    }
}

class CarouselButton {
    /**
     * 
     * @param {HTMLElement} element HTML element that serves as carousel button
     */
    constructor(element) {
        this.element= element;
    }
}

const carousel = new Carousel(document.querySelector('.carousel'));
console.log(carousel);
