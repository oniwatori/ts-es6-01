class Startup {
    public static main(): void {
        var name = "Name";
        var message = `${name} have a nice day!
        asdasadsa`;
        console.log(message);
        console.log("name:");
        for (const iterator of name) {
            console.log(iterator);
        }
    }
}
Startup.main();