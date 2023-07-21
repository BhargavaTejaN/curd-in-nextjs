import { connectTODB } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (req, res) => {
  const { userId,title, prompt, tag } = await req.json();

  try {
    await connectTODB();
    const newPrompt = new Prompt({ creator: userId,title,prompt,tag });
    await newPrompt.save();
    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    console.log("ERROR WHILE CREATING PROMPT API :", error);
    return new Response("Failed to create a propmt", { status: 500 });
  }
};
