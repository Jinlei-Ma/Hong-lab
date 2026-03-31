"use client";

import { FormEvent, useState } from "react";

import { submitContactForm, type ContactFormValues } from "@/lib/contact";

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  message: ""
};

type FormErrors = Partial<Record<keyof ContactFormValues, string>>;

function validate(values: ContactFormValues) {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = "请输入姓名";
  }

  if (!values.email.trim()) {
    errors.email = "请输入邮箱";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "邮箱格式不正确";
  }

  if (!values.message.trim()) {
    errors.message = "请输入留言内容";
  } else if (values.message.trim().length < 10) {
    errors.message = "留言内容至少 10 个字符";
  }

  return errors;
}

export function ContactCard() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<{ tone: "idle" | "success" | "error"; message: string }>({
    tone: "idle",
    message: "当前留言表单用于页面展示，后续接入正式邮箱或表单服务后即可启用真实提交。"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus({
        tone: "error",
        message: "请先修正表单中的必填项后再提交。"
      });
      return;
    }

    setIsSubmitting(true);
    const result = await submitContactForm(values);
    setIsSubmitting(false);
    setStatus({
      tone: result.ok ? "success" : "error",
      message: result.message
    });

    if (result.ok) {
      setValues(initialValues);
      setErrors({});
    }
  }

  return (
    <div className="contactCard">
      <form className="contactForm" onSubmit={handleSubmit}>
        <label>
          <span>姓名</span>
          <input
            name="name"
            onChange={(event) =>
              setValues((current) => ({ ...current, name: event.target.value }))
            }
            placeholder="请输入姓名"
            value={values.name}
          />
          {errors.name ? <small>{errors.name}</small> : null}
        </label>

        <label>
          <span>邮箱</span>
          <input
            name="email"
            onChange={(event) =>
              setValues((current) => ({ ...current, email: event.target.value }))
            }
            placeholder="请输入邮箱"
            type="email"
            value={values.email}
          />
          {errors.email ? <small>{errors.email}</small> : null}
        </label>

        <label>
          <span>留言内容</span>
          <textarea
            name="message"
            onChange={(event) =>
              setValues((current) => ({ ...current, message: event.target.value }))
            }
            placeholder="请输入你的合作意向、项目背景或联系需求"
            rows={6}
            value={values.message}
          />
          {errors.message ? <small>{errors.message}</small> : null}
        </label>

        <button className="primaryButton" disabled={isSubmitting} type="submit">
          {isSubmitting ? "提交中..." : "提交留言"}
        </button>
      </form>

      <p className={`formStatus ${status.tone}`}>{status.message}</p>
    </div>
  );
}
