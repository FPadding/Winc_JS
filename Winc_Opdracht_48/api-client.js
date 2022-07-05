const apiUrl = "http://localhost:3000/"

const getLocal = async () => {
    try {
        res = await fetch(apiUrl, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        json = await res.json();
        return json;
    } catch (error) {
        console.log(error);
    }
}

const postLocal = async (data) => {
    try {
        res = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        json = await res.json();
        return json
    } catch (error) {
        console.log(error);
    }
}

const deleteLocal = async (id) => {
    try {
        await fetch((apiUrl + id), {
            method: "DELETE"
        })
    }
    catch (error) {
        console.log(error);
    }
}

const putDone = async (id, boolean) => {
    try {
        await fetch((apiUrl + id), {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                done: boolean
            })
        })
    } catch (error) {
        console.log(error);
    }
}