const db = require("../connection");

exports.fetchCategories = () => {
    db.collection('categories').get().then((snapshot) => {
        return snapshot
    })
    
};

exports.saveCategory = (category) => {
    db.collection('categories').add(category);
}
