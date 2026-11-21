test("SearchColors API returns matching colors for a user", async () => {
    // Arrange
    const requestBody = {
        userId: 1,
        search: "Blue"
    };

    // Act
    const response = await fetch(
        "http://127.0.0.1:8000/LAMPAPI/SearchColors.php",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestBody)
        }
    );

    const data = await response.json();

    // Assert
    expect(response.status).toBe(200);
    expect(data.error).toBe("");
    expect(data.results).toEqual(["Blue"]);
});