import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const LOCAL_STORAGE_KEY = "AIzaSyCDUKYHYky8AYs8A0REZaObnC0vv5LNwhs";

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [apiKey, setApiKey] = React.useState<string>("");
  const [input, setInput] = React.useState<string>("");
  const [messages, setMessages] = React.useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [model, setModel] = React.useState<string>("gemini-2.0-flash");

  React.useEffect(() => {
    const saved = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setApiKey(saved);
    }
  }, []);

  const handleSaveApiKey = () => {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, apiKey.trim());
  };

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || !apiKey || isLoading) return;

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: trimmed,
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Prepare the last few messages as context
      const recentHistory = messages.slice(-8).map((m) => ({
        role: m.role,
        parts: [{ text: m.content }],
      }));

      const body = {
        contents: [
          ...recentHistory,
          { role: "user", parts: [{ text: trimmed }] },
        ],
      };

      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(
        apiKey.trim()
      )}`;

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Gemini API error (${res.status}): ${errorText}`);
      }

      const data = await res.json();
      const text =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        data?.candidates?.[0]?.content?.parts?.map((p: any) => p?.text).join("\n") ||
        "(No response)";

      const assistantMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: text,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err: any) {
      const assistantMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content:
          err?.message ||
          "Sorry, I couldn't reach Gemini. Please check your API key and network.",
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed right-4 bottom-4 z-50">
      {/* Toggle Button */}
      {!isOpen && (
        <Button size="lg" onClick={() => setIsOpen(true)} className="shadow-lg">
          Chat
        </Button>
      )}

      {isOpen && (
        <Card className="w-[360px] h-[540px] flex flex-col shadow-2xl">
          <CardHeader className="flex-row items-center justify-between space-y-0">
            <CardTitle className="text-base">Assistant</CardTitle>
            <div className="flex items-center gap-2">
              <select
                className="h-9 rounded-md border bg-background px-2 text-sm"
                value={model}
                onChange={(e) => setModel(e.target.value)}
              >
                <option value="gemini-1.5-flash">gemini-1.5-flash</option>
                <option value="gemini-1.5-pro">gemini-1.5-pro</option>
              </select>
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
                ✕
              </Button>
            </div>
          </CardHeader>

          <CardContent className="flex flex-col gap-3">
            <div className="flex gap-2">
              <Input
                type="password"
                placeholder="Enter Gemini API key"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
              />
              <Button variant="secondary" onClick={handleSaveApiKey}>
                Save
              </Button>
            </div>

            <ScrollArea className="h-[320px] rounded-md border p-3">
              <div className="flex flex-col gap-3">
                {messages.length === 0 && (
                  <div className="text-muted-foreground text-sm">
                    Ask me anything about this site or your content.
                  </div>
                )}
                {messages.map((m) => (
                  <div key={m.id} className={m.role === "user" ? "text-right" : "text-left"}>
                    <div
                      className={
                        m.role === "user"
                          ? "inline-block bg-primary text-primary-foreground px-3 py-2 rounded-lg"
                          : "inline-block bg-muted text-foreground px-3 py-2 rounded-lg"
                      }
                    >
                      {m.content}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>

          <CardFooter className="mt-auto">
            <div className="flex w-full items-end gap-2">
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={apiKey ? "Write a message..." : "Add your API key first"}
                className="min-h-[44px] max-h-[120px]"
              />
              <Button onClick={sendMessage} disabled={!apiKey || isLoading || !input.trim()}>
                {isLoading ? "..." : "Send"}
              </Button>
            </div>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default Chatbot;


