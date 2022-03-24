// const { Park } = require("../models");

// const deletePark = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const deleted = await Park.findByIdAndDelete(id)
//         if (deleted) {
//             return res.status(200).send("Park deleted");
//         }
//         throw new Error("Park has been removed");
//     } catch (err) {
//         return res.status(500).send(err.message);
//     }
// }

// module.exports = {
//     deletePark
// }