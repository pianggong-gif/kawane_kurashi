import React, { useState } from "react";

const data = {
  "静冈吘点 🍢": [
    { jp:"おすすめは何ですか？", en:"What do you recommend?", zh:"有什么推荐？" },
    { jp:"静岡おでんを食べたいです", en:"I'd like to try Shizuoka oden", zh:"我想吃静冈吘点" },
    { jp:"これは何ですか？", en:"What is this?", zh:"这是什么？" },
    { jp:"辛いですか？", en:"Is it spicy?", zh:"辣吗？" },
    { jp:"少なめ／多めでお願いします", en:"Small/Large portion please", zh:"少一点／多一点" },
    { jp:"お会計お願いします", en:"Bill please", zh:"请结账" }
  ],
  "有东木 🌲": [
    { jp:"体験できますか？", en:"Can I try this experience?", zh:"可以体验吗？" },
    { jp:"予約しています", en:"I have a reservation", zh:"我有预约" },
    { jp:"写真を撮ってもいいですか？", en:"May I take photos?", zh:"可以拍照吗？" },
    { jp:"案内してもらえますか？", en:"Can you guide me?", zh:"可以带我参观吗？" },
    { jp:"とてもきれいですね", en:"It's very beautiful", zh:"非常漂亮" }
  ],
  "川根本町 🚂": [
    { jp:"このバスは川根本町に行きますか？", en:"Does this bus go to Kawanehoncho?", zh:"这班车去川根本町吗？" },
    { jp:"どこで降りればいいですか？", en:"Where should I get off?", zh:"我该在哪里下车？" },
    { jp:"タクシーを呼べますか？", en:"Can you call a taxi?", zh:"可以帮我叫出租车吗？" },
    { jp:"本数は少ないですか？", en:"Are services infrequent?", zh:"班次少吗？" }
  ],
  "日常 🏠": [
    { jp:"トイレはどこですか？", en:"Where is the restroom?", zh:"厕所在哪里？" },
    { jp:"英語は話せますか？", en:"Do you speak English?", zh:"会说英语吗？" },
    { jp:"ゆっくり話してください", en:"Please speak slowly", zh:"请慢一点说" },
    { jp:"分かりません、もう一度お願いします", en:"Please repeat", zh:"请再说一遍" },
    { jp:"ありがとうございます！また来ます", en:"Thank you, I'll come again", zh:"谢谢！我还会再来" }
  ]
};

export default function PhraseApp() {
  const [tab, setTab] = useState(Object.keys(data)[0]);

  const speak = (text) => {
    const uttr = new SpeechSynthesisUtterance(text);
    uttr.lang = "ja-JP";
    speechSynthesis.speak(uttr);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">静岡フレーズ</h1>

      {/* タブ */}
      <div className="flex gap-2 mb-4 flex-wrap">
        {Object.keys(data).map((key) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className={`px-3 py-1 rounded-full text-sm ${
              tab === key ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {key}
          </button>
        ))}
      </div>

      {/* フレーズ一覧 */}
      <div className="space-y-3">
        {data[tab].map((p, i) => (
          <div key={i} className="p-3 border rounded-xl shadow-sm">
            <div className="font-bold text-lg">{p.jp}</div>
            <div className="text-sm text-gray-600">EN: {p.en}</div>
            <div className="text-sm text-gray-600">中文: {p.zh}</div>

            <button
              onClick={() => speak(p.jp)}
              className="mt-2 px-3 py-1 bg-green-500 text-white rounded"
            >
              🔊 再生
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
