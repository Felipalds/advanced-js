console.log("Starting timeout")

const fn = () => {
    console.log("hey")
    setTimeout(() => {
        console.log("1 sec later")
    }, 1000)
}

fn()