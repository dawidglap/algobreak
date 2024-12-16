import dbConnect from "@/utils/db";

export async function GET(request) {
  try {
    await dbConnect();
    return Response.json({ message: "MongoDB connected successfully!" });
  } catch (error) {
    console.error("MongoDB connection error:", error);
    return Response.json(
      { error: "Failed to connect to MongoDB" },
      { status: 500 }
    );
  }
}
