setTimeout(() => {
  const chatbotIframe = document.querySelector("iframe");
  const chatbotIframeStyles = window.getComputedStyle(chatbotIframe);
  //   console.log(chatbotIframeStyles.height);
  const chatbotIcon =
    chatbotIframe.contentWindow.document.querySelector("#chatbot-icon");
  //   console.log(chatbotIcon);
  const closeIcon =
    chatbotIframe.contentWindow.document.querySelector(".close-button");
  //   console.log(closeIcon);
  let click = 0;

  chatbotIcon.addEventListener("click", () => {
    click += 1;
    if (click % 2 == 1) {
      console.log(`clicked chatbot Icon ${click} times`);
      chatbotIframe.style.height = "800px";
      // console.log("height changed");
      chatbotIframe.style.width = "600px";
      // console.log("width changed");
    } else {
      console.log(`clicked chatbot Icon ${click} times`);

      chatbotIframe.style.height = "120px";
      // console.log("height changed");
      chatbotIframe.style.width = "120px";
    }
  });

  //   closeIcon.addEventListener("click", () => {
  //     chatbotIframe.style.height = "120px";
  //     console.log("height changed back to 120");
  //     chatbotIframe.style.width = "120px";
  //     console.log("width changed back to 120");
  //   });
  console.log(chatbotIframe);
}, 500);
