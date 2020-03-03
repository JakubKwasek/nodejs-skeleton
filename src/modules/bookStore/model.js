module.exports = (db = null)  => {
	const books = db.collection("books");
	return {
		async findAll() {
			return books
				.find()
				.toArray()
		},
	}
}
