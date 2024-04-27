export class Node<T> {
    value: T;
    next: Node<T> | null;
    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

export const arrToList = <T>(arr: Array<T>, defaultIndex: number) => {
    let head = new Node(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new Node(arr[i]);
        current = current.next;
    }
    return head;
}

export const getNextArrItemByCircle = <T>(arr: Array<T>, currentIndex: number) => arr[(currentIndex + 1) % arr.length];
