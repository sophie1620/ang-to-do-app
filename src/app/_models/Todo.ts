export interface Todo {
    content: string;
    completed: boolean;
}

// interface doesn't become an object, but rather it only tells what to expect.  A class can become an object--so I can create a new Todo
    // interface is useful for being used across multiple classes