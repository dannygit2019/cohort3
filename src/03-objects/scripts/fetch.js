const functions = {
    getFirstName: (data) => {
        //console.log(data[0].name);
        return data[0].name;
    },

    getAllFirstNames: (data) => {
        let newArray = data.map((getname) => getname.name);
        return newArray;
    }

};

export default functions;