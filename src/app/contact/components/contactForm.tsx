"use client";

import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import toast from "react-hot-toast";
import { Input } from "./input";
import { TextArea } from "./textArea";
import { ImSpinner9 } from "react-icons/im";
import { BiMailSend } from "react-icons/bi";

const newMessageFormSchema = z.object({
  name: z.string().min(3, { error: "Por favor, insira seu nome!" }),
  email: z.email({ error: "Adicione um e-mail válido!" }),
  message: z.string().min(3, { error: "Insira uma mensagem!" }),
});

export type NewMessageProps = z.infer<typeof newMessageFormSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(newMessageFormSchema),
  });
  const [isSendingEmail, setIsSendingEmail] = useTransition();

  function handleSendMessage(payload: NewMessageProps) {
    setIsSendingEmail(async () => {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      reset();

      if (data.success) {
        toast.success(
          "Sua Mensagem foi enviada com sucesso! Entrarei em contato o mais breve possível 😄"
        );
      } else {
        toast.error("Erro ao enviar mensagem!");
      }
    });
  }

  return (
    <form
      onSubmit={handleSubmit(handleSendMessage)}
      className="m-4 pt-8 2xl:pt-0 2xl:pl-8 border-gray-300 border-t-1 2xl:border-t-0 2xl:border-l-1 flex flex-col justify-between"
    >
      <div className="space-y-10">
        <Input
          placeholder="Nome"
          {...register("name")}
          error={errors.name?.message}
        />

        <Input
          placeholder="E-Mail"
          type="text"
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
        className="h-10 mt-10 text-sm text-center font-semibold w-full rounded text-white bg-blue-950 hover:bg-blue-900 transition-colors"
      >
        <div className="flex items-center justify-center gap-4">
          {isSendingEmail ? (
            <>
              <ImSpinner9 className="w-5 h-5 animate-spin" />
              <p>Enviando mensage</p>
            </>
          ) : (
            <>
              <BiMailSend className="w-5 h-5" />
              <p>Enviar mensage</p>
            </>
          )}
        </div>
      </button>
    </form>
  );
}
