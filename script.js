import { generate } from "https://cdn.jsdelivr.net/npm/@pdfme/generator";

const template = {
    basePdf: "https://taiki4532.github.io/pdfme-webapp/sugoroku.pdf", // ここを実際のURLに変更
    schemas: [
        [
            { name: "title", type: "text", position: { x: 50, y: 50 }, width: 200, height: 20 },
            { name: "player1", type: "text", position: { x: 50, y: 100 }, width: 200, height: 20 },
            { name: "player2", type: "text", position: { x: 50, y: 150 }, width: 200, height: 20 }
        ]
    ]
};

document.getElementById("generatePdf").addEventListener("click", async () => {
	System.out.println("test");
    const inputs = [
        {
            title: document.getElementById("title").value,
            player1: document.getElementById("player1").value,
            player2: document.getElementById("player2").value
        }
    ];

    const pdf = await generate({ template, inputs });

    // PDFをダウンロード
    const blob = new Blob([pdf], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    window.open(url);
});
