const yearTarget = document.querySelector("#current-year");

if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}

const rawTextBlocks = document.querySelectorAll("[data-source]");

rawTextBlocks.forEach(async (block) => {
  const source = block.getAttribute("data-source");

  if (!source) {
    block.textContent = "未找到文本来源。";
    return;
  }

  try {
    const response = await fetch(source);

    if (!response.ok) {
      throw new Error(`Failed to load ${source}`);
    }

    const text = await response.text();
    block.textContent = text.trim();
  } catch (error) {
    block.textContent = "文本加载失败，请直接使用上方下载链接查看原始文件。";
    console.error(error);
  }
});
