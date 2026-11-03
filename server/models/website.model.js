import mongooes from "mongoose";

const conversationSchema = new mongooes.Schema(
  {
    role: {
      type: String,
      enum: ["user", "ai"],
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const websiteSchema = new mongooes.Schema(
  {
    user: {
      type: mongooes.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      default: "untitled Website",
    },
    latestCode: {
      type: String,
      required: true,
    },
    conversation: [conversationSchema],
    deployed: {
      type: Boolean,
      default: false,
    },
    deployedUrl: {
      type: String,
    },
    slug: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true },
);

const Website = mongooes.model("Website", websiteSchema);

export default Website;
