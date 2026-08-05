# 🇬🇧 Gabriela's London Travel & ESL Homework Hub

A web application created for **Gabriela** for her upcoming trip to **London in January/February**. This site serves as her interactive home for learning travel English, practicing London vocabulary, listening to British pronunciation, completing homework quizzes, and simulating real-life London conversations (cafes, airport, hotel check-in, tube transport, and winter travel tips).

---

## 🌟 Key Features

- **📚 Interactive London Vocabulary Flashcards**: 5 core categories (Airport, Tube & Transport, Cafes & Afternoon Tea, Winter Weather & Shopping, British Slang & Etiquette) with phonetic transcriptions, example sentences, and travel tips.
- **🔊 British Audio Pronunciation**: Built-in Web Speech API TTS to listen to native British English pronunciation for every word and dialogue sentence.
- **✏️ Interactive Homework Quizzes**: Fill-in-the-blank, multiple choice, and matching questions with immediate feedback, point scores, and hints.
- **🎭 Real-Life Dialogue Simulator**: Interactive roleplay for Soho cafes, hotel check-in, and local interactions.
- **🧥 Winter London Travel Guide**: Practical advice for dressing in layers for London's January/February weather (3°C to 9°C), rain gear tips, and escalator etiquette (*stand on the right!*).
- **📋 Teacher Homework Exporter**: Automatically generates a formatted text report of Gabriela's homework scores that she can copy and send to her ESL teacher via WhatsApp or email.
- **📱 Fully Responsive & Female-Friendly Design**: Rose-gold and soft winter theme, elegant typography, glassmorphism cards, micro-animations, and zero external build tools required.

---

## 🚀 How to Publish to GitHub Pages

This project is 100% static (`index.html`, `styles.css`, `app.js`, `vocabulary-data.js`), making it ready for **free GitHub Pages hosting**.

Follow these easy steps to push this project to repository `https://github.com/log210788/London`:

### Step 1: Initialize Git and Commit Files
Open PowerShell or Terminal in this folder (`e:/Documents/Gabriela`):

```bash
git init
git add .
git commit -m "Add Gabriela's London ESL Homework website"
```

### Step 2: Link to GitHub Repository & Push
```bash
git branch -M main
git remote add origin https://github.com/log210788/London.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub: `https://github.com/log210788/London`
2. Click on **Settings** > **Pages** (in the left sidebar).
3. Under **Build and deployment** -> **Source**, select **Deploy from a branch**.
4. Under **Branch**, select `main` and `/ (root)`, then click **Save**.
5. After 1-2 minutes, your website will be live at:
   **`https://log210788.github.io/London/`**

---

## 🛠️ Local Development / Preview

To test locally:
- Simply double-click `index.html` to open it in any web browser, OR
- Run a simple local server using Python/Node:
  ```bash
  npx serve .
  # OR
  python -m http.server 8000
  ```

---

## 💖 Credits
Made with love for Gabriela's London travel & English learning journey! 🇬🇧✨
