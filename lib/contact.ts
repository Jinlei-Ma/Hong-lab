export type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

export type ContactSubmitResult = {
  ok: boolean;
  message: string;
};

const wait = (time: number) =>
  new Promise<void>((resolve) => {
    setTimeout(resolve, time);
  });

export async function submitContactForm(
  values: ContactFormValues
): Promise<ContactSubmitResult> {
  const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

  if (!endpoint) {
    await wait(700);
    return {
      ok: true,
      message:
        "留言内容已完成前端校验。后续接入正式邮箱或表单服务后即可启用真实提交。"
    };
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return {
      ok: true,
      message: "留言已发送成功，感谢你的联系。"
    };
  } catch {
    return {
      ok: false,
      message:
        "留言暂时未能发送成功。你可以稍后重试，或在接入正式提交服务后再次启用该功能。"
    };
  }
}
