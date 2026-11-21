const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

test("displays an error when login fails", () => {
    // Arrange
    const elements = {
        loginName: { value: "invalidUser" },
        loginPassword: { value: "invalidPassword" },
        loginResult: { innerHTML: "" }
    };

    const mockXHR = {
        open: jest.fn(),
        setRequestHeader: jest.fn(),
        readyState: 4,
        status: 200,
        responseText: JSON.stringify({ id: 0 }),
        send: function () {
            this.onreadystatechange();
        }
    };

    const context = {
        document: {
            getElementById: (id) => elements[id]
        },
        XMLHttpRequest: function () {
            return mockXHR;
        }
    };

    const source = fs.readFileSync(
        path.join(__dirname, "../js/code.js"),
        "utf8"
    );

    vm.createContext(context);
    vm.runInContext(source, context);

    // Act
    context.doLogin();

    // Assert
    expect(elements.loginResult.innerHTML).toBe(
        "User/Password combination incorrect"
    );
});