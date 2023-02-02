const mongoose = require('mongoose')

const boardSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        required: true
    },
    columns: {
        type: [
            {
                name: String,
                tasks: {
                    type: [
                        {
                            title: String,
                            description: String,
                            status: String,
                            subtasks: {
                                type: [
                                    {
                                        title: String,
                                        isCompleted: Boolean
                                    }
                                ],
                                required: false
                            }
                        }
                    ],
                    required: false
                }
            }
        ],
        required: false
    }
},
{
    timestamps: true
}
)

module.exports = mongoose.model("Board", boardSchema)