const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY);

// Converts local file information to a GoogleGenerativeAI.Part object.
function fileToGenerativePart(path, mimeType) {
    return {
        inlineData: {
            data: Buffer.from(fs.readFileSync(path)).toString("base64"),
            mimeType
        },
    };
}

exports.run = async (req, res) => {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = "Describe in detail what is happeing in this picture and who is in the picture";

    const imageParts = [
        fileToGenerativePart("image1.jpeg", "image/jpeg")
        // fileToGenerativePart("image2.jpg", "image/jpg"),
    ];

    const result = await model.generateContent([prompt, ...imageParts]);
    const response = await result.response;
    const text = response.text();
    
    console.log(text);

    res.json({message: text})
}
