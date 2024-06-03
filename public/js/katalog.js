const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
const closeBtn = document.getElementById("close");

burger.addEventListener("click", () => {
  if (menu.style.zIndex < 50) {
    menu.classList.add("opacity-100");
    menu.classList.add("z-50");
    menu.classList.remove("opacity-0");
    menu.classList.remove("-z-50");
  }
  if (document.body.style.overflowY == "auto") {
    document.body.style.overflowY == "hidden";
  } else {
    document.body.style.overflowY == "auto";
  }
});

closeBtn.addEventListener("click", () => {
  if (menu.style.zIndex == 0) {
    menu.classList.add("opacity-0");
    menu.classList.add("-z-50");
    menu.classList.remove("opacity-100");
    menu.classList.remove("z-50");
  }
  if (document.body.style.overflowY == "hidden") {
    document.body.style.overflowY == "auto";
  } else {
    document.body.style.overflowY == "hidden";
  }
});

// CHECKBOX FUNCTIONS

const checkbox = document.querySelectorAll("#checkbox");
const checked = document.querySelectorAll("#checked");
const checkInput = document.querySelectorAll("#checkInput");

checkbox.forEach((item, index) => {
  item.addEventListener("click", () => {
    checked[index].classList.toggle("hidden");
    checked[index].classList.toggle("block");
  });
});
checkInput.forEach((item, index) => {
  item.classList.add("cursor-pointer");
  item.addEventListener("click", () => {
    checked[index].classList.toggle("hidden");
    checked[index].classList.toggle("block");
  });
});

//  CARDBOX FUNCTION

let cardInfo = [
  {
    img: "./img/katalog/1.png",
    catigory: "Эконом",
    size: "Размеры (ШхГхВ) - 90х70х180 см",
    square: "Площадь - 0,63 м2",
    price: "100₽",
  },
  {
    img: "./img/katalog/2.png",
    catigory: "Эконом плюс",
    size: "Размеры (ШхГхВ) - 90х70х180 см",
    square: " Площадь - 0,90 м2",
    price: "200₽",
  },
  {
    img: "./img/katalog/3.png",
    catigory: "Комфорт",
    size: "Размеры (ШхГхВ) - 100х125х180 см",
    square: "Площадь - 1,13 м2",
    price: "250₽",
  },
  {
    img: "./img/katalog/4.png",
    catigory: "Сьют",
    size: "Размеры (ШхГхВ) - 125х125х180 см",
    square: "Площадь - 1,56 м2",
    price: "350₽",
  },
  {
    img: "./img/katalog/5.png",
    catigory: "Люкс",
    size: "Размеры (ШхГхВ) - 160х160х180 см",
    square: "Площадь - 2,56 м2",
    price: "500₽",
  },
  {
    img: "./img/katalog/6.png",
    catigory: "Супер-Люкс",
    size: "Размеры (ШхГхВ) - 180х160х180 см",
    square: "Площадь - 2,88 м2",
    price: "600₽",
  },
];
const cardBox = document.getElementById('cardBox')

cardInfo.forEach((item, index) => {
  let box = document.createElement("div");
  box.innerHTML = `
  <div
  class="border-2 border-[#e1e1e1] rounded-md overflow-hidden"
>
  <img src="${item.img}" alt="img" />
  <div class="px-5 py-6">
    <h4 class="text-xl leading-6 text-black1 font-medium mb-5">
      ${item.catigory}
    </h4>
    <ul class="flex flex-col mb-6 gap-4">
      <li class="flex text-[14px] leading-4 text-[#353433]">
        ${item.size}
      </li>
      <li class="flex text-[14px] leading-4 text-[#353433]">
       ${item.square}
      </li>
      <li class="flex gap-3 text-[14px] leading-4 text-[#353433]">
        Оснащение номера
        <div class="w-4 h-4">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 8C16 10.1369 15.1678 12.1458 13.6569 13.6569C12.1458 15.1678 10.1369 16 8 16C6.50409 16 5.07116 15.5917 3.82756 14.8287L4.74475 13.9115C5.71069 14.4455 6.82037 14.75 8 14.75C11.722 14.75 14.75 11.722 14.75 8C14.75 6.82037 14.4455 5.71069 13.9115 4.74478L14.8287 3.82759C15.5917 5.07116 16 6.50409 16 8ZM0.910688 15.9732L0.0268125 15.0893L1.91831 13.1978C0.677094 11.7502 0 9.92716 0 8C0 5.86312 0.832156 3.85416 2.34313 2.34313C3.85416 0.832156 5.86312 0 8 0C9.92716 0 11.7502 0.677094 13.1978 1.91831L15.0893 0.0268125L15.9732 0.910688L0.910688 15.9732ZM2.80791 12.3082L12.3082 2.80791C11.1385 1.83559 9.63641 1.25 8 1.25C4.27803 1.25 1.25 4.27803 1.25 8C1.25 9.63641 1.83556 11.1385 2.80791 12.3082Z"
              fill="#777777"
            />
          </svg>
        </div>
      </li>
      <li class="flex gap-2.5 text-[14px] leading-4 text-[#353433]">
        Цена за сутки: <span class="font-medium">${item.price}</span>
      </li>
    </ul>
    <button
      class="flex pr-2 pl-7 py-2 leading-4 justify-end items-center gap-5 text-[#FFFDFB] font-semibold bg-[#FF7236] rounded-3xl"
    >
      Забронировать
      <img
        class="w-9 h-9 flex"
        src="./img/home/number/paw.svg"
        alt="paw"
      />
    </button>
  </div>
</div>
  `;

  cardBox.appendChild(box)
  
});
