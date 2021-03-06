class UtilityFunctions {
    /**
     * Returns a promise that resolves to true after the passed number of ms
     * @param ms number
     * @returns Promise
     */
    static delay(ms: number) {
        return new Promise((res) => setTimeout(() => res(true), ms));
    }

    /**
     * Move the passed element right 100px over 1 second
     * @param el HTMLElement
     */
    static animateRight(el: HTMLElement) {
        let elementOffset = 0;
        const animationInterval = setInterval(() => {
            elementOffset += 1;
            el.style.left = `${elementOffset}px`;

            if (elementOffset >= 100) {
                clearInterval(animationInterval);
            }
        }, 10);
    }

    /**
     * Removes duplicates from an input array.
     * @param xs any[]
     * @returns any[]
     */
    static removeDuplicates(xs: any[]) {
        return Array.from(new Set(xs))
    }
}

export default UtilityFunctions;
