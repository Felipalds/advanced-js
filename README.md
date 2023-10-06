# So, Advanced JS?
> Javascript is a single threaded single concurrent language
- This means that JS can handle only one task at a time (or one piece of code)
- It has a single *call stack* 

## Call stack
- It is a data structure which records the function calls
- In Assembly we have the stack too! :) (basically in any program)
- If we call a function, we push this function to the call stack. If we return some function, we pop this function from the call stack.
- Stack overflow error is when we ran out of memory in the stack or we had reached the max of the call stack.
- Everything in Javascript pass throught the *call stack*.
- Some things whill block it and execute immediatly and some things will be handled later

## Event Loop
- Observes the call stack. IF it is empty, it will look to microTasks and Tasks

## Heap
- Memory allocation, variables and objects

## V8
- Is the engine that interprets our JS code 

## Libuv
- Is a C++ Scheduler, used to Event Lopp or Call Stack

## NodeJS
- Is a C++ Program that is in the middle of our JS Code, our V8 Interpreter and our Libuv Scheduler


### Articles recomendation:
- https://medium.com/@gaurav.pandvia/understanding-javascript-function-executions-tasks-event-loop-call-stack-more-part-1-5683dea1f5ec
- https://www.youtube.com/watch?v=YI9ckiCuuoc
