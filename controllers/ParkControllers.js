const { Park } = require("../models");

const deletePark = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Park.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Park deleted");
        }
        throw new Error("Plant has been removed");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    deletePark
}