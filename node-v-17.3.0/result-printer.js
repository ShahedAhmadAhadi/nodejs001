const resultPrinter = (filename, result) => {

}

exports.getRowNum = () => {
    let e = new Error();
    e = e.stack.split("\n")[2].split(":");
    e.pop();
    return e.pop();
}

