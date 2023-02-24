/* @Autor: Thiago */

export default async function modal(func, val, id) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("modalWrapper");

  const closeIcon = document.createElement("i");
  closeIcon.classList.add("fa-solid", "fa-xmark", "closeIcon");
  closeIcon.onclick = () => {
    document.querySelector("#root").removeChild(wrapper);
  };

  wrapper.appendChild(closeIcon);

  wrapper.appendChild(await func(val, id));

  document.querySelector("#root").appendChild(wrapper);

  wrapper.onclick = (e) => {
    if (e.target == wrapper) {
      document.querySelector("#root").removeChild(wrapper);
    }
  };
}
