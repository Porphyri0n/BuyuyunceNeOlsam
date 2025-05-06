import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";
import { GEMINI_API_KEY } from "./env.js";
// TODO: API anahtarınızı güvenli bir şekilde sunucu tarafında saklayın
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "models/gemini-2.5-flash-preview-04-17" });

const form = document.getElementById("career-form");
const resultSection = document.getElementById("result-section");
const outputDiv = document.getElementById("output");
const submitBtn = document.getElementById("submit-btn");
const btnText = submitBtn.querySelector(".btn-text");
const spinner = submitBtn.querySelector(".loading-spinner");

function setLoading(state) {
  if (state) {
    spinner.classList.add("show");
    btnText.textContent = "Bekleyin...";
    submitBtn.disabled = true;
  } else {
    spinner.classList.remove("show");
    btnText.textContent = "Önerileri Al";
    submitBtn.disabled = false;
  }
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  setLoading(true);

  const formData = new FormData(form);
  const userInfo = Array.from(formData.entries())
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");

  const prompt = `Aşağıdaki kullanıcı bilgilerine göre Türkçe olarak 3 potansiyel kariyer yolu öner:\n${userInfo}\nHer kariyer yolunu **başlık**, açıklama ve gerekli adımlar şeklinde madde işaretli liste halinde döndür.`;

  try {
    const result = await model.generateContent(prompt);
    const text = result.response.text();

    // Basit Markdown -> HTML dönüşümü
    const html = text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // bold
      .split("\n")
      .map((line) => {
        if (/^-\s+/.test(line)) {
          return `<li>${line.replace(/^-\s+/, "")}</li>`;
        }
        return `<p>${line}</p>`;
      })
      .join("")
      .replace(/<p><li>/g, "<ul><li>")
      .replace(/<\/li><\/p>/g, "</li></ul>");

    outputDiv.innerHTML = html;
    resultSection.classList.remove("hidden");
    resultSection.scrollIntoView({ behavior: "smooth" });
  } catch (err) {
    outputDiv.innerHTML = `<p class="error">Hata: ${err.message}</p>`;
    resultSection.classList.remove("hidden");
  } finally {
    setLoading(false);
  }
});
