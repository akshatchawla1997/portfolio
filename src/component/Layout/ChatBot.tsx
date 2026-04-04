import { useEffect, useRef, useState } from "react";
import { AiOutlineClose, AiOutlineSend } from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";

const faqList = [
  {
    question: "What services do you offer?",
    answer: "I provide frontend and backend development, AI/ML systems, cloud automation, web/mobile apps, dashboards, and API integrations.",
  },
  {
    question: "How can I contact you?",
    answer: "Email: akshatchawla1997@gmail.com, Phone: +91 9897976962, WhatsApp: https://wa.me/9897976962.",
  },
  {
    question: "Can you handle an AI or automation project?",
    answer: "Yes — I can handle AI model training, chatbot systems, automation workflows, and cloud deployments.",
  },
  {
    question: "Do you build new client projects?",
    answer: "Yes, I accept new client projects. Share your idea and I’ll tell you whether it’s a good fit.",
  },
];

const supportedProjectKeywords = [
  "ecommerce",
  "ai",
  "ml",
  "machine learning",
  "chatbot",
  "automation",
  "react",
  "next",
  "node",
  "fastapi",
  "django",
  "cloud",
  "aws",
  "gcp",
  "dashboard",
  "saas",
  "mobile",
  "app",
  "website",
  "api",
  "computer vision",
  "data analytics",
];

const transformMessage = (message: string) => ({
  id: Date.now() + Math.random(),
  sender: "user" as const,
  text: message,
});

const buildBotMessage = (text: string) => ({
  id: Date.now() + Math.random(),
  sender: "bot" as const,
  text,
});

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Array<{ id: number; sender: "user" | "bot"; text: string }>>([
    buildBotMessage("Hi there! I’m your portfolio assistant. Ask me for FAQ, contact info, or check new project availability."),
  ]);
  const [projectMode, setProjectMode] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    const trimmed = message.trim();
    if (!trimmed) return;

    const userMessage = transformMessage(trimmed);
    setMessages((current) => [...current, userMessage]);
    setMessage("");

    if (projectMode) {
      setProjectMode(false);
      const normalized = trimmed.toLowerCase();
      const match = supportedProjectKeywords.some((keyword) => normalized.includes(keyword));
      const reply = match
        ? "Yes — this new project looks like something I can handle. I can help with development, cloud deployment, and AI automation. Share more details anytime."
        : "I’m not sure from that description alone, but I can still help. Please share more details about the industry, platform, or technology so I can confirm. ";
      setMessages((current) => [...current, buildBotMessage(reply)]);
      return;
    }

    const normalized = trimmed.toLowerCase();
    let response = "I’m here to help. You can choose FAQ, contact info, or ask about a new project.\n";

    if (normalized.includes("faq") || normalized.includes("questions") || normalized.includes("service")) {
      response = faqList
        .map((item) => `Q: ${item.question}\nA: ${item.answer}`)
        .join("\n\n");
    } else if (normalized.includes("contact") || normalized.includes("email") || normalized.includes("phone") || normalized.includes("whatsapp")) {
      response = "Contact details:\nEmail: akshatchawla1997@gmail.com\nPhone: +91 9897976962\nWhatsApp: https://wa.me/9897976962";
    } else if (normalized.includes("new project") || normalized.includes("project available") || normalized.includes("handle it") || normalized.includes("available")) {
      setProjectMode(true);
      response = "Sure — please type your project idea or technology, and I’ll check whether it’s a fit.";
    } else if (normalized.includes("help") || normalized.includes("hello") || normalized.includes("hi")) {
      response = "Hi! I can answer FAQs, share contact details, or help you check new project availability. Try asking ‘Can you handle a new project?’";
    } else if (supportedProjectKeywords.some((keyword) => normalized.includes(keyword))) {
      response = "This looks like a project I can handle. I have experience in web apps, AI, mobile apps, APIs, and cloud deployments.";
    } else {
      response = "I’m not sure I understand fully. Please ask for FAQ, contact details, or describe your new project idea.";
    }

    setMessages((current) => [...current, buildBotMessage(response)]);
  };

  const handleQuickReply = (type: "faq" | "contact" | "project") => {
    if (type === "faq") {
      const response = faqList.map((item) => `Q: ${item.question}\nA: ${item.answer}`).join("\n\n");
      setMessages((current) => [...current, buildBotMessage(response)]);
      setProjectMode(false);
    }
    if (type === "contact") {
      setMessages((current) => [
        ...current,
        buildBotMessage("Contact details:\nEmail: akshatchawla1997@gmail.com\nPhone: +91 9897976962\nWhatsApp: https://wa.me/9897976962"),
      ]);
      setProjectMode(false);
    }
    if (type === "project") {
      setProjectMode(true);
      setMessages((current) => [...current, buildBotMessage("Tell me your project idea or technology, and I’ll confirm if I can handle it.")]);
    }
    setIsOpen(true);
  };

  return (
    <div className="fixed bottom-8 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-3 w-[320px] sm:w-[360px] rounded-3xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 shadow-2xl shadow-slate-900/10 dark:shadow-black/40 overflow-hidden">
          <div className="flex items-center justify-between bg-slate-100 dark:bg-slate-900 px-4 py-3">
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 truncate">Chat with me</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 truncate">AI assistant for FAQ, contact, project checks</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="ml-3 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
              <AiOutlineClose size={20} />
            </button>
          </div>
          <div className="border-b border-slate-200 dark:border-slate-800 px-4 py-3 bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300 text-xs">
            Quick actions:
            <div className="mt-2 flex flex-wrap gap-2">
              <button type="button" onClick={() => handleQuickReply("faq")} className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-xs font-medium text-slate-700 dark:text-slate-200">FAQ</button>
              <button type="button" onClick={() => handleQuickReply("contact")} className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-xs font-medium text-slate-700 dark:text-slate-200">Contact</button>
              <button type="button" onClick={() => handleQuickReply("project")} className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-xs font-medium text-slate-700 dark:text-slate-200">Project check</button>
            </div>
          </div>
          <div className="h-[360px] overflow-y-auto px-4 py-3 space-y-3 bg-slate-50 dark:bg-slate-900">
            {messages.map((messageItem) => (
              <div key={messageItem.id} className={messageItem.sender === "bot" ? "rounded-3xl bg-white dark:bg-slate-800 p-3 shadow-sm" : "self-end rounded-3xl bg-emerald-500 text-white p-3 shadow-sm"}>
                <p className={messageItem.sender === "bot" ? "text-sm text-slate-800 dark:text-slate-100 whitespace-pre-line" : "text-sm text-white whitespace-pre-line"}>
                  {messageItem.text}
                </p>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="px-4 py-3 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                placeholder="Type your message..."
                className="flex-1 rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-2 text-sm text-slate-900 dark:text-slate-100 focus:border-emerald-400 focus:outline-none"
              />
              <button
                type="button"
                onClick={handleSend}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500 text-white hover:bg-emerald-600"
              >
                <AiOutlineSend size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl shadow-emerald-500/20 hover:bg-emerald-600 focus:outline-none"
        aria-label="Toggle Chatbot"
      >
        <FiMessageSquare size={24} />
      </button>
    </div>
  );
}
