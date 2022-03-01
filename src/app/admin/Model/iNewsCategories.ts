export interface iNewsCategories{
    // _id:mongoose.Schema.Types.ObjectId,
    NCategory: {
        type: String,
        required: true
    },
    NCStatus: {
        type: Boolean,
        required: true,
        default: true
    }
}