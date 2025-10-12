"use client";

import { Input } from "./input";
import { TextArea } from "./textArea";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const newMessageFormSchema = z.object({
  name: z.string({ error: "Por favor, insira seu nome!" }),
  email: z.email({ error: "Adicione um e-mail válido!" }),
  message: z.string({ error: "Insira uma mensagem!" }),
});

export type NewMessageProps = z.infer<typeof newMessageFormSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(newMessageFormSchema),
  });

  async function handleSendMessage(payload: NewMessageProps) {
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (data.success) {
      alert("Mensagem enviada com sucesso!");
    } else {
      alert("Erro ao enviar mensagem!");
    }
  }

  return (
    <form
      onSubmit={handleSubmit(handleSendMessage)}
      className="px-10 py-8 flex flex-col justify-between"
    >
      <div className="space-y-10">
        <Input
          placeholder="Nome"
          {...register("name")}
          error={errors.name?.message}
        />

        <Input
          placeholder="E-Mail"
          type="email"
          {...register("email")}
          error={errors.email?.message}
        />

        <TextArea
          placeholder="Mensagem"
          {...register("message")}
          error={errors.message?.message}
        />
      </div>

      <button
        type="submit"
        className="h-10 text-sm text-center font-semibold w-full rounded text-white bg-blue-950 hover:bg-blue-900 transition-colors"
      >
        Enviar mensagem
      </button>
    </form>
  );
}
